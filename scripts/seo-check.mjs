/**
 * Post-build SEO gate. Reads dist/client and reports the checks the audit
 * flagged, so a regression shows up before deploy rather than in Search
 * Console six weeks later.
 *
 * Run: node scripts/seo-check.mjs   (exits 1 if any check fails)
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist/client';
const MAX_TITLE = 65;
const MIN_DESC = 70;
const MAX_DESC = 160;
const MIN_WORDS = 300;

function htmlFiles(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) htmlFiles(path, out);
    else if (entry.endsWith('.html')) out.push(path);
  }
  return out;
}

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const pages = htmlFiles(DIST)
  .filter((f) => !f.endsWith('404.html'))
  .map((file) => {
    const html = readFileSync(file, 'utf8');
    const url = '/' + relative(DIST, file).replace(/index\.html$/, '');
    const grab = (re) => {
      const m = html.match(re);
      return m ? decode(m[1].trim()) : '';
    };
    const text = html
      .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, '')
      .replace(/<[^>]+>/g, ' ');

    const schemaTypes = new Set();
    let schemaBroken = null;
    for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        const parsed = JSON.parse(block[1]);
        for (const node of parsed['@graph'] ?? [parsed]) schemaTypes.add(node['@type']);
      } catch (err) {
        schemaBroken = err.message;
      }
    }

    return {
      url,
      title: grab(/<title[^>]*>([\s\S]*?)<\/title>/),
      desc: grab(/<meta name="description" content="([^"]*)"/),
      canonical: grab(/<link rel="canonical" href="([^"]*)"/),
      h1: (html.match(/<h1[\s>]/g) || []).length,
      words: text.split(/\s+/).filter(Boolean).length,
      imgs: [...html.matchAll(/<img[^>]*>/g)].map((m) => m[0]),
      schemaTypes,
      schemaBroken,
    };
  });

const failures = [];
const warnings = [];

function check(label, offenders, { warn = false, show = 5 } = {}) {
  const line = `${offenders.length ? '✗' : '✓'} ${label}: ${offenders.length}`;
  console.log(line);
  for (const o of offenders.slice(0, show)) console.log(`    ${o}`);
  if (offenders.length > show) console.log(`    … and ${offenders.length - show} more`);
  if (offenders.length) (warn ? warnings : failures).push(label);
}

console.log(`Checked ${pages.length} pages in ${DIST}\n`);

check(
  `titles over ${MAX_TITLE} chars`,
  pages.filter((p) => p.title.length > MAX_TITLE).map((p) => `${p.title.length} ${p.url}`)
);
check(
  `descriptions outside ${MIN_DESC}-${MAX_DESC} chars`,
  pages
    .filter((p) => p.desc.length < MIN_DESC || p.desc.length > MAX_DESC)
    .map((p) => `${p.desc.length} ${p.url}`)
);
check('missing canonical', pages.filter((p) => !p.canonical).map((p) => p.url));
check('h1 count != 1', pages.filter((p) => p.h1 !== 1).map((p) => `h1=${p.h1} ${p.url}`));
check('missing structured data', pages.filter((p) => p.schemaTypes.size === 0).map((p) => p.url));
check('missing BreadcrumbList', pages.filter((p) => !p.schemaTypes.has('BreadcrumbList') && p.url !== '/').map((p) => p.url));
check('invalid JSON-LD', pages.filter((p) => p.schemaBroken).map((p) => `${p.url} — ${p.schemaBroken}`));

const dupes = (key) => {
  const seen = new Map();
  for (const p of pages) {
    const v = p[key];
    if (!v) continue;
    seen.set(v, [...(seen.get(v) ?? []), p.url]);
  }
  return [...seen.entries()].filter(([, urls]) => urls.length > 1).map(([v, urls]) => `${urls.length}x "${v.slice(0, 60)}"`);
};
check('duplicate titles', dupes('title'));
check('duplicate descriptions', dupes('desc'));

check(
  'images without width/height',
  pages
    .map((p) => {
      const bad = p.imgs.filter((i) => !/width=/.test(i) || !/height=/.test(i)).length;
      return bad ? `${bad}/${p.imgs.length} ${p.url}` : null;
    })
    .filter(Boolean)
);

check(
  `thin pages under ${MIN_WORDS} words`,
  pages.filter((p) => p.words < MIN_WORDS).map((p) => `${p.words}w ${p.url}`),
  { warn: true }
);

// Internal links: every target must exist, and must already be in its
// canonical trailing-slash form so crawlers never spend a hop on a 307.
const routes = new Set(pages.map((p) => p.url));
const assets = new Set();
(function collectAssets(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) collectAssets(path);
    else assets.add('/' + relative(DIST, path).split(/[\\/]/).join('/'));
  }
})(DIST);

const slashless = new Map();
const broken = new Map();

for (const page of pages) {
  const html = readFileSync(join(DIST, page.url === '/' ? 'index.html' : `${page.url}index.html`), 'utf8');
  for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
    const route = href.split(/[#?]/)[0];
    if (route === '/') continue;

    const hasExtension = /\.[a-z0-9]{2,5}$/i.test(route);
    if (!hasExtension && !route.endsWith('/')) {
      slashless.set(route, (slashless.get(route) ?? 0) + 1);
      continue;
    }
    if (hasExtension ? !assets.has(route) : !routes.has(route)) {
      broken.set(route, (broken.get(route) ?? 0) + 1);
    }
  }
}

check(
  'internal links missing trailing slash',
  [...slashless.entries()].map(([u, n]) => `${n}x ${u}`)
);
check(
  'internal links to a missing target',
  [...broken.entries()].map(([u, n]) => `${n}x ${u}`)
);

// Sitemap must carry a lastmod for every URL.
const sitemapPath = join(DIST, 'sitemap-0.xml');
if (existsSync(sitemapPath)) {
  const xml = readFileSync(sitemapPath, 'utf8');
  const locs = (xml.match(/<loc>/g) || []).length;
  const mods = (xml.match(/<lastmod>/g) || []).length;
  check('sitemap URLs missing lastmod', locs === mods ? [] : [`${locs - mods} of ${locs}`]);
} else {
  failures.push('sitemap missing');
  console.log('✗ sitemap-0.xml not found');
}

console.log();
if (warnings.length) console.log(`warnings: ${warnings.join(', ')}`);
if (failures.length) {
  console.log(`FAILED: ${failures.join(', ')}`);
  process.exit(1);
}
console.log('All SEO checks passed.');
