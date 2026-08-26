/**
 * One-shot rewrite of the page titles and meta descriptions that overflow the
 * SERP. Titles target <= 51 chars (Layout appends " | OphthaMCQ"); descriptions
 * target 140-158.
 *
 * Written as explicit find/replace pairs so every change is reviewable in the
 * diff rather than being a regex guess against prose.
 */
import { readFileSync, writeFileSync } from 'node:fs';

/** [file, find, replace] — `find` must match exactly once. */
const EDITS = [
  // ---------- static pages: titles ----------
  ['src/pages/index.astro',
    `title="The World's Only Ophthalmology PG Exam Notes & MCQ Question Bank"`,
    `title="Ophthalmology PG Exam Notes & MCQ Question Bank"`],
  ['src/pages/index.astro',
    `description="20,000+ exam-pattern MCQs and handwritten exam ready notes for ICO/FICO, FAICO, FRCOphth, DNB and PDCET. Trusted by 15,000+ PGs and residents across India and 23 countries."`,
    `description="20,000+ exam-pattern MCQs and handwritten exam-ready notes for ICO/FICO, FAICO, FRCOphth, DNB and PDCET. Trusted by 15,000+ PGs in 23 countries."`],

  ['src/pages/about.astro',
    `title="About OphthaMCQ — Ophthalmology Exam Prep Built by Doctors Who Passed"`,
    `title="About OphthaMCQ: Built by Doctors Who Passed"`],

  ['src/pages/blog.astro',
    `title="Blog — Exam Strategy, MCQs, Study Tips & Career Guides"`,
    `title="Ophthalmology Exam Blog: Strategy, MCQs, Careers"`],

  ['src/pages/exams/index.astro',
    `title="Ophthalmology Exams India & UK: FRCOphth, ICO, FAICO, DNB, NEET-SS"`,
    `title="Ophthalmology Exams Compared: India & UK"`],

  ['src/pages/faq.astro',
    `title="Ophthalmology Question Bank FAQ — FRCOphth, ICO/FICO, FAICO, DNB, NEET-SS"`,
    `title="Ophthalmology Exam & Question Bank FAQ"`],
  ['src/pages/faq.astro',
    `description="Detailed answers about OphthaMCQ: how to prepare for FRCOphth, ICO/FICO exam pattern, FAICO and DNB question banks, pricing, refunds, device access and institutional plans."`,
    `description="Answers on FRCOphth, ICO/FICO, FAICO and DNB preparation with OphthaMCQ — exam coverage, content quality, pricing, refunds and device access."`],

  ['src/pages/glossary.astro',
    'title={`Ophthalmology Glossary — ${totalCount}+ Essential Terms & Definitions`}',
    'title={`Ophthalmology Glossary: ${totalCount}+ Terms Defined`}'],

  ['src/pages/institutions.astro',
    `title="Institutional Licensing — Bulk Ophthalmology MCQs for Residency Programmes"`,
    `title="Institutional Licensing for Residency Programmes"`],
  ['src/pages/institutions.astro',
    `description="Bulk ophthalmology MCQ licences, admin dashboards and analytics for residency programmes. Custom question banks for FRCOphth, ICO, FAICO and DNB training programs at hospitals worldwide."`,
    `description="Bulk ophthalmology MCQ licences, admin dashboards and analytics for residency programmes, with custom question banks for FRCOphth, ICO, FAICO and DNB."`],

  ['src/pages/notes.astro',
    `title="Handwritten Ophthalmology Notes — Exam Ready for FRCOphth, DNB, ICO, FAICO"`,
    `title="Handwritten Ophthalmology Notes for PG Exams"`],
  ['src/pages/notes.astro',
    `description="Handwritten ophthalmology notes distilled from Kanski, Ryan, Elkington and BCSC. Exam-ready PG study material for FRCOphth, ICO/FICO, FAICO, DNB and NEET-SS residents."`,
    `description="Handwritten ophthalmology notes distilled from Kanski, Ryan, Elkington and BCSC — exam-ready PG material for FRCOphth, ICO/FICO, FAICO and DNB."`],

  ['src/pages/osce.astro',
    `title="OSCE, Practical & Viva Voce Ready Bundle — DNB / MS / DO Ophthalmology"`,
    `title="Ophthalmology OSCE, Practical & Viva Bundle"`],
  ['src/pages/osce.astro',
    `description="Complete DNB/MS/DO practical exam bundle — OSCE stations, instruments, case presentation, investigations and viva voce preparation by ophthalmologists who passed."`,
    `description="A complete DNB, MS and DO practical bundle: OSCE stations, instruments, case presentation, investigations and viva voce preparation."`],

  ['src/pages/pricing.astro',
    `title="Pricing — Affordable Ophthalmology MCQs, Notes & FAICO/DNB Question Bank"`,
    `title="Pricing: Ophthalmology MCQs, Notes & Question Banks"`],

  ['src/pages/resources.astro',
    `title="Free Ophthalmology Resources Hub — Study Guides, MCQs, Glossary, Plans"`,
    `title="Free Ophthalmology Study Resources & Guides"`],
  ['src/pages/resources.astro',
    `description="The OphthaMCQ free ophthalmology resources hub: 200 free MCQs, 316-term glossary, handwritten notes, exam guides and 4/8/12-week study plans for FRCOphth, ICO, DNB and FAICO."`,
    `description="Free ophthalmology study resources: 200 MCQs, a 316-term glossary, exam guides and 4, 8 and 12-week study plans for FRCOphth, ICO, DNB and FAICO."`],

  ['src/pages/success-stories.astro',
    `title="Ophthalmology Exam Success Stories — Passed FRCOphth, ICO, FAICO, DNB"`,
    `title="Ophthalmology Exam Success Stories & Reviews"`],
  ['src/pages/success-stories.astro',
    `description="Real testimonials and reviews from ophthalmology residents who cleared FRCOphth, ICO/FICO, FAICO, DNB and NEET-SS using OphthaMCQ. Read how they passed on first attempt."`,
    `description="Testimonials from ophthalmology residents who cleared FRCOphth, ICO/FICO, FAICO and DNB with OphthaMCQ, and what topped their study stack."`],

  ['src/pages/topics.astro',
    `title="Ophthalmology Topics — Retina, Cornea, Glaucoma Study Guides & MCQs"`,
    `title="Ophthalmology Topics: Study Guides & MCQs"`],

  // ---------- exam hubs ----------
  ['src/pages/exams/[slug].astro',
    `seoTitle: 'FRCOphth Part 1 & 2 Preparation — Question Bank, Notes, Past Papers'`,
    `seoTitle: 'FRCOphth Part 1 & 2 Preparation Resources'`],
  ['src/pages/exams/[slug].astro',
    `seoTitle: 'ICO / FICO Preparation — Past Papers, BVS MCQs, Clinical Banks'`,
    `seoTitle: 'ICO/FICO Preparation: Past Papers & MCQs'`],
  ['src/pages/exams/[slug].astro',
    `seoTitle: 'FAICO Exam Preparation — AIOS Fellowship MCQs, Notes & Tips'`,
    `seoTitle: 'FAICO Exam Preparation: MCQs and Notes'`],
  ['src/pages/exams/[slug].astro',
    `seoTitle: 'PD-CET Ophthalmology Preparation — MCQ Bank, Notes & Past Patterns'`,
    `seoTitle: 'PD-CET Ophthalmology Preparation & MCQ Bank'`],
  ['src/pages/exams/[slug].astro',
    `seoTitle: 'DNB Ophthalmology Preparation — Theory MCQs, Notes & Practical Tips'`,
    `seoTitle: 'DNB Ophthalmology Preparation: MCQs & Notes'`],
  ['src/pages/exams/[slug].astro',
    `seoTitle: 'NEET-SS Ophthalmology Preparation — MCQs, Image Banks & Strategy'`,
    `seoTitle: 'NEET-SS Ophthalmology Preparation & MCQs'`],
  ['src/pages/exams/[slug].astro',
    `seoTitle: 'OKAPs Preparation — BCSC-Aligned MCQs & Topic-wise Notes'`,
    `seoTitle: 'OKAPs Preparation: BCSC-Aligned MCQs'`],
  ['src/pages/exams/[slug].astro',
    `seoTitle: 'Ophthalmology Subspecialty Fellowship Preparation — Notes, MCQs & Viva'`,
    `seoTitle: 'Ophthalmology Fellowship Exam Preparation'`],

  // ---------- topic hubs ----------
  ['src/pages/topics/[slug].astro',
    `seoTitle: 'Glaucoma MCQs & Study Guide — Diagnosis, Management, High-Yield Facts'`,
    `seoTitle: 'Glaucoma MCQs & Study Guide for PG Exams'`],
  ['src/pages/topics/[slug].astro',
    `seoTitle: 'Retina MCQs & Study Guide — DR, AMD, RD, OCT for FRCOphth, NEET-SS'`,
    `seoTitle: 'Retina MCQs & Study Guide: DR, AMD, RD, OCT'`],
  ['src/pages/topics/[slug].astro',
    `seoTitle: 'Cornea MCQs & Study Guide — Dystrophies, Keratitis, Keratoplasty'`,
    `seoTitle: 'Cornea MCQs: Dystrophies, Keratitis, Grafts'`],
  ['src/pages/topics/[slug].astro',
    `seoTitle: 'Cataract MCQs & Study Guide — Phaco, IOLs, Complications'`,
    `seoTitle: 'Cataract MCQs: Phaco, IOLs and Complications'`],
  ['src/pages/topics/[slug].astro',
    `seoTitle: 'Neuro-Ophthalmology MCQs & Guide — Optic Nerve, Pupils, Fields'`,
    `seoTitle: 'Neuro-Ophthalmology MCQs & Study Guide'`],
  ['src/pages/topics/[slug].astro',
    `seoTitle: 'Pediatric Ophthalmology MCQs — Strabismus, Amblyopia, ROP'`,
    `seoTitle: 'Paediatric Ophthalmology & Strabismus MCQs'`],
  ['src/pages/topics/[slug].astro',
    `seoTitle: 'Uveitis MCQs & Study Guide — Classification, Workup, Treatment'`,
    `seoTitle: 'Uveitis MCQs: Classification and Workup'`],
  ['src/pages/topics/[slug].astro',
    `seoTitle: 'Oculoplastics MCQs & Study Guide — Lids, Lacrimal, Orbit'`,
    `seoTitle: 'Oculoplastics MCQs: Lids, Lacrimal, Orbit'`],
];

let applied = 0;
const byFile = new Map();
for (const [file, find, replace] of EDITS) {
  if (!byFile.has(file)) byFile.set(file, readFileSync(file, 'utf8'));
  const source = byFile.get(file);
  const hits = source.split(find).length - 1;

  if (hits === 0) {
    console.warn(`  MISS  ${file}\n        ${find.slice(0, 78)}`);
    continue;
  }
  if (hits > 1) {
    console.warn(`  AMBIG ${file} (${hits} matches)\n        ${find.slice(0, 78)}`);
    continue;
  }

  byFile.set(file, source.replace(find, replace));
  applied++;
}

for (const [file, source] of byFile) writeFileSync(file, source);
console.log(`applied ${applied}/${EDITS.length} edits across ${byFile.size} files`);
