/**
 * Adds a `seo_title` frontmatter field to blog drafts whose `title` overflows
 * the SERP once " | OphthaMCQ" is appended.
 *
 * The H1 keeps the full descriptive `title`; only the <title> element uses
 * `seo_title`. Run with --dry-run to print the plan without writing.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'docs/content-drafts/first-100';
const EXCLUDED = /^(17|18|19|077|078)-/;
const BRAND_SUFFIX = ' | OphthaMCQ'.length; // 12 + the 2 spaces already counted
const MAX = 65;

/**
 * Titles the colon rule cannot shorten well, or shortens into something too
 * terse to earn a click. Keyed by draft filename prefix.
 */
const HAND_WRITTEN = {
  '005-': 'FRCOphth Eligibility for International Doctors',
  '026-': 'Glaucoma MCQs: 30 High-Yield Practice Questions',
  '034-': 'Keratoplasty Types Compared: PK, DALK, DSAEK, DMEK',
  '037-': 'Uveitis Classification (SUN) and Workup',
  '044-': 'Ophthalmology Optics & Refraction Formula Sheet',
  '047-': 'Ophthalmology Case Presentation Format',
  '060-': '20 Ophthalmology Viva Questions and Answers',
  '064-': 'Free Ophthalmology Study Resources Worth Your Time',
  '066-': '6-Month FRCOphth Study Plan for Working Doctors',
  '067-': '30-Day FAICO Revision Plan From Past Questions',
  '075-': 'How to Make Your Own Ophthalmology Notes',
  '088-': 'FICO Exam Benefits: Does It Help You Go Abroad?',
  '091-': 'Ophthalmologist Salary in India 2026',
  '093-': '50 Ophthalmology Thesis Topics for PG Residents',
  '094-': 'How to Publish an Ophthalmology Case Report',
  '096-': 'New Ophthalmology Drugs & Devices 2026',
  '099-': 'Last 7 Days Before an Ophthalmology Exam',
  '11-': 'ICO Exam Registration, Dates & Fees in India',
  // Colon-rule output was accurate but too terse to sell the click.
  '003-': 'FRCOphth Part 2 Written: Format and Preparation',
  '004-': 'FRCOphth Part 2 OSCE: Stations and Marking',
  '006-': 'FRCOphth vs ICO: Which Exam Should You Take?',
  '059-': 'Ophthalmic Sutures and Needles: Viva Reference',
  '061-': 'Best Ophthalmology Books for PG Residents 2026',
  '063-': "Ryan's Retina vs BCSC: Which Retina Book to Use",
  '068-': 'How to Use an MCQ Bank for Ophthalmology Exams',
  '069-': 'Handwritten vs Typed Notes: What Evidence Says',
  '070-': 'Best Ophthalmology Apps for Residents 2026',
  '085-': 'Recent Advances in Ophthalmology 2026 + MCQs',
  '089-': 'Ophthalmology Jobs in the UK for Indian Doctors',
  '090-': 'Ophthalmology Residency Abroad: UK, Gulf, Australia',
  '092-': 'AIOS Membership: Costs, Benefits & FAICO Rules',
  '097-': 'How to Study During Ophthalmology Residency',
  '12-': 'ICO/FICO Past Papers: How to Use Them Properly',
  '13-': 'FAICO Exam Guide: Eligibility, Pattern, Timeline',
  '14-': 'How to Apply for FAICO: Documents & Deadlines',
  '15-': 'FAICO Glaucoma: Syllabus Map & High-Yield Areas',
  '20-': 'DO Ophthalmology Exam: Syllabus and Next Steps',
  // Colon rule collapsed these to a bare series label ("Long Case", "Ptosis"),
  // which would also have produced duplicate <title>s across five pages.
  '008-': 'ICO Optics & Refraction Paper: Syllabus and Prep',
  '009-': 'ICO Clinical Sciences Exam: Structure and Prep',
  '010-': 'FICO Exam (Advanced ICO): What Changes After BVS',
  '021-': 'PD-CET Ophthalmology: Pattern, Syllabus, Cut-offs',
  '023-': 'NEET-SS Ophthalmology: Pattern and Preparation',
  '025-': 'EBO/FEBO Ophthalmology Exam: Format and Value',
  '028-': 'AMD and Anti-VEGF MCQs: Trials and Dosing',
  '029-': 'Retinal Detachment MCQs: Classification & Surgery',
  '031-': 'FFA and ICGA Interpretation for Ophthalmology Exams',
  '033-': 'Infective Keratitis MCQs and Workup Algorithm',
  '040-': 'Strabismus MCQs: PBCT, Hess Chart and Surgery',
  '041-': 'ROP and Amblyopia Screening Guidelines for Exams',
  '042-': 'Ptosis Classification, Measurements and Surgery',
  '046-': 'Ophthalmology OSCE Stations: The Complete List',
  '048-': 'Cataract Long Case: Presentation and Viva Points',
  '049-': 'Glaucoma Long Case: History, Exam and Discussion',
  '050-': 'Retinal Detachment Case Presentation for Exams',
  '051-': 'Proptosis Examination in 5 Minutes (Short Case)',
  '052-': 'Squint Examination Steps: Cover Test to Diagnosis',
  '053-': 'Slit Lamp Viva Questions Examiners Actually Ask',
  '055-': 'Gonioscopy Viva Questions, Lenses and Grading',
  '056-': 'Visual Field Interpretation for the Perimetry Viva',
  '057-': 'Ophthalmology Instruments Viva: Complete List',
  '058-': 'Ophthalmology Drugs Viva: Doses and Cautions',
};

const files = readdirSync(DIR)
  .filter((f) => f.endsWith('.md') && !EXCLUDED.test(f))
  .sort();

const dryRun = process.argv.includes('--dry-run');
let written = 0;
let skipped = 0;

for (const file of files) {
  const path = join(DIR, file);
  const source = readFileSync(path, 'utf8');

  if (/^seo_title:/m.test(source)) {
    skipped++;
    continue;
  }

  const titleMatch = source.match(/^title:\s*"([^"]+)"\s*$/m);
  if (!titleMatch) {
    console.warn(`  ?? no parsable title: ${file}`);
    continue;
  }

  const title = titleMatch[1];
  const prefix = Object.keys(HAND_WRITTEN).find((p) => file.startsWith(p));

  let seoTitle = null;
  if (prefix) {
    seoTitle = HAND_WRITTEN[prefix];
  } else if (title.length + BRAND_SUFFIX > MAX && title.includes(':')) {
    const head = title.split(':')[0].trim();
    if (head.length + BRAND_SUFFIX <= MAX) seoTitle = head;
  }

  if (!seoTitle) {
    if (title.length + BRAND_SUFFIX > MAX) console.warn(`  !! still long: ${file} (${title})`);
    skipped++;
    continue;
  }

  const total = seoTitle.length + BRAND_SUFFIX;
  console.log(`  ${String(total).padStart(2)}  ${file.slice(0, 4)} ${seoTitle}`);

  if (!dryRun) {
    // Insert directly after the title line so frontmatter stays readable.
    const updated = source.replace(
      /^(title:\s*"[^"]+"\s*)$/m,
      `$1\nseo_title: ${JSON.stringify(seoTitle)}`
    );
    writeFileSync(path, updated);
  }
  written++;
}

console.log(`\n${dryRun ? 'would write' : 'wrote'} ${written} · skipped ${skipped} · total ${files.length}`);
