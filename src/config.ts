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
  url: 'https://www.ophthamcq.net',
  logo: '/logo.svg',
  favicon: '/favicon.svg',
};

/** E-commerce platform on .com — all purchase/auth flows go here */
export const COM_BASE = 'https://www.ophthamcq.com';

/** Real products from the current ophthamcq.com website */
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
    href: `${COM_BASE}/new-courses?examId=8`,
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
    href: `${COM_BASE}/new-courses?examId=2`,
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
    href: `${COM_BASE}/new-courses/4-eyelids-exam-ready-handwritten-notes-for-ophthalmology-residents-and-postgraduates`,
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
    href: `${COM_BASE}/new-courses/5-anatomy-of-eye-and-related-ocular-structures-exam-ready-handwritten-notes`,
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
    href: `${COM_BASE}/new-courses/7-glaucoma-exam-ready-handwritten-notes-for-ophthalmology`,
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
    href: `${COM_BASE}/new-courses/8-optics-and-refraction-exam-ready-notes`,
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
    icon: 'mcq',
    tag: null,
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
  { name: 'FRCOphth',    full: 'FRCOphth Part 1 & 2',   slug: 'frcophth',     iconName: 'eye',       description: 'Royal College of Ophthalmologists' },
  { name: 'ICO / FICO',  full: 'ICO / FICO Exams',      slug: 'ico-fico',     iconName: 'globe',     description: 'International Council of Ophthalmology' },
  { name: 'FAICO',       full: 'FAICO Exam',            slug: 'faico',        iconName: 'badgeCheck', description: 'Fellowship of All India Ophthalmological Society' },
  { name: 'PD-CET',      full: 'PD-CET Ophthalmology',  slug: 'pd-cet',       iconName: 'target',    description: 'Post Diploma Centralized Entrance Test' },
  { name: 'DNB',         full: 'DNB Ophthalmology',     slug: 'dnb',          iconName: 'building',  description: 'Diplomate of National Board' },
  { name: 'NEET-SS',     full: 'NEET-SS Ophthalmology', slug: 'neet-ss',      iconName: 'graduationCap', description: 'Super Specialty Entrance Exam' },
  { name: 'OKAPs',       full: 'OKAPs',                 slug: 'okaps',        iconName: 'bookOpen',  description: 'Ophthalmology Knowledge Assessment Program' },
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
  { name: 'Dr. Garvesh Surya', role: 'MS Ophthalmology', text: 'The exam ready notes have my heart — extremely helpful for my DNB finals.', exam: 'DNB' },
  { name: 'Dr. Umer Shaikh', role: 'FRCOphth, Moorfields', text: 'The best distillation of Ryan, Kanski, and Elkington you will ever find. Passed FRCOphth Part 1 with 72%.', exam: 'FRCOphth' },
  { name: 'Dr. Priya Menon', role: 'NEET-SS Retina Rank 12', text: 'Retina Deciphered notes saved me 200 hours of reading. Landed my dream fellowship.', exam: 'NEET-SS' },
  { name: 'Dr. Ahmed Khan', role: 'ICO Basic Sciences', text: 'ICO past papers with full explanations were my single biggest advantage. Scored 85%.', exam: 'ICO' },
  { name: 'Dr. Ritu Sharma', role: 'FAICO, Aravind Eye Hospital', text: 'Topic-wise MCQs mapped exactly to the FAICO syllabus. Could not have passed without them.', exam: 'FAICO' },
];

/** FAQ items */
export const FAQS = [
  { q: 'Which exams does OphthaMCQ cover?', a: 'We cover FRCOphth (Part 1 & 2), ICO/FICO (all steps), FAICO, PD-CET, DNB Ophthalmology, NEET-SS, and OKAPs. Each exam has a dedicated question bank and handwritten notes.' },
  { q: 'Can I try before I buy?', a: 'Absolutely! Start with 50 free MCQs across all subspecialties — no signup required. Get instant scoring and detailed explanations.' },
  { q: 'Are the notes really handwritten?', a: 'Yes — every page is handwritten by ophthalmologists who have passed these exams. They are distilled from standard textbooks (Ryan, Kanski, Elkington, Ferris, Khurana) into exam-ready bullet points.' },
  { q: 'How do I access my purchases?', a: 'After purchase, you get instant PDF download + lifetime access via our iOS and Android apps. Your content syncs across all devices.' },
  { q: 'What is your refund policy?', a: 'We offer a 7-day money-back guarantee, no questions asked. If you are not satisfied, we will refund every rupee.' },
  { q: 'How do I buy products?', a: 'Click any "View on Store" button to go to our secure store on ophthamcq.com. Complete your purchase there and access your content instantly.' },
  { q: 'Do you offer institutional pricing?', a: 'Yes! Residency programs can get bulk licenses. Contact us for a custom quote and admin dashboard demo.' },
  { q: 'How often is content updated?', a: 'We update our question banks every 6 months based on the latest exam patterns and textbook editions.' },
];
