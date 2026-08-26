# Post-audit deploy checklist

Everything in the SEO audit that could be fixed in this repository has been. This
file covers the rest: the items that live in the Cloudflare dashboard, Search
Console, or on the `.com` site, and which no amount of code here can do.

They are ordered by impact. **Items 1–3 matter more than every code change in
this branch combined**, because the site's problem is discovery, not markup.

---

## 1. Link ophthamcq.com → ophthamcq.org  ⚠️ highest impact

No page anywhere on the web links to `ophthamcq.org`. A literal-string search for
the domain returns nothing. Google discovers pages through links, so a domain
with none gets almost no crawl budget — which is the single largest reason
nothing is indexed.

`ophthamcq.com` is already indexed and ranks for the brand. It is also the one
trusted link you can grant yourself for free.

**Do this on the .com site:**

- Add a header or footer nav item — "Study guides", "Blog", or "Free MCQs" —
  pointing at `https://ophthamcq.org/`.
- Link individual `.com` product pages to their matching `.org` page, e.g.
  `.com/new-courses/3-retina-deciphered…` → `https://ophthamcq.org/products/retina-deciphered/`.
- Do **not** add `rel="nofollow"`. The point is to pass authority.

This also fixes the one-way leak: the `.org` currently sends 701 links to `.com`
across 160 pages and receives none back.

---

## 2. Search Console

Verification is already present as a DNS TXT record, so this is only a few
minutes of clicking.

- [ ] Submit `https://ophthamcq.org/sitemap.xml` under **Indexing → Sitemaps**.
- [ ] Use **URL Inspection → Request indexing** on these first, in this order:

  ```
  /                                          /free-mcqs/general/
  /free-mcqs/                                /free-mcqs/high-yield/
  /exams/frcophth/                           /exams/ico-fico/
  /exams/dnb/                                /exams/faico/
  /notes/                                    /compare/best-ophthalmology-question-banks/
  /blog/                                     /blog/frcophth-part-1-syllabus-exam-pattern/
  /blog/100-free-ophthalmology-mcqs-with-explanations/
  /blog/glaucoma-mcqs-40-questions-from-basics-to-surgery/
  ```

  There is a daily quota of roughly 10 manual requests, so spread it over two
  days rather than trying to submit everything.

- [ ] Watch **Coverage** and **Impressions**, not Clicks. Impressions rising with
  clicks flat is the expected shape at month one.

---

## 3. Cloudflare dashboard

### 3a. Always Use HTTPS

`http://ophthamcq.org/` currently answers `200 OK` instead of redirecting, which
is a complete duplicate copy of all 160 pages on an insecure origin.

**SSL/TLS → Edge Certificates → Always Use HTTPS: On**

The repo half of this fix — the HSTS header — is already in `public/_headers`.

### 3b. Turn off the managed robots.txt

Cloudflare is prepending its own AI-crawler block above `public/robots.txt`. The
served file had two conflicting `User-agent: *` groups and a `Disallow: /`
followed later by `Allow: /` for GPTBot, ClaudeBot, CCBot, PerplexityBot,
Google-Extended, Bytespider, Amazonbot, Applebot-Extended and meta-externalagent.

Googlebot is unaffected — it is never disallowed. But AI crawlers that honour the
first matching group read `Disallow` and leave, which closes off ChatGPT,
Claude and Perplexity as a discovery channel.

Pick one policy:

- **To allow AI crawlers** (matches the intent of `public/llms.txt`):
  **AI Crawl Control → robots.txt → managed file: Off.** `public/robots.txt` then
  applies on its own.
- **To block them:** leave Cloudflare's file on and delete `public/robots.txt`.

Do not leave both in place.

---

## 4. Rotate the leaked API key

`src/lib/thestacc.ts` hardcoded a live key as a fallback:

```
pk_live_gHcZrdMCQYDfWpXT7nX_nEt4bUru1hOx2s7Db7GkUms
```

The file was dead code — nothing imported it, since the blog now builds from
local markdown — so it has been **deleted**. The key is still in git history and
must be rotated at theStacc regardless.

---

## 5. First deploy

```bash
npm run build          # runs prebuild (asset sizes) automatically
npm run seo:check      # gate — must print "All SEO checks passed."
npx wrangler deploy -c dist/client/wrangler.json
```

Then push everything to IndexNow once. Bing indexes new domains far faster than
Google and confirms the pipeline works:

```bash
npm run indexnow:sitemap
```

For subsequent deploys, set `INDEXNOW_SUBMIT=1` in the deploy environment and
the build hook submits only changed posts.

---

## 6. Verify after deploy

```bash
curl -sI http://ophthamcq.org/                  # expect 301 → https  (item 3a)
curl -s  https://ophthamcq.org/robots.txt       # expect one User-agent: * group (item 3b)
curl -sI https://ophthamcq.org/og-image.jpg     # expect 200
curl -s  https://ophthamcq.org/sitemap.xml | grep -c '<lastmod>'   # expect 160
```

Then run the free-MCQ check — this is the fix with the most upside, so it is
worth confirming the question text really is in the served HTML:

```bash
curl -s https://ophthamcq.org/free-mcqs/general/ \
  | sed 's/<script[^>]*>.*<\/script>//g' | grep -c 'Show answer and explanation'
# expect 203
```

---

## Expected timeline

| When | What to expect |
| --- | --- |
| 10–20 days after item 1 and 2 | First URLs appear in the index |
| 6–10 weeks | First meaningful impressions in Search Console |
| 3–5 months | First material organic traffic |

That curve is the normal cost of a new domain. The content to fill it is already
written.
