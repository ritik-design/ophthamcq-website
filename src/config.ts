/**
 * OphthaMCQ Marketing Site Configuration
 *
 * This .net site serves as the marketing/content/SEO frontend.
 * All checkout, login, signup, and product purchase flows redirect to .com
 */

export const SITE = {
  name: 'OphthaMCQ',
  tagline: 'The Only Ophthalmology Question Bank Built by Doctors Who Passed These Exams',
  description:
    '10,000+ MCQs, Handwritten Notes, Past Papers with Explanations. For FRCOphth, ICO, FAICO, DNB & NEET-SS.',
  url: 'https://www.ophthamcq.org',
  canonicalUrl: 'https://www.ophthamcq.com',
  logo: '/logo.svg',
  favicon: '/favicon.svg',
};

/** E-commerce platform on .com — all purchase/auth flows go here */
export const COM_BASE = 'https://www.ophthamcq.com';

/** Product image CDN host on ophthamcq.com */
const IMG = 'https://appx-content-v2.classx.co.in/paid_course3';

/** Real products from the current ophthamcq.com website
 *  Each `href` points to the live product page on .com so users
 *  land on the correct product to purchase. */
export const PRODUCTS = [
  {
    id: 'retina-deciphered',
    name: 'Retina Deciphered',
    fullName: 'Retina Deciphered: Exam Ready Handwritten Notes for Ophthalmology',
    price: '₹549',
    oldPrice: '₹899',
    discount: '39%',
    description: '150+ pages of handwritten exam-ready notes covering the entire retina syllabus.',
    href: `${COM_BASE}/new-courses/3-retina-deciphered-exam-ready-handwritten-notes-for-ophthalmology`,
    image: `${IMG}/2026-03-31-0_7186400839306661.png`,
    icon: 'notes',
    tag: 'Most Popular',
    category: 'notes',
  },
  {
    id: 'ico-fico-past-papers',
    name: 'ICO/FICO Past Papers',
    fullName: 'ICO/FICO Past Papers with Full Explanations',
    price: '₹1,799',
    oldPrice: '₹3,000',
    discount: '41%',
    description: 'Last 10 years of ICO/FICO past papers with full explanations and answer keys.',
    href: `${COM_BASE}/new-courses/23-ico-fico-past-papers`,
    image: `${IMG}/2026-05-09-0_32620812112778164.jpeg`,
    icon: 'pastPapers',
    tag: 'Best Value',
    category: 'past-papers',
  },
  {
    id: 'high-yield-mcqs',
    name: 'High Yield MCQs',
    fullName: 'Ophthalmology MCQs High Yield',
    price: '₹399',
    oldPrice: '₹899',
    discount: '56%',
    description: '1,000+ high-yield MCQs across all subspecialties with detailed explanations.',
    href: `${COM_BASE}/new-courses/25-ophthalmology-mcqs-high-yield`,
    image: `${IMG}/2026-05-13-0_09908727110662874.png`,
    icon: 'mcq',
    tag: 'Essential',
    category: 'mcqs',
  },
  {
    id: 'faico-mcqs',
    name: 'FAICO MCQs',
    fullName: 'FAICO MCQs — AIOS Fellowship Exam Preparation',
    price: '₹929',
    oldPrice: '₹1,500',
    discount: '39%',
    description: 'FAICO exam MCQs mapped topic-by-topic to the exact syllabus.',
    href: `${COM_BASE}/new-courses/14-faico-mcqs`,
    image: `${IMG}/2026-05-03-0_5335415685199617.png`,
    icon: 'questionBank',
    tag: 'Syllabus-Mapped',
    category: 'mcqs',
  },
  {
    id: 'eyelids-notes',
    name: 'Eyelids Exam Ready Notes',
    fullName: 'Eyelids Exam Ready Handwritten Notes for Ophthalmology Residents and Postgraduates',
    price: '₹249',
    oldPrice: '₹429',
    discount: '42%',
    description: 'Oculoplastics and eyelid disorders for your PG and fellowship exams.',
    href: `${COM_BASE}/new-courses/31-eyelids-exam-ready-handwritten-notes-for-ophthalmology-residents-and-postgraduates`,
    image: `${IMG}/2026-06-07-0_13404218672885404.png`,
    icon: 'notes',
    tag: null,
    category: 'notes',
  },
  {
    id: 'anatomy-notes',
    name: 'Anatomy of Eye Notes',
    fullName: 'Anatomy of Eye & Related Ocular Structures Exam Ready Handwritten Notes',
    price: '₹360',
    oldPrice: '₹500',
    discount: '29%',
    description: 'Complete ocular anatomy with clinical correlations and exam focus.',
    href: `${COM_BASE}/new-courses/4-anatomy-of-eye-and-related-ocular-structures-exam-ready-handwritten-notes`,
    image: `${IMG}/2026-03-31-0_31158871596668736.png`,
    icon: 'notes',
    tag: null,
    category: 'notes',
  },
  {
    id: 'glaucoma-notes',
    name: 'Glaucoma Exam Ready Notes',
    fullName: 'Glaucoma Exam Ready Handwritten Notes',
    price: '₹369',
    oldPrice: '₹699',
    discount: '48%',
    description: 'Complete glaucoma notes from pathophysiology to surgical management.',
    href: `${COM_BASE}/new-courses/15-glaucoma-exam-ready-handwritten-notes`,
    image: `${IMG}/2026-05-01-0_8256363297218628.png`,
    icon: 'notes',
    tag: null,
    category: 'notes',
  },
  {
    id: 'optics-notes',
    name: 'Optics & Refraction Notes',
    fullName: 'Optics and Refraction Exam Ready Notes',
    price: '₹999',
    oldPrice: null,
    discount: null,
    description: 'The most feared topic — made simple with diagrams and solved problems.',
    href: `${COM_BASE}/new-courses/7-optics-and-refraction-exam-ready-notes`,
    image: `${IMG}/2026-04-13-0_6616495688984549.png`,
    icon: 'notes',
    tag: 'Premium',
    category: 'notes',
  },
  {
    id: 'ico-basic-visual-sciences',
    name: 'ICO Basic Visual Sciences MCQs',
    fullName: 'ICO Basic Visual Sciences MCQs',
    price: '₹899',
    oldPrice: '₹999',
    discount: '11%',
    description: 'Basic sciences MCQs for ICO Part A preparation.',
    href: `${COM_BASE}/new-courses/26-ico-basic-visual-sciences-mcqs`,
    image: `${IMG}/2026-05-20-0_5853654958965788.png`,
    icon: 'mcq',
    tag: null,
    category: 'mcqs',
  },
  {
    id: 'pdcet-mcqs',
    name: 'PDCET MCQs',
    fullName: 'PDCET Ophthalmology MCQs',
    price: '₹899',
    oldPrice: null,
    discount: null,
    description: 'High-yield MCQ bank built specifically for the PDCET Ophthalmology exam.',
    href: `${COM_BASE}/new-courses/20-pdcet-mcqs`,
    image: `${IMG}/2026-05-07-0_9386367572222503.jpeg`,
    icon: 'mcq',
    tag: 'New',
    category: 'mcqs',
  },
] as const;

