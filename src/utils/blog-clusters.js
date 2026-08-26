/**
 * Groups the blog into topical clusters and resolves related posts.
 *
 * Across 103 drafts there were 14 blog-to-blog links in total, so 85 posts had
 * no inbound link from any sibling. Every internal link pointed at a hub page.
 * Google therefore saw 99 unrelated documents rather than a body of authority
 * on FRCOphth, on DNB, on OSCE — and clustering is how a site with no backlinks
 * earns topical trust.
 *
 * Assignment is derived from frontmatter rather than hand-maintained, so new
 * posts join a cluster the moment they are written.
 */

/**
 * Ordered most-specific first: the first cluster whose pattern matches wins,
 * so "FRCOphth study plan" lands in FRCOphth rather than in Study Plans.
 * `hub` links the cluster to the funnel page it should feed.
 */
const CLUSTERS = [
  {
    id: 'frcophth',
    name: 'FRCOphth',
    blurb: 'Part 1, Part 2 Written and the OSCE, plus eligibility and planning for international candidates.',
    hub: { href: '/exams/frcophth/', label: 'FRCOphth preparation' },
    pattern: /frcophth|royal college|\bost\b/i,
  },
  {
    id: 'ico-fico',
    name: 'ICO & FICO',
    blurb: 'Basic Visual Sciences, Optics, Clinical Sciences and the Advanced (FICO) route, with past papers.',
    hub: { href: '/exams/ico-fico/', label: 'ICO / FICO preparation' },
    pattern: /\bico\b|\bfico\b|basic visual sciences/i,
  },
  {
    id: 'faico',
    name: 'FAICO',
    blurb: 'The AIOS fellowship exam: eligibility, application, subspecialty papers and revision planning.',
    hub: { href: '/exams/faico/', label: 'FAICO preparation' },
    pattern: /faico|aios/i,
  },
  {
    id: 'dnb',
    name: 'DNB, MS & DO',
    blurb: 'Indian postgraduate exams — theory papers, practicals and what follows a DO or DNB.',
    hub: { href: '/exams/dnb/', label: 'DNB preparation' },
    pattern: /\bdnb\b|\bms ophthalmology\b|\bdo ophthalmology\b|university exam/i,
  },
  {
    id: 'entrance',
    name: 'PDCET & NEET-SS',
    blurb: 'Entrance and superspecialty routes: pattern, syllabus, cut-offs and preparation strategy.',
    hub: { href: '/exams/pd-cet/', label: 'PD-CET preparation' },
    pattern: /pd-?cet|neet-?ss|okap|okat|\bebo\b|febo/i,
  },
  {
    id: 'osce',
    name: 'OSCE, Practical & Viva',
    blurb: 'Stations, long and short cases, instruments, drugs and the questions examiners actually ask.',
    hub: { href: '/osce/', label: 'OSCE & practical bundle' },
    pattern: /osce|viva|long case|short case|practical|instrument|gonioscopy|perimetry|slit lamp|case presentation|proptosis|squint exam/i,
  },
  {
    id: 'topics',
    name: 'Topic Revision & MCQs',
    blurb: 'Subspecialty revision with explained MCQs — retina, glaucoma, cornea, uveitis, optics and more.',
    hub: { href: '/topics/', label: 'Topic study guides' },
    pattern: /\bmcqs?\b|retina|glaucoma|cornea|uveitis|keratitis|keratoplasty|strabismus|amblyopia|ptosis|anatomy|optics|refraction|pharmacolog|anti-vegf|\bamd\b|\brop\b|\bffa\b|icga|detachment/i,
  },
  {
    id: 'career',
    name: 'Career & Training',
    blurb: 'Fellowships, subspecialty choice, working abroad, salary, thesis and publishing.',
    hub: { href: '/exams/fellowship/', label: 'Fellowship preparation' },
    pattern: /career|salary|fellowship|abroad|\buk\b|thesis|publish|case report|subspecialt|residency|burnout|on call|survival/i,
  },
  {
    id: 'resources',
    name: 'Study Resources & Method',
    blurb: 'Books, apps, question banks, note-making and study plans that hold up under a clinical rota.',
    hub: { href: '/resources/', label: 'Free resources hub' },
    pattern: /book|app\b|question bank|notes|study plan|revision|spaced repetition|kanski|bcsc|ryan|resource/i,
  },
];

