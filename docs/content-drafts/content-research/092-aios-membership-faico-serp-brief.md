# SERP / research brief — AIOS Membership: Verification and FAICO Requirements

**Queue:** 92  
**Date checked:** 18 August 2026  
**Draft:** `first-100/092-aios-membership-what-it-costs-what-you-get-why-faico-needs-it.md`

## Strategy block

| Field | Decision |
|---|---|
| Primary keyword | AIOS membership |
| Secondary queries | AIOS membership fee; AIOS membership benefits; FAICO eligibility; AIOS FAICO application |
| Search intent | Informational, administrative, time-sensitive |
| Reader JTBD | An ophthalmology trainee wants to verify whether their current AIOS membership record matches a specific FAICO notice, without relying on stale fees or benefits claims |
| Buyer stage | Unaware → consideration |
| ICP | Indian ophthalmology PG residents and postgraduates considering FAICO |
| Format | Notice-first verification workflow and document checklist |
| Cannibalisation | **KEEP SEPARATE.** `/exams/faico` is exam preparation; the draft is AIOS membership/FAICO administration. |
| Cluster | Career → FAICO administration |

## Authority ledger and freshness boundary

| Source | Supports | Deliberately withheld |
|---|---|---|
| [AIOS home](https://www.aios.org/) | Official society gateway | Membership cost, category, benefits or application status |
| [AIOS About FAICO](https://www.aios.org/article-66-about-faico.php) | Official FAICO information/eligibility gateway; page currently lists AIOS membership among published eligibility conditions | Fee, deadline, centres, examination format, cycle, qualification/experience terms and any reader’s eligibility |

Both AIOS endpoints returned HTTP 200 on 18 August 2026. The FAICO page contains current-cycle operational details, but those facts are mutable and were intentionally not copied into the article. Final editor and reader must re-open the named AIOS page before publication/application.

## Query fan-out

- What membership category applies to me, and where is its current rule?
- Does membership alone make me eligible for FAICO?
- What fees, benefits, documents and deadlines must be checked from the current notice?
- How should I preserve an application evidence trail?
- When should I start studying rather than continue researching admin details?

## SERP gap and information gain

Search results frequently lead with a stale fee amount or a generic “benefits” list. The high-value gap is an administrative workflow that treats the AIOS notice as the source of truth, captures `unknown` fields honestly, separates membership from FAICO eligibility, and moves the candidate into study only after confirmation.

**Differentiation statement:** A deliberately non-directory, no-stale-fees guide that turns a mutable membership question into an evidence-backed FAICO application checklist.

## Internal-link manifest

| Source section | Destination | Anchor | Type | Reason | Priority |
|---|---|---|---|---|---|
| FAICO connection | `/exams/faico` | FAICO preparation guide | BODY_CONTEXTUAL | separates admin verification from study | P0 |
| Study transition | `/free-mcqs/faico` | free FAICO sample questions | BODY_CONTEXTUAL | free gap-identification route | P1 |
| Study transition | `/products/faico-mcqs` | FAICO MCQs | BODY_CONTEXTUAL | product-information route | P0 |

All routes are present in the inventory. No blog URL is proposed because the current API-backed blog sitemap is not verifiable.

**Inbound opportunities:** `/exams/faico`, `/resources`, and `/faq` only after its current FAICO text is reconciled to the live AIOS notice.

## QA

- No fee, perk, membership category, deadline, centre, application form, eligibility outcome or FAICO outcome claim.
- AIOS is presented as independent; no endorsement or affiliation is implied.
- Internal links exclude prohibited and unpublished destinations.
- Membership as a listed FAICO eligibility condition is attributed to the dated official page and is explicitly marked for recheck.