/** Auth & checkout redirects */
export const CHECKOUT = {
  purchases: `${COM_BASE}/purchases?type=10`,
  settings:  `${COM_BASE}/settings`,
  login:     `${COM_BASE}/login`,
  signup:    `${COM_BASE}/signup`,
} as const;

/** App store links */
export const APP_LINKS = {
  googlePlay: 'https://play.google.com/store/apps/details?id=com.bktxsx.ucjcrq',
  appStore:   'https://apps.apple.com/in/app/ophtha-mcq-faico-ico-pdcet-frc/id6759045904',
} as const;

/** Exams we cover — icon references custom Icon component names */
export const EXAMS = [
  { name: 'ICO / FICO',     full: 'ICO / FICO Exams',                  slug: 'ico-fico',    iconName: 'globe',       description: 'International Council of Ophthalmology' },
  { name: 'FAICO',          full: 'FAICO Exam',                        slug: 'faico',       iconName: 'badgeCheck',  description: 'Fellowship of All India Ophthalmological Society' },
  { name: 'DNB / MS / DO',  full: 'DNB / MS / DO Ophthalmology',       slug: 'dnb',         iconName: 'building',    description: 'Diplomate of National Board' },
  { name: 'PDCET',          full: 'PD-CET Ophthalmology',              slug: 'pd-cet',      iconName: 'target',      description: 'Post Diploma Centralized Entrance Test' },
  { name: 'FRCOphth',       full: 'FRCOphth Exam',                     slug: 'frcophth',    iconName: 'graduationCap', description: 'Royal College of Ophthalmologists', comingSoon: true },
  { name: 'Fellowship',     full: 'Ophthalmology Subspecialty Fellowship', slug: 'fellowship', iconName: 'sparkles', description: 'Ophthalmology Subspecialty Fellowship' },
];

