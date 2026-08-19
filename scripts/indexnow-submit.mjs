#!/usr/bin/env node
/**
 * IndexNow submitter for the OphthaMCQ blog.
 *
 * Submits new/changed blog URLs to the IndexNow API so Bing, Yandex, Seznam
 * and Naver pick them up without waiting for a crawl. Google does not
 * participate in IndexNow — it still relies on the sitemap.
 *
 * Only genuinely changed posts are submitted: a SHA-256 of each post's
 * rendered-relevant content is stored in scripts/indexnow-state.json and
 * compared on the next run. IndexNow explicitly discourages resubmitting
 * unchanged URLs, and hosts that do it can be throttled.
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs              # submit changed posts
 *   node scripts/indexnow-submit.mjs --dry-run    # show what would be sent
 *   node scripts/indexnow-submit.mjs --all        # ignore state, submit every post
 *   node scripts/indexnow-submit.mjs --quiet      # only warn/error output
 *
 * Exit codes: 0 = success or nothing to do, 1 = submission failed.
 */

import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const POSTS_DIR = join(ROOT, 'docs/content-drafts/first-100');
const KEY_DIR = join(ROOT, 'public');
const STATE_FILE = join(ROOT, 'scripts/indexnow-state.json');

const HOST = 'ophthamcq.org';
const ORIGIN = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

// Mirrors the exclusion in src/pages/blog/[slug].astro — these numbered
// drafts are superseded by later files and are not built into the site.
const EXCLUDED = /^(17|18|19|077|078)-/;

// IndexNow accepts at most 10,000 URLs per request.
const MAX_URLS_PER_REQUEST = 10000;

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has('--dry-run');
const SUBMIT_ALL = args.has('--all');
const QUIET = args.has('--quiet');

const log = (...a) => !QUIET && console.log(...a);
const warn = (...a) => console.warn(...a);

/** Read the IndexNow key from the public/<key>.txt file that serves it. */
async function readKey() {
  const files = await readdir(KEY_DIR);
  const keyFiles = files.filter((f) => /^[a-f0-9]{8,128}\.txt$/i.test(f));

  if (keyFiles.length === 0) {
    throw new Error(
      `No IndexNow key file found in public/. Create public/<key>.txt whose ` +
        `filename (minus .txt) matches its contents.`,
    );
  }
  if (keyFiles.length > 1) {
    throw new Error(`Multiple IndexNow key files in public/: ${keyFiles.join(', ')}. Keep exactly one.`);
  }

  const file = keyFiles[0];
  const expected = basename(file, '.txt');
  const contents = (await readFile(join(KEY_DIR, file), 'utf-8')).trim();

  // The API rejects the whole batch if the file body and filename disagree.
  if (contents !== expected) {
    throw new Error(
      `IndexNow key mismatch: public/${file} contains "${contents}" but its ` +
        `filename implies "${expected}". They must be identical.`,
    );
  }

  return { key: expected, keyLocation: `${ORIGIN}/${file}` };
}

/** Parse the frontmatter block of a post into a flat object. */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  const [, block, body] = match;
  const data = {};
  for (const line of block.split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim().replace(/^"(.*)"$/, '$1');
  }
  return { data, body };
}

/** Collect every blog post that is actually built into the site. */
async function collectPosts() {
  const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith('.md')).sort();
  const posts = [];

  for (const file of files) {
    if (EXCLUDED.test(file)) continue;

    const parsed = parseFrontmatter(await readFile(join(POSTS_DIR, file), 'utf-8'));
    if (!parsed) {
      warn(`  skipped ${file}: no frontmatter block`);
      continue;
    }

    const slug = parsed.data.proposed_slug;
    if (!slug) continue; // getStaticPaths filters these out too — no such URL exists.

    // Hash the body plus the frontmatter fields that reach the rendered page.
    // Editorial-only fields (status, primary_keyword, fact_check_date) are
    // excluded so tweaking them does not trigger a pointless resubmission.
    const signature = JSON.stringify({
      title: parsed.data.title ?? '',
      meta_description: parsed.data.meta_description ?? '',
      excerpt: parsed.data.excerpt ?? '',
      category: parsed.data.category ?? '',
      author: parsed.data.author ?? '',
      date: parsed.data.date ?? '',
      body: parsed.body,
    });

    posts.push({
      file,
      slug,
      url: `${ORIGIN}/blog/${slug}/`,
      hash: createHash('sha256').update(signature).digest('hex'),
    });
  }

  return posts;
}

