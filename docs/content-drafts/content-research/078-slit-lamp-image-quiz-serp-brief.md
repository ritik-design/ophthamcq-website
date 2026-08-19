# SERP and source brief — Slit-Lamp Image Quiz: Anterior-Segment Pattern Recognition

**Queue:** 78  
**Prepared:** 18 August 2026  
**Draft:** `first-100/078-slit-lamp-image-quiz-anterior-segment-pattern-recognition.md`  
**Primary keyword:** slit lamp image quiz  
**Secondary queries:** anterior segment quiz; slit-lamp images ophthalmology; cornea image quiz; anterior uveitis signs quiz

## Search, reader and business brief

| Field | Decision |
|---|---|
| Intent | Informational, practice-led examination revision. The reader wants an anterior-segment recognition exercise, not patient education or remote diagnosis. |
| Reader JTBD | Convert a visual cue into a defensible description, leading pattern and nearest differential under written-paper or viva pressure. |
| Audience | Ophthalmology PG residents and other postgraduate examination candidates. |
| Buyer stage | Unaware to problem-aware; a free revision resource is the appropriate entry point. |
| Expected format | Image quiz / answer key / short visual explanation. This repository cannot supply the images. |
| Cannibalisation | **KEEP SEPARATE** from `/topics/cornea`, `/topics/cataract` and `/osce`: the draft is a quiz-answer framework rather than a broad topic guide or practical bundle page. |
| Differentiation | Layer-first description, explicit differential boundary, text alternative and an asset-governance checklist before any image can be added. |
| CTA | Continue with `/free-mcqs/high-yield`; use topic pages for revision. No product-learning, score or pass claim. |

## Query fan-out and coverage

| Reader question | Draft coverage |
|---|---|
| What order should I use to describe a slit-lamp image? | Five-step answer sequence |
| How do I distinguish dendrite, pseudodendrite, infiltrate and ring pattern? | Prompts 1–4 and contrast cards |
| What should I say about KPs, hypopyon and pigment? | Prompts 5–9 |
| How do I localise guttae and lens opacity? | Prompts 10–12 |
| How can a quiz be accessible and image-asset safe? | Asset record and publication hold |

## Source ledger

Authority endpoints below were live-checked on 18 August 2026. They bind the educational morphology claims, not patient-specific diagnosis, treatment or image rights.

| Source | What it supports | URL | Check |
|---|---|---|---|
| AAO EyeWiki, Herpes Simplex Virus Keratitis | dendrite morphology and terminal bulbs | https://eyewiki.org/Herpes_Simplex_Virus_Keratitis | HTTP 200 |
| AAO EyeWiki, Herpes Zoster Ophthalmicus | pseudodendrite contrast | https://eyewiki.org/Herpes_Zoster_Ophthalmicus | HTTP 200 |
| AAO Bacterial Keratitis PPP | ulcer/infiltrate descriptive framework | https://www.aaojournal.org/article/S0161-6420(23)00707-7/fulltext | live endpoint checked |
| Dart et al., Acanthamoeba keratitis review | ring-infiltrate association and limitation | https://pubmed.ncbi.nlm.nih.gov/30601984/ | PubMed endpoint checked |
| SUN Working Group | anterior-chamber inflammation terminology | https://pubmed.ncbi.nlm.nih.gov/16325716/ | HTTP 203 (reachable PubMed gateway) |
| AAO EyeWiki, Pseudoexfoliation Syndrome | material distribution and pattern | https://eyewiki.org/Pseudoexfoliation_Syndrome | HTTP 200 |
| Fuchs Endothelial Corneal Dystrophy, GeneReviews | endothelial dysfunction/guttae context | https://www.ncbi.nlm.nih.gov/books/NBK1190/ | NCBI authority source |

## Internal-link preflight and manifest

Destinations were checked against the OphthaMCQ content inventory and Astro route structure on 18 August 2026.

| Source section | Destination | Anchor | Type | Reason | Priority |
|---|---|---|---|---|---|
| Compact revision route | `/free-mcqs/high-yield` | high-yield free MCQs | BODY_CONTEXTUAL | Mixed retrieval after pattern work | P2 |
| Compact revision route | `/topics/cornea` | cornea study guide | BODY_CONTEXTUAL | Layer and corneal-pattern revision | P1 |
| Compact revision route | `/topics/cataract` | cataract study guide | BODY_CONTEXTUAL | Lens-location terminology | P1 |
| Compact revision route | `/osce` | OSCE, Practical & Viva page | BODY_CONTEXTUAL | Practical-exam route | P0 |

**Inbound opportunities (do not insert before publication):** `/free-mcqs/high-yield`, `/topics/cornea`, `/osce`, `/resources`. The theStacc final URL must be in the sitemap before any page links to this article.

## Publication QA

- [x] H1, title, description, primary/secondary entities and extractable answer architecture present.
- [x] Educational clinical claims are bound to authority sources and wording avoids diagnosis or management advice.
- [x] No fabricated image, licence, provenance, consent, caption, product feature, outcome or first-party experience claim.
- [x] Internal routes are validated and exclude forbidden URLs and unpublished blog URLs.
- [x] **Asset hold:** published photo/image-quiz status is prohibited until cleared clinical images, captions, provenance/licence, clinical verification and accessible text alternatives are supplied and checked.
- [x] Final editor must reopen every source and reconfirm all links immediately before any upload.
