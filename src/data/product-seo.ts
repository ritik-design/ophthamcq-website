/**
 * SERP-facing title and description for each product page.
 *
 * The `headline` and `tagline` in product-descriptions.ts are sales copy: the
 * headlines ran to 102 characters (Google truncates near 65) and the taglines
 * to 36 (Google wants ~150). These are written for the result snippet instead;
 * the on-page H1 and hero copy are untouched.
 */
export interface ProductSeo {
  /** Max 51 chars — " | OphthaMCQ" is appended by Layout.astro. */
  title: string;
  /** 140-155 chars, leading with the term the page targets. */
  description: string;
}

export const PRODUCT_SEO: Record<string, ProductSeo> = {
  'eyelids-notes': {
    title: 'Eyelids Handwritten Notes for PG Exams',
    description:
      'Handwritten eyelid and oculoplastics notes for DNB, MS, ICO/FICO and FRCOphth. Ptosis, entropion, tumours and lid reconstruction, condensed for revision.',
  },
  'retina-deciphered': {
    title: 'Retina Deciphered: Handwritten Notes PDF',
    description:
      '150+ pages of handwritten retina notes covering DR, AMD, RD, OCT and anti-VEGF for DNB, MS, ICO/FICO and FRCOphth. Written by doctors who passed these exams.',
  },
  'anatomy-notes': {
    title: 'Ocular Anatomy Handwritten Notes for PG Exams',
    description:
      'Complete ocular anatomy notes with clinical correlations for DNB, MS, ICO/FICO and FRCOphth. Orbit, adnexa, globe and visual pathway in exam-ready form.',
  },
  'glaucoma-notes': {
    title: 'Glaucoma Handwritten Notes for PG Exams',
    description:
      'Handwritten glaucoma notes from angle anatomy and aqueous dynamics through to trabeculectomy and MIGS, mapped to DNB, MS, ICO/FICO and FRCOphth syllabi.',
  },
  'optics-notes': {
    title: 'Optics & Refraction Notes for Ophthalmology PG',
    description:
      'Optics and refraction made solvable: diagrams, derivations and worked problems for DNB, MS, ICO/FICO and FRCOphth. The most feared paper, made revisable.',
  },
  'instruments-in-ophthalmology-notes': {
    title: 'Instruments in Ophthalmology Notes for Viva',
    description:
      'Ophthalmic instruments for DNB and MS practicals: identification, parts, uses and the follow-up questions examiners ask at the instrument table.',
  },
  'ophthalmology-drugs-practical-pdf': {
    title: 'Ophthalmology Drugs PDF for Practical & Viva',
    description:
      'Ophthalmic drugs for the practical and viva table: bottle colours, doses, indications, contraindications and the pearls examiners expect you to quote.',
  },
  'case-presentation-format-notes': {
    title: 'Ophthalmology Case Presentation Format PDF',
    description:
      'Step-by-step case presentation formats for ophthalmology long cases, short cases and viva. History, examination and discussion, in the order examiners want.',
  },
  'read-ophthalmology-reports-tests': {
    title: 'How to Read OCT, Fields and FFA Reports',
    description:
      'Interpret OCT, visual fields, FFA, ICGA and B-scan the way an examiner expects. Pattern-by-pattern reading guide for ophthalmology PG practicals and viva.',
  },
  'recent-advances-ophthalmology-notes': {
    title: 'Recent Advances in Ophthalmology Notes PDF',
    description:
      'Recent advances in ophthalmology distilled for PG exams, viva and fellowship interviews. New drugs, devices and trials, without chasing every journal.',
  },
  'rings-dots-lines-spots-guide': {
    title: 'Rings, Dots, Lines & Spots in Ophthalmology',
    description:
      'The clinical guide to every named ring, dot, line and spot in ophthalmology. Name the sign, localise the disease and answer the spotter with confidence.',
  },
  'instruments-drugs-practical-viva': {
    title: 'Instruments & Drugs for Practical Exams and Viva',
    description:
      'Combined ophthalmic instruments and drugs pack for DNB and MS practicals. One reference for the instrument table and the drug viva, in exam-ready form.',
  },
  'high-yield-mcqs': {
    title: '1,000+ High-Yield Ophthalmology MCQs',
    description:
      '1,000+ high-yield ophthalmology MCQs across every subspecialty, each with a full explanation. Exam-pattern practice for DNB, MS, ICO/FICO and FAICO.',
  },
  'faico-mcqs': {
    title: 'FAICO MCQs: Syllabus-Mapped Question Bank',
    description:
      'FAICO MCQs mapped topic-by-topic to the AIOS fellowship syllabus, with detailed explanations. Subspecialty-focused practice for the FAICO written exam.',
  },
  'ico-fico-past-papers': {
    title: 'ICO/FICO Past Papers With Full Explanations',
    description:
      'The last 10 years of ICO/FICO past papers with complete answer keys and explanations — not blank question lists. Basic, Optics, Clinical and Advanced.',
  },
  'ico-basic-visual-sciences': {
    title: 'ICO Basic Visual Sciences MCQs (Part A)',
    description:
      'ICO Basic Visual Sciences MCQs for Part A, with explanations. Anatomy, physiology, optics, pharmacology and pathology in the ICO question pattern.',
  },
  'ico-optics-refraction-mcqs-part-a': {
    title: 'ICO Optics & Refraction MCQs Part A',
    description:
      'ICO/FICO Optics and Refraction Part A MCQs with worked solutions. Drill the calculations and lens problems that decide the optics paper until they are routine.',
  },
  'frcophth-step-1-mcqs': {
    title: 'FRCOphth Part 1 MCQ Bank With Explanations',
    description:
      'FRCOphth Part 1 / Step 1 MCQ bank in the UK single-best-answer pattern, with detailed explanations across basic sciences, optics and pathology.',
  },
  'pdcet-mcqs': {
    title: 'PDCET Ophthalmology MCQs: High-Yield Bank',
    description:
      'PDCET ophthalmology MCQ bank built for the Post Diploma Centralized Entrance Test. High-yield questions in the PDCET pattern, each with an explanation.',
  },
  'dnb-do-past-5-year-papers': {
    title: 'DNB/DO Past 5-Year Question Papers',
    description:
      'The last five years of DNB and DO ophthalmology question papers with model answers. Know the paper pattern and repeat topics before you walk in.',
  },
  'short-term-phaco': {
    title: 'Short-Term Phaco Fellowship Preparation',
    description:
      'Short-term phacoemulsification preparation for ophthalmology fellowship pathways: step-by-step surgical notes, complications and case discussions.',
  },
};

export function getProductSeo(id: string): ProductSeo | undefined {
  return PRODUCT_SEO[id];
}