async function readState() {
  try {
    const parsed = JSON.parse(await readFile(STATE_FILE, 'utf-8'));
    return parsed.posts ?? {};
  } catch (err) {
    if (err.code === 'ENOENT') return {}; // First run — everything counts as new.
    throw new Error(`Could not read ${STATE_FILE}: ${err.message}`);
  }
}

async function writeState(posts) {
  const entries = Object.fromEntries(posts.map((p) => [p.slug, p.hash]));
  const payload = {
    // Recorded so a human can tell when the last successful submission ran.
    lastSubmitted: new Date().toISOString(),
    host: HOST,
    posts: entries,
  };
  await writeFile(STATE_FILE, `${JSON.stringify(payload, null, 2)}\n`);
}

/** POST one batch of URLs to IndexNow. Returns true on success. */
async function submitBatch(urls, key, keyLocation) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList: urls }),
  });

  // 200 = accepted, 202 = accepted but key still being validated. Both are fine.
  if (response.status === 200 || response.status === 202) {
    log(`  IndexNow accepted ${urls.length} URL(s) (HTTP ${response.status})`);
    return true;
  }

  // The API returns a plain-text or JSON reason; surface it rather than a bare code.
  const detail = (await response.text().catch(() => '')).trim();
  const hints = {
    400: 'Invalid request format.',
    403: 'Key rejected — check the key file is reachable at ' + keyLocation,
    422: 'URLs do not match the declared host, or the key does not match.',
    429: 'Too many requests — you are being rate limited.',
  };
  warn(`  IndexNow rejected the batch (HTTP ${response.status}). ${hints[response.status] ?? ''}`);
  if (detail) warn(`  Response: ${detail.slice(0, 500)}`);
  return false;
}

async function main() {
  const { key, keyLocation } = await readKey();
  const posts = await collectPosts();

  if (posts.length === 0) {
    warn('No blog posts found — nothing to submit.');
    return 0;
  }

  const state = SUBMIT_ALL ? {} : await readState();
  const changed = posts.filter((p) => state[p.slug] !== p.hash);
  const isFirstRun = !SUBMIT_ALL && Object.keys(state).length === 0;

  log(`IndexNow: ${posts.length} published post(s), ${changed.length} to submit.`);

  if (changed.length === 0) {
    log('Nothing changed since the last submission.');
    return 0;
  }

  if (isFirstRun) {
    log('No previous state file — treating every post as new for this first run.');
  }

  for (const p of changed) log(`  + ${p.url}`);

  if (DRY_RUN) {
    log('Dry run — nothing was submitted and the state file was not updated.');
    return 0;
  }

  const urls = changed.map((p) => p.url);
  let allOk = true;
  for (let i = 0; i < urls.length; i += MAX_URLS_PER_REQUEST) {
    const batch = urls.slice(i, i + MAX_URLS_PER_REQUEST);
    if (!(await submitBatch(batch, key, keyLocation))) allOk = false;
  }

  if (!allOk) {
    warn('Submission failed — state file left unchanged so the next run retries.');
    return 1;
  }

  // Persist the full set, not just the changed ones, so removed posts drop out.
  await writeState(posts);
  log(`Recorded ${posts.length} hash(es) in scripts/indexnow-state.json — commit this file.`);
  return 0;
}

main()
  .then((code) => process.exit(code))
  .catch((err) => {
    console.error(`IndexNow submission error: ${err.message}`);
    process.exit(1);
  });
