/**
 * Normalises internal links to end with a trailing slash.
 *
 * Astro serves /about/ and 307-redirects /about to it. The site linked to the
 * slashless form in 7,743 places, so every one of those was an extra round trip
 * for a crawler — real crawl budget on a domain that has very little of it.
 *
 * Only touches site-absolute paths that look like routes: skips "/", anything
 * with a file extension, and anything already ending in "/".
 *
 * Run with --dry-run to preview.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOTS = ['src'];
const EXTS = new Set(['.astro', '.ts', '.js', '.tsx', '.jsx']);
const dryRun = process.argv.includes('--dry-run');

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (EXTS.has(extname(entry))) out.push(path);
  }
  return out;
}

/** "/exams" -> "/exams/", "/exams#x" -> "/exams/#x", "/a.pdf" -> unchanged. */
function normalise(path) {
  const [route, ...rest] = path.split(/(?=[#?])/);
  if (route === '/' || route.endsWith('/')) return null;
  if (extname(route)) return null;
  return `${route}/${rest.join('')}`;
}

// href="/x" and href='/x' in markup, plus href: '/x' in data objects.
const PATTERNS = [
  /href="(\/[^"{}]*)"/g,
  /href='(\/[^'{}]*)'/g,
  /href:\s*'(\/[^']*)'/g,
  /href:\s*"(\/[^"]*)"/g,
];

let changedFiles = 0;
let changedLinks = 0;

for (const root of ROOTS) {
  for (const file of walk(root)) {
    const source = readFileSync(file, 'utf8');
    let updated = source;

    for (const pattern of PATTERNS) {
      updated = updated.replace(pattern, (match, path) => {
        const fixed = normalise(path);
        if (!fixed) return match;
        changedLinks++;
        return match.replace(path, fixed);
      });
    }

    if (updated !== source) {
      changedFiles++;
      if (!dryRun) writeFileSync(file, updated);
    }
  }
}

console.log(
  `${dryRun ? 'would fix' : 'fixed'} ${changedLinks} links across ${changedFiles} files`
);
