# OphthaMCQ content plan

SEO and content planning artefacts derived from the site audit and the ranked-keyword
export (August 2026). Nothing here is built by Astro — these are planning documents
that live alongside the site, not pages of it.

## Start here

| File | What it is |
|---|---|
| `ophthamcq-content-bank.html` | **Everything in one page.** 264 unique ideas: the priority 100 in publish order, the 163-idea keyword bank, and the 100-post strategic plan. Open it in a browser. |

## The individual pieces

| File | What it is |
|---|---|
| `ophthamcq-first-100.html` / `.csv` | The first 100 topics in publish order, with primary + secondary keywords (427 total), volume, KD and target page. |
| `ophthamcq-content-ideas.html` / `ophthamcq-content-ideas-from-data.csv` | 163 ideas, each traced to a keyword in the ranked-keyword export. Grouped by format: acronyms, eponyms, clinical tests, classifications, fellowships, exam entities, basic sciences. |
| `ophthamcq-100-post-plan.html` / `ophthamcq-100-post-plan.csv` | The earlier strategic plan — exam guides, OSCE walkthroughs, study plans, book comparisons and career posts. Built before the keyword data arrived, so its volumes are estimates. |

## Before publishing anything

1. **Consolidate the cannibalised terms.** Six terms are split across 39 of our own
   URLs on ophthamcq.com — 8 competing for `fico ophthalmology`, 7 for
   `faico full form`. The `?page=0` parameter and the www / non-www split multiply it.
   Pick one surviving URL per term, 301 the rest, set one canonical.
2. **Decide where the blog lives.** Ranking content currently sits on
   `ophthamcq.com/app-blog`; the `.org` blog is API-fed by theStacc and the key is
   revoked, so a rebuild ships zero posts. Publishing across both domains repeats
   problem 1 at scale.
3. **Fix the `.com` technical basics** — one shared `<title>` across all pages, no H1,
   no JSON-LD, and a canonical of `www.ophthamcq.com` with no scheme.

## Data provenance

Volume and KD figures come from the ranked-keyword export where a row shows numbers.
Rows showing an em dash have no measured data — they are siblings of formats proven to
rank in the same SERP neighbourhood. Every figure in the 100-post strategic plan is an
estimate: no keyword API was connected when it was written.

## Per-article spec

Primary keyword answered in a complete sentence within the first 100 words; secondaries
as H2s; FAQPage and Article schema; five practice MCQs at the end; one contextual link
to the target page named in the plan.

House rules still apply: no exam-outcome or pass-rate claims, no implied endorsement by
RCOphth, ICO, AIOS, NBE or AAO, and never link `/exams/neet-ss`, `/exams/okaps`,
`/privacy`, `/terms` or `/refunds` until those pages exist.
