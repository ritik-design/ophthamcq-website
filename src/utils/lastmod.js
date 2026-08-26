/**
 * Builds a URL -> last-modified map for the sitemap.
 *
 * Every one of the 158 sitemap entries used to ship without a <lastmod>, so
 * crawlers had no freshness signal and no reason to prioritise anything. Blog
 * URLs take their date from the draft's own frontmatter; every other route
 * falls back to the mtime of the .astro file that generates it.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DRAFTS_DIR = 'docs/content-drafts/first-100';
const PAGES_DIR = 'src/pages';

/** Drafts excluded from getStaticPaths in src/pages/blog/[slug].astro. */
const EXCLUDED_DRAFTS = /\/(17|18|19|077|078)-/;

/** Pull a single scalar frontmatter value without a YAML dependency. */
function frontmatterValue(source, key) {
  const match = source.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+)["']?\\s*$`, 'm'));
  return match ? match[1].trim() : null;
}

function toDate(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** /blog/<slug>/ -> the draft's last_updated, falling back to its date. */
function blogDates(root) {
  const dir = join(root, DRAFTS_DIR);
  const map = new Map();
  if (!existsSync(dir)) return map;

  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.md') || EXCLUDED_DRAFTS.test(`/${file}`)) continue;

    const source = readFileSync(join(dir, file), 'utf8');
    const slug = frontmatterValue(source, 'proposed_slug');
    if (!slug) continue;

    const date =
      toDate(frontmatterValue(source, 'last_updated')) ??
      toDate(frontmatterValue(source, 'fact_check_date')) ??
      toDate(frontmatterValue(source, 'date')) ??
      statSync(join(dir, file)).mtime;

    map.set(`/blog/${slug}/`, date);
  }

  return map;
}

function mtimeOrNull(path) {
  try {
    return statSync(path).mtime;
  } catch {
    return null;
  }
}

/**
 * Resolve a pathname to the .astro file that renders it, checking the static
 * route first and then the dynamic [param] route in the same directory.
 */
function pageMtime(root, pathname) {
  const clean = pathname.replace(/^\/|\/$/g, '');
  const pages = join(root, PAGES_DIR);

  if (clean === '') return mtimeOrNull(join(pages, 'index.astro'));

  const direct =
    mtimeOrNull(join(pages, `${clean}.astro`)) ?? mtimeOrNull(join(pages, clean, 'index.astro'));
  if (direct) return direct;

  const segments = clean.split('/');
  const parent = segments.slice(0, -1).join('/');
  const dir = parent ? join(pages, parent) : pages;
  if (!existsSync(dir)) return null;

  const dynamic = readdirSync(dir).find((f) => f.startsWith('[') && f.endsWith('.astro'));
  return dynamic ? mtimeOrNull(join(dir, dynamic)) : null;
}

/**
 * @param {string} root absolute project root
 * @returns {(pathname: string) => Date} resolver used by the sitemap serializer
 */
export function createLastmodResolver(root) {
  const blog = blogDates(root);
  const fallback = mtimeOrNull(join(root, 'astro.config.mjs')) ?? new Date();

  return function lastmodFor(pathname) {
    return blog.get(pathname) ?? pageMtime(root, pathname) ?? fallback;
  };
}