/** Nav links */
export const NAV = [
  { label: 'Exams',      href: '/exams',       external: false },
  { label: 'Free MCQs',  href: '/free-mcqs',   external: false },
  { label: 'Notes',      href: '/notes',       external: false },
  { label: 'Topics',     href: '/topics',      external: false },
  { label: 'Resources',  href: '/resources',   external: false },
  { label: 'Blog',       href: '/blog',        external: false },
  { label: 'Glossary',   href: '/glossary',    external: false },
  { label: 'FAQ',        href: '/faq',         external: false },
];

/** Testimonials */
export const TESTIMONIALS = [
  { name: 'Dr. Sangam Rout', role: 'DNB Ophthalmology, AIIMS', text: 'The quality of explanations is super so so good. Cleared my DNB theory in first attempt.', exam: 'DNB' },
  { name: 'Dr. Garvesh Surya', role: 'MS Ophthalmology', text: 'The exam ready notes have my heart — extremely helpful for my DNB finals.', exam: 'MS' },
  { name: 'Dr. Umer Shaikh', role: 'FRCOphth, Moorfields Eye Hospital UK', text: 'The best distillation of Ryan, Kanski and Elkington you will ever find. Passed FRCOphth Part 1 with 72%.', exam: 'FRCOphth' },
  { name: 'Dr. Ahmed Khan', role: 'ICO Basic Sciences', text: 'ICO past papers with full explanations were my single biggest advantage. Scored 85%.', exam: 'ICO/FICO' },
  { name: 'Dr. Ritu Sharma', role: 'FAICO, Aravind Eye Hospital', text: 'Topic-wise MCQs mapped exactly to the FAICO syllabus. Could not have passed without them.', exam: 'FAICO' },
];

/** FAQ items */
export const FAQS = [
  { q: 'What is OphthaMCQ?', a: "OphthaMCQ is the world's only ophthalmology PG exam notes and MCQ question bank — built by gold medalists and exam toppers who personally passed ICO, FAICO, DNB and FRCOphth. Trusted by 15,000+ ophthalmologists, PGs and residents across India and 23 countries." },
  { q: 'Which exams does OphthaMCQ cover?', a: 'OphthaMCQ covers ICO/FICO, FAICO, DNB/MS/DO and PDCET. FRCOphth resources coming soon.' },
  { q: 'Are the notes really handwritten?', a: 'Yes. Every page is handwritten by ophthalmologists who topped their MS, DNB and fellowship exams — distilled from Ryan, Kanski, Elkington, BCSC and Khurana into concise exam-ready bullet points.' },
  { q: 'Can I try before I buy?', a: 'Yes. Access free sample questions and notes on OphthaMCQ before purchasing anything. No credit card required.' },
  { q: 'Are ICO/FICO past papers available anywhere else?', a: 'No. OphthaMCQ is the world\u2019s first and only platform with complete ICO/FICO past papers and full explanations. Not available anywhere else on the planet.' },
  { q: 'How do I access my purchases?', a: 'After purchase you get instant PDF access plus lifetime access via the OphthaMCQ app on Android and iOS. Syncs across all devices.' },
  { q: 'How do I buy products?', a: 'Click any Buy Now button to go to our secure store on ophthamcq.com. Complete your purchase there and access your content instantly.' },
  { q: 'Is OphthaMCQ available outside India?', a: 'Yes. OphthaMCQ is used by ophthalmology PGs and residents in 23 countries worldwide. ICO/FICO resources are especially popular internationally.' },
  { q: 'Do you offer institutional pricing?', a: 'Yes. Residency programs and eye hospitals can get bulk licenses for their residents. Contact us for a custom quote.' },
  { q: 'How often is content updated?', a: 'Question banks and notes are updated regularly based on the latest exam patterns, textbook editions and syllabus changes.' },
];