const FALLBACK = {
  id: 'general',
  name: 'Exam Preparation',
  blurb: 'General preparation guidance across the ophthalmology postgraduate exams.',
  hub: { href: '/exams/', label: 'All ophthalmology exams' },
};

/** Text we match a post against — title, keywords and category. */
function haystack(post) {
  return [
    post.title,
    post.seo_title,
    post.primary_keyword,
    Array.isArray(post.secondary_keywords) ? post.secondary_keywords.join(' ') : '',
    post.category,
    post.proposed_slug,
  ]
    .filter(Boolean)
    .join(' ');
}

/**
 * @param {Record<string, any>} post frontmatter
 * @returns {typeof CLUSTERS[number] | typeof FALLBACK}
 */
export function clusterFor(post) {
  const text = haystack(post);
  return CLUSTERS.find((cluster) => cluster.pattern.test(text)) ?? FALLBACK;
}

/**
 * Sibling posts in the same cluster, closest first.
 *
 * Ranking is by shared vocabulary between primary keywords and titles, so a
 * FRCOphth Part 1 post surfaces the other Part 1 posts before the Part 2 ones.
 *
 * @param {Record<string, any>} post the current post
 * @param {Record<string, any>[]} all every published post
 * @param {number} limit
 */
export function relatedPosts(post, all, limit = 6) {
  const cluster = clusterFor(post);
  const ownWords = new Set(
    haystack(post)
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length > 3)
  );

  const siblings = all
    .filter((p) => p.proposed_slug !== post.proposed_slug)
    .filter((p) => clusterFor(p).id === cluster.id);

  const scored = siblings
    .map((p) => {
      const words = haystack(p)
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((w) => w.length > 3);
      const overlap = words.filter((w) => ownWords.has(w)).length;
      return { post: p, overlap };
    })
    .sort((a, b) => b.overlap - a.overlap || a.post.title.localeCompare(b.post.title));

  const picked = scored.slice(0, Math.max(0, limit - 1)).map((s) => s.post);
  const seen = new Set([post.proposed_slug, ...picked.map((p) => p.proposed_slug)]);

  /**
   * Reserve the last slot for the next post in a stable cluster ordering.
   *
   * Relevance ranking alone leaves a tail of posts that never place in anyone's
   * top six, so they end up with no inbound link at all. Linking each post to
   * its successor forms a cycle through the cluster, which guarantees every
   * post is reachable from at least one sibling.
   */
  const ordered = [...siblings, post].sort((a, b) =>
    a.proposed_slug.localeCompare(b.proposed_slug)
  );
  const successor = ordered[(ordered.indexOf(post) + 1) % ordered.length];
  if (successor && !seen.has(successor.proposed_slug)) {
    picked.push(successor);
    seen.add(successor.proposed_slug);
  }

  // Top up from relevance, then from the wider archive, so a small cluster
  // still leaves the reader with a usable set of onward routes.
  for (const { post: candidate } of scored) {
    if (picked.length >= limit) break;
    if (seen.has(candidate.proposed_slug)) continue;
    picked.push(candidate);
    seen.add(candidate.proposed_slug);
  }
  for (const candidate of all) {
    if (picked.length >= limit) break;
    if (seen.has(candidate.proposed_slug)) continue;
    picked.push(candidate);
    seen.add(candidate.proposed_slug);
  }

  return { cluster, posts: picked };
}

/** Every cluster that has at least one post, in declaration order. */
export function clustersWithPosts(all) {
  const groups = new Map();
  for (const post of all) {
    const cluster = clusterFor(post);
    if (!groups.has(cluster.id)) groups.set(cluster.id, { cluster, posts: [] });
    groups.get(cluster.id).posts.push(post);
  }
  return [...CLUSTERS, FALLBACK].map((c) => groups.get(c.id)).filter(Boolean);
}

export { CLUSTERS };
