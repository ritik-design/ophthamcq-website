/**
 * Category-driven free MCQ funnel data.
 * Each category maps to full products in src/config.ts and carries its own
 * pool of sample questions (dummy data for now — real questions to be added later).
 */

export type CategoryId =
  | 'pdcet'
  | 'faico'
  | 'ico-fico'
  | 'frcophth'
  | 'fellowship'
  | 'exam-notes'
  | 'high-yield'
  | 'general';

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string;
  fullQuestionCount: string;
  quizSize: number;
  productIds: string[];
  benefits: string[];
  includedTopics: string[];
  includedResources: string[];
};

export type CategoryMCQ = {
  id: string;
  q: string;
  options: string[];
  correct: number;
  explanation: string;
};

export const CATEGORIES: Category[] = [
  {
    id: 'pdcet',
    name: 'PD-CET Ophthal',
    description: 'Post Diploma Centralized Entrance Test preparation with high-yield MCQs and notes.',
    iconName: 'target',
    fullQuestionCount: '1000+',
    quizSize: 8,
    productIds: [
      'pdcet-mcqs',
      'eyelids-notes',
      'glaucoma-notes',
    ],
    benefits: [
      '1000+ exam-focused MCQs',
      'Detailed explanations for every answer',
      'Handwritten exam-ready notes',
      'Mobile app access',
      'Lifetime updates',
    ],
    includedTopics: [
      'Eyelids',
      'Glaucoma',
      'Cornea',
      'Retina',
      'Neuro-Ophthalmology',
      'Optics & Refraction',
      'Ocular Pharmacology',
    ],
    includedResources: [
      'MCQs',
      'Explanations',
      'Handwritten Notes',
      'Past Papers',
      'Mock Tests',
    ],
  },
  {
    id: 'faico',
    name: 'FAICO MCQs',
    description: 'AIOS Fellowship exam MCQs mapped topic-by-topic to the FAICO syllabus.',
    iconName: 'badgeCheck',
    fullQuestionCount: '1500+',
    quizSize: 8,
    productIds: [
      'retina-deciphered',
      'glaucoma-notes',
      'faico-mcqs',
    ],
    benefits: [
      '1500+ FAICO-mapped MCQs',
      'Topic-wise detailed explanations',
      'Handwritten subspecialty notes',
      'Mobile app access',
      'Regular syllabus updates',
    ],
    includedTopics: [
      'Retina',
      'Glaucoma',
      'Cornea',
      'Cataract',
      'Neuro-Ophthalmology',
      'Uveitis',
      'Oculoplastics',
    ],
    includedResources: [
      'MCQs',
      'Explanations',
      'Handwritten Notes',
      'Syllabus Mapping',
      'Mock Tests',
    ],
  },
  {
    id: 'ico-fico',
    name: 'ICO/FICO Past Papers',
    description: 'Past papers with full explanations for ICO Basic Sciences and Clinical/FICO exams.',
    iconName: 'globe',
    fullQuestionCount: '2000+',
    quizSize: 10,
    productIds: [
      'ico-fico-past-papers',
      'ico-optics-refraction-mcqs-part-a',
      'ico-basic-visual-sciences',
    ],
    benefits: [
      'Last 10 years of past papers',
      'Full explanations and answer keys',
      'Basic and clinical science coverage',
      'Mobile app access',
      'Lifetime updates',
    ],
    includedTopics: [
      'Optics & Refraction',
      'Basic Visual Sciences',
      'Clinical Ophthalmology',
      'Anatomy',
      'Physiology',
      'Pathology',
      'Pharmacology',
    ],
    includedResources: [
      'Past Papers',
      'Explanations',
      'Answer Keys',
      'Mock Tests',
      'Topic-wise Notes',
    ],
  },
  {
    id: 'frcophth',
    name: 'FRCOPHTH MCQs',
    description: 'FRCOphth Part 1 / Step 1 MCQs built from Ryan, Kanski, and Elkington.',
    iconName: 'graduationCap',
    fullQuestionCount: '2000+',
    quizSize: 8,
    productIds: [
      'frcophth-step-1-mcqs',
    ],
    benefits: [
      '2000+ FRCOphth-style MCQs',
      'Detailed evidence-based explanations',
      'Exam-focused high-yield notes',
      'Mobile app access',
      'Lifetime updates',
    ],
    includedTopics: [
      'Basic Sciences',
      'Cornea',
      'Glaucoma',
      'Retina',
      'Neuro-Ophthalmology',
      'Oculoplastics',
      'Paediatrics & Strabismus',
    ],
    includedResources: [
      'MCQs',
      'Explanations',
      'Handwritten Notes',
      'Mock Tests',
      'Image-based Questions',
    ],
  },
  {
    id: 'fellowship',
    name: 'Fellowship Ophthalmology',
    description: 'Subspecialty fellowship resources including phaco and clinical case discussions.',
    iconName: 'sparkles',
    fullQuestionCount: '500+',
    quizSize: 8,
    productIds: [
      'short-term-phaco',
    ],
    benefits: [
      'Fellowship-ready case discussions',
      'Phacoemulsification pearls',
      'Viva and practical prep',
      'Mobile app access',
      'Lifetime updates',
    ],
    includedTopics: [
      'Phacoemulsification',
      'Cataract Surgery',
      'Complications Management',
      'IOL Selection',
      'Pre-op Evaluation',
      'Post-op Care',
    ],
    includedResources: [
      'Case Discussions',
      'Video Pearls',
      'Handwritten Notes',
      'Viva Questions',
      'Practical Guides',
    ],
  },
  {
    id: 'exam-notes',
    name: 'Ophthal Exam Notes',
    description: 'Handwritten exam-ready notes covering anatomy, retina, glaucoma, optics, instruments, and more.',
    iconName: 'notes',
    fullQuestionCount: '3000+',
    quizSize: 10,
    productIds: [
      'eyelids-notes',
      'retina-deciphered',
      'glaucoma-notes',
      'anatomy-notes',
      'optics-notes',
      'instruments-drugs-practical-viva',
      'dnb-do-past-5-year-papers',
      'instruments-in-ophthalmology-notes',
      'recent-advances-ophthalmology-notes',
      'case-presentation-format-notes',
      'ophthalmology-drugs-practical-pdf',
      'read-ophthalmology-reports-tests',
      'rings-dots-lines-spots-guide',
    ],
    benefits: [
      'Handwritten notes for every major topic',
      'Viva and practical exam focus',
      'Diagrams, flowcharts, and tables',
      'Mobile app access',
      'Lifetime updates',
    ],
    includedTopics: [
      'Eyelids',
      'Retina',
      'Glaucoma',
      'Anatomy',
      'Optics & Refraction',
      'Instruments',
      'Drugs',
      'Clinical Signs',
    ],
    includedResources: [
      'Handwritten Notes',
      'Diagrams',
      'Past Papers',
      'Case Formats',
      'Practical PDFs',
    ],
  },
  {
    id: 'high-yield',
    name: 'Ophthal MCQs High Yield',
    description: 'High-yield MCQ bank across all ophthalmology subspecialties for rapid revision.',
    iconName: 'chartBar',
    fullQuestionCount: '1000+',
    quizSize: 10,
    productIds: [
      'high-yield-mcqs',
      'eyelids-notes',
    ],
    benefits: [
      '1000+ high-yield MCQs',
      'Concise explanations',
      'Quick revision notes',
      'Mobile app access',
      'Lifetime updates',
    ],
    includedTopics: [
      'Cornea',
      'Glaucoma',
      'Retina',
      'Neuro-Ophthalmology',
      'Uveitis',
      'Optics & Refraction',
      'Oculoplastics',
    ],
    includedResources: [
      'MCQs',
      'Explanations',
      'Handwritten Notes',
      'Quick Review Cards',
      'Mock Tests',
    ],
  },
  {
    id: 'general',
    name: 'General Ophthalmology',
    description: 'A mixed sampler across all ophthalmology subspecialties to test your overall readiness.',
    iconName: 'eye',
    fullQuestionCount: '2000+',
    quizSize: 10,
    productIds: [
      'high-yield-mcqs',
      'retina-deciphered',
      'glaucoma-notes',
      'ico-fico-past-papers',
    ],
    benefits: [
      '2000+ mixed ophthalmology MCQs',
      'Cross-topic explanations',
      'Combined notes and past papers',
      'Mobile app access',
      'Lifetime updates',
    ],
    includedTopics: [
      'Anatomy',
      'Optics & Refraction',
      'Cornea',
      'Lens & Cataract',
      'Glaucoma',
      'Retina',
      'Neuro-Ophthalmology',
    ],
    includedResources: [
      'MCQs',
      'Explanations',
      'Handwritten Notes',
      'Past Papers',
      'Mock Tests',
    ],
  },
];

export const CATEGORY_MCQS: Record<CategoryId, CategoryMCQ[]> = {
  pdcet: [
    {
      id: 'pdcet-1',
      q: 'A patient presents with a painful red eye, deep anterior chamber, and a mid-dilated fixed pupil. The most likely diagnosis is:',
      options: ['Acute conjunctivitis', 'Acute anterior uveitis', 'Acute angle-closure glaucoma', 'Herpetic keratitis'],
      correct: 2,
      explanation: 'Acute angle-closure glaucoma presents with a painful red eye, corneal oedema, shallow anterior chamber, and a fixed mid-dilated pupil.',
    },
    {
      id: 'pdcet-2',
      q: 'Which is the most common cause of unilateral proptosis in adults?',
      options: ['Orbital cellulitis', 'Thyroid eye disease', 'Cavernous haemangioma', 'Orbital lymphoma'],
      correct: 1,
      explanation: 'Thyroid eye disease (Graves\' orbitopathy) is the most common cause of both unilateral and bilateral proptosis in adults.',
    },
    {
      id: 'pdcet-3',
      q: 'The drug of choice for acute anterior uveitis is:',
      options: ['Topical antibiotics', 'Topical corticosteroids and cycloplegics', 'Oral acetazolamide', 'Topical beta-blockers'],
      correct: 1,
      explanation: 'Acute anterior uveitis is treated with topical corticosteroids to control inflammation and cycloplegics to prevent synechiae and relieve pain.',
    },
    {
      id: 'pdcet-4',
      q: 'A dendritic corneal ulcer with terminal bulbs is characteristic of:',
      options: ['Acanthamoeba keratitis', 'Herpes simplex epithelial keratitis', 'Pseudomonas keratitis', 'Fungal keratitis'],
      correct: 1,
      explanation: 'A true dendritic ulcer with terminal bulbs is pathognomonic of herpes simplex epithelial keratitis.',
    },
    {
      id: 'pdcet-5',
      q: 'Which nerve is affected in diabetic pupil-sparing third nerve palsy?',
      options: ['Trochlear nerve', 'Abducens nerve', 'Oculomotor nerve', 'Facial nerve'],
      correct: 2,
      explanation: 'Diabetic pupil-sparing third nerve palsy affects the oculomotor nerve and spares the pupil because ischemia affects the nerve core.',
    },
    {
      id: 'pdcet-6',
      q: 'Cherry-red spot at the macula is classically seen in:',
      options: ['Central retinal vein occlusion', 'Central retinal artery occlusion', 'Diabetic macular oedema', 'Age-related macular degeneration'],
      correct: 1,
      explanation: 'Central retinal artery occlusion produces a pale retina with a cherry-red spot at the fovea due to preserved choroidal circulation.',
    },
    {
      id: 'pdcet-7',
      q: 'The most common cause of leukocoria in a child is:',
      options: ['Congenital cataract', 'Retinoblastoma', 'Persistent fetal vasculature', 'Coats disease'],
      correct: 1,
      explanation: 'Retinoblastoma is the most common intraocular malignancy in childhood and must be excluded in any child with leukocoria.',
    },
    {
      id: 'pdcet-8',
      q: 'A patient on long-term topical steroids develops a posterior subcapsular cataract. The best next step is:',
      options: ['Increase steroid frequency', 'Discontinue or taper steroids if possible', 'Start topical NSAIDs', 'Immediate cataract surgery'],
      correct: 1,
      explanation: 'Steroid-induced posterior subcapsular cataract improves by reducing or stopping steroid use whenever clinically feasible.',
    },
  ],

  faico: [
    {
      id: 'faico-1',
      q: 'Which layer of the cornea is most resistant to bending forces?',
      options: ['Epithelium', 'Bowman layer', 'Stroma', 'Descemet membrane'],
      correct: 2,
      explanation: 'The corneal stroma contributes ~90% of corneal thickness and provides most of the tensile strength.',
    },
    {
      id: 'faico-2',
      q: 'The earliest topographic sign of keratoconus is:',
      options: ['Central island', 'Inferior steepening with skewed radial axes', 'Pellucid pattern', 'Symmetric bowtie'],
      correct: 1,
      explanation: 'Inferior steepening with skewed radial axes (SRAX) is the earliest corneal topographic sign of keratoconus.',
    },
    {
      id: 'faico-3',
      q: 'In diabetic retinopathy, the earliest clinical sign is:',
      options: ['Hard exudates', 'Microaneurysms', 'Neovascularisation', 'Cotton-wool spots'],
      correct: 1,
      explanation: 'Microaneurysms are the earliest visible sign of diabetic retinopathy.',
    },
    {
      id: 'faico-4',
      q: 'Which visual field defect is classic for glaucoma?',
      options: ['Central scotoma', 'Bitemporal hemianopia', 'Arcuate scotoma respecting the horizontal meridian', 'Altitudinal defect'],
      correct: 2,
      explanation: 'Glaucomatous damage produces arcuate scotomas that respect the horizontal meridian.',
    },
    {
      id: 'faico-5',
      q: 'Which organism is most commonly associated with contact lens-related bacterial keratitis?',
      options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Pseudomonas aeruginosa', 'Moraxella'],
      correct: 2,
      explanation: 'Pseudomonas aeruginosa is the most common organism in contact lens-related bacterial keratitis.',
    },
    {
      id: 'faico-6',
      q: 'A relative afferent pupillary defect (RAPD) indicates pathology in the:',
      options: ['Iris sphincter', 'Ciliary body', 'Optic nerve or extensive retina', 'Cornea'],
      correct: 2,
      explanation: 'RAPD reflects asymmetric afferent input from the optic nerve or extensive retinal disease.',
    },
    {
      id: 'faico-7',
      q: 'Fuchs endothelial corneal dystrophy primarily affects:',
      options: ['Corneal epithelium', 'Corneal stroma', 'Corneal endothelium', 'Descemet membrane'],
      correct: 2,
      explanation: 'Fuchs endothelial dystrophy is characterized by endothelial cell loss and guttata formation.',
    },
    {
      id: 'faico-8',
      q: 'The first-line treatment for primary open-angle glaucoma is:',
      options: ['Topical beta-blocker', 'Topical prostaglandin analogue', 'Oral acetazolamide', 'Laser trabeculoplasty'],
      correct: 1,
      explanation: 'Prostaglandin analogues are first-line for POAG due to efficacy, once-daily dosing, and few systemic side effects.',
    },
  ],

  'ico-fico': [
    {
      id: 'ico-1',
      q: 'Total refractive power of the schematic eye is approximately:',
      options: ['+20 D', '+43 D', '+60 D', '+100 D'],
      correct: 2,
      explanation: 'The total power of the schematic eye is ~+60 D, with the cornea contributing ~+43 D and the lens ~+17–20 D.',
    },
    {
      id: 'ico-2',
      q: 'The far point of an emmetropic eye is at:',
      options: ['25 cm', '6 metres', 'Infinity', '1 metre'],
      correct: 2,
      explanation: 'In emmetropia parallel rays from infinity focus on the retina; the far point is infinity.',
    },
    {
      id: 'ico-3',
      q: 'Aqueous humour is produced primarily by:',
      options: ['Pigmented ciliary epithelium', 'Non-pigmented ciliary epithelium', 'Trabecular meshwork', 'Iris stroma'],
      correct: 1,
      explanation: 'Aqueous is produced by the non-pigmented ciliary epithelium of the pars plicata.',
    },
    {
      id: 'ico-4',
      q: 'Spherical equivalent of +2.00 / −1.00 × 90° is:',
      options: ['+1.00 D', '+1.50 D', '+2.50 D', '+2.00 D'],
      correct: 1,
      explanation: 'Spherical equivalent = sphere + cylinder/2 = +2.00 + (−0.50) = +1.50 D.',
    },
    {
      id: 'ico-5',
      q: 'Bruch\'s membrane lies between:',
      options: ['NFL and ganglion cell layer', 'RPE and choriocapillaris', 'Photoreceptors and RPE', 'Sclera and choroid'],
      correct: 1,
      explanation: 'Bruch\'s membrane separates the RPE from the choriocapillaris.',
    },
    {
      id: 'ico-6',
      q: 'The hyaloid artery normally regresses by:',
      options: ['Birth', 'Week 20 of gestation', '6 months postnatal', '1 year postnatal'],
      correct: 0,
      explanation: 'The hyaloid artery normally regresses by birth; persistence causes Mittendorf dot or persistent fetal vasculature.',
    },
    {
      id: 'ico-7',
      q: 'Which extraocular muscle is innervated by the trochlear nerve?',
      options: ['Superior rectus', 'Superior oblique', 'Inferior oblique', 'Lateral rectus'],
      correct: 1,
      explanation: 'The trochlear nerve (CN IV) innervates the superior oblique muscle.',
    },
    {
      id: 'ico-8',
      q: 'In presbyopia, the principal change is decreased:',
      options: ['Axial length', 'Lens elasticity', 'Ciliary muscle strength', 'Pupil diameter'],
      correct: 1,
      explanation: 'Presbyopia is primarily due to loss of lens elasticity.',
    },
    {
      id: 'ico-9',
      q: 'A +10 D lens has a focal length of:',
      options: ['1 cm', '10 cm', '100 cm', '20 cm'],
      correct: 1,
      explanation: 'Focal length = 1/power = 1/10 m = 10 cm.',
    },
    {
      id: 'ico-10',
      q: 'Müller cells are best described as:',
      options: ['Photoreceptors', 'Bipolar interneurons', 'Glial cells spanning retinal layers', 'Pigmented cells of the RPE'],
      correct: 2,
      explanation: 'Müller cells are the principal glial cells of the retina, spanning from the ILM to the external limiting membrane.',
    },
  ],

  frcophth: [
    {
      id: 'frc-1',
      q: 'A pituitary adenoma compressing the optic chiasm classically causes:',
      options: ['Bitemporal hemianopia', 'Homonymous hemianopia', 'Central scotoma', 'Altitudinal defect'],
      correct: 0,
      explanation: 'Chiasmal compression interrupts decussating nasal retinal fibres, producing bitemporal hemianopia.',
    },
    {
      id: 'frc-2',
      q: 'Horner syndrome consists of:',
      options: ['Ptosis, miosis, anhidrosis', 'Ptosis, mydriasis, exotropia', 'Proptosis, lid lag, lid retraction', 'Anisocoria with mydriasis'],
      correct: 0,
      explanation: 'Horner syndrome is characterised by ptosis, miosis, and anhidrosis due to sympathetic chain interruption.',
    },
    {
      id: 'frc-3',
      q: 'The earliest structural change detectable in glaucoma is best assessed by:',
      options: ['Gonioscopy', 'OCT of RNFL/GCC', 'Goldmann perimetry', 'Pachymetry'],
      correct: 1,
      explanation: 'OCT of the peripapillary RNFL and macular ganglion cell complex detects structural loss before visual field defects.',
    },
    {
      id: 'frc-4',
      q: 'Light-near dissociation with small irregular pupils is termed:',
      options: ['Adie tonic pupil', 'Argyll Robertson pupil', 'Horner syndrome', 'Pharmacologic mydriasis'],
      correct: 1,
      explanation: 'Argyll Robertson pupils accommodate but do not react to light; classically associated with neurosyphilis.',
    },
    {
      id: 'frc-5',
      q: 'The most common primary intraocular malignancy in adults is:',
      options: ['Choroidal naevus', 'Choroidal melanoma', 'Metastatic carcinoma', 'Retinoblastoma'],
      correct: 1,
      explanation: 'Choroidal melanoma is the most common primary intraocular malignancy in adults.',
    },
    {
      id: 'frc-6',
      q: 'Cogan microcystic epithelial dystrophy (EBMD) is characterised by:',
      options: ['Map-dot-fingerprint changes', 'Endothelial guttata', 'Stromal lattice lines', 'Subepithelial calcification'],
      correct: 0,
      explanation: 'EBMD shows map-dot-fingerprint epithelial basement membrane changes.',
    },
    {
      id: 'frc-7',
      q: 'The blood supply of the optic nerve head is primarily from:',
      options: ['Central retinal artery', 'Short posterior ciliary arteries', 'Long posterior ciliary arteries', 'Ophthalmic artery directly'],
      correct: 1,
      explanation: 'The optic nerve head is supplied by the short posterior ciliary arteries via the circle of Zinn-Haller.',
    },
    {
      id: 'frc-8',
      q: 'Internuclear ophthalmoplegia localises to a lesion of the:',
      options: ['CN VI nucleus', 'Medial longitudinal fasciculus', 'Frontal eye field', 'Cerebellum'],
      correct: 1,
      explanation: 'INO is caused by a lesion of the medial longitudinal fasciculus.',
    },
  ],

  fellowship: [
    {
      id: 'fel-1',
      q: 'The most common complication of phacoemulsification is:',
      options: ['Endophthalmitis', 'Posterior capsule rupture', 'Cystoid macular oedema', 'Iris prolapse'],
      correct: 1,
      explanation: 'Posterior capsule rupture is the most common serious intraoperative complication of phacoemulsification.',
    },
    {
      id: 'fel-2',
      q: 'Intraoperative floppy iris syndrome (IFIS) is most strongly associated with:',
      options: ['Tamsulosin', 'Finasteride', 'Pilocarpine', 'Timolol'],
      correct: 0,
      explanation: 'IFIS is strongly associated with tamsulosin and other α-1A antagonists.',
    },
    {
      id: 'fel-3',
      q: 'The lens-iris diaphragm is pushed forward in:',
      options: ['Phacomorphic glaucoma', 'Phacolytic glaucoma', 'Phacoanaphylactic uveitis', 'Pseudoexfoliation'],
      correct: 0,
      explanation: 'Phacomorphic glaucoma results from intumescent cataract pushing the lens-iris diaphragm forward, causing angle closure.',
    },
    {
      id: 'fel-4',
      q: 'Best treatment for postoperative cystoid macular oedema (Irvine-Gass) is:',
      options: ['Observation only', 'Topical NSAID + steroid combination', 'Anti-VEGF first line', 'Pars plana vitrectomy'],
      correct: 1,
      explanation: 'First-line therapy for Irvine-Gass CME is topical NSAIDs combined with topical corticosteroids.',
    },
    {
      id: 'fel-5',
      q: 'The most common cause of late IOL-bag dislocation 10+ years after cataract surgery is:',
      options: ['Trauma', 'Pseudoexfoliation', 'Capsular block', 'High myopia'],
      correct: 1,
      explanation: 'Pseudoexfoliation with progressive zonular weakness is the most common cause of late spontaneous IOL-bag dislocation.',
    },
    {
      id: 'fel-6',
      q: 'Soemmering ring describes:',
      options: ['Subluxated lens', 'Doughnut-shaped residual peripheral cortex', 'Pigment ring on lens', 'Anterior capsule fibrosis'],
      correct: 1,
      explanation: 'Soemmering ring is residual peripheral cortex between anterior and posterior capsules after capsule rupture or ECCE.',
    },
    {
      id: 'fel-7',
      q: 'In Marfan syndrome, ectopia lentis classically displaces:',
      options: ['Infero-nasally', 'Supero-temporally', 'Posteriorly', 'Anteriorly'],
      correct: 1,
      explanation: 'Marfan syndrome classically causes supero-temporal lens subluxation.',
    },
    {
      id: 'fel-8',
      q: 'A posterior capsular opacification is best treated with:',
      options: ['Topical steroids', 'YAG laser capsulotomy', 'Surgical capsulectomy', 'Observation only'],
      correct: 1,
      explanation: 'Nd:YAG laser capsulotomy is the standard treatment for visually significant posterior capsular opacification.',
    },
  ],

  'exam-notes': [
    {
      id: 'notes-1',
      q: 'Which structure is derived from neural crest?',
      options: ['Lens', 'Retina', 'Corneal stroma', 'Vitreous primary'],
      correct: 2,
      explanation: 'Corneal stroma, endothelium, sclera, and trabecular meshwork are neural crest derived.',
    },
    {
      id: 'notes-2',
      q: 'The thinnest part of the sclera is at:',
      options: ['Limbus', 'Equator', 'Posterior pole', 'Insertions of rectus muscles'],
      correct: 3,
      explanation: 'The sclera is thinnest just posterior to the recti insertions.',
    },
    {
      id: 'notes-3',
      q: 'Hudson-Stähli line is caused by:',
      options: ['Iron deposition in corneal epithelium', 'Calcium in Bowman layer', 'Copper in Descemet', 'Cholesterol in stroma'],
      correct: 0,
      explanation: 'Hudson-Stähli line is a horizontal iron deposition line in the inferior corneal epithelium.',
    },
    {
      id: 'notes-4',
      q: 'The most common malignant eyelid tumour is:',
      options: ['Squamous cell carcinoma', 'Basal cell carcinoma', 'Sebaceous gland carcinoma', 'Melanoma'],
      correct: 1,
      explanation: 'Basal cell carcinoma accounts for ~90% of malignant eyelid tumours.',
    },
    {
      id: 'notes-5',
      q: 'Sunflower cataract is caused by deposition of:',
      options: ['Copper', 'Iron', 'Silver', 'Calcium'],
      correct: 0,
      explanation: 'Sunflower cataract is copper deposition under the anterior lens capsule, classically in Wilson\'s disease.',
    },
    {
      id: 'notes-6',
      q: 'The macula lutea owes its yellow colour to:',
      options: ['Melanin', 'Lipofuscin', 'Xanthophyll (lutein/zeaxanthin)', 'Beta-carotene'],
      correct: 2,
      explanation: 'Xanthophyll pigments (lutein and zeaxanthin) give the macula its yellow colour.',
    },
    {
      id: 'notes-7',
      q: 'A child with bilateral mucopurulent conjunctivitis and follicles may have:',
      options: ['Allergic conjunctivitis', 'Chlamydial trachoma', 'Viral conjunctivitis', 'Vernal keratoconjunctivitis'],
      correct: 1,
      explanation: 'Trachoma classically presents with mucopurulent discharge and follicles on the tarsal conjunctiva.',
    },
    {
      id: 'notes-8',
      q: 'The first intervention in suspected ocular chemical injury is:',
      options: ['Apply antibiotic ointment', 'Immediate copious irrigation', 'Refer to ophthalmology', 'Pressure patch'],
      correct: 1,
      explanation: 'Immediate prolonged irrigation is the single most important first step in chemical eye injury.',
    },
    {
      id: 'notes-9',
      q: 'Kayser-Fleischer ring is found in:',
      options: ['Wilson\'s disease', 'Haemochromatosis', 'Cystinosis', 'Marfan syndrome'],
      correct: 0,
      explanation: 'Kayser-Fleischer ring is copper deposition in Descemet\'s membrane in Wilson\'s disease.',
    },
    {
      id: 'notes-10',
      q: 'Drusen are deposits located between:',
      options: ['NFL and ganglion cells', 'RPE and Bruch membrane', 'Photoreceptors and RPE', 'Sclera and choroid'],
      correct: 1,
      explanation: 'Drusen are extracellular deposits between the RPE basement membrane and Bruch\'s membrane.',
    },
  ],

  'high-yield': [
    {
      id: 'hy-1',
      q: 'Which photoreceptor type mediates scotopic vision?',
      options: ['Cones', 'Rods', 'Bipolar cells', 'Müller cells'],
      correct: 1,
      explanation: 'Rods containing rhodopsin mediate low-light (scotopic) vision.',
    },
    {
      id: 'hy-2',
      q: 'The most common cause of vitreous haemorrhage in adults in developed countries is:',
      options: ['Proliferative diabetic retinopathy', 'Retinal vein occlusion', 'PVD with retinal tear', 'Trauma'],
      correct: 0,
      explanation: 'Proliferative diabetic retinopathy is the leading cause of vitreous haemorrhage in adults.',
    },
    {
      id: 'hy-3',
      q: 'Acanthamoeba keratitis classically presents with:',
      options: ['Painless ulcer with hypopyon', 'Severe pain out of proportion to signs, ring infiltrate', 'Dendritic ulcer', 'Mucopurulent discharge only'],
      correct: 1,
      explanation: 'Acanthamoeba causes severe pain disproportionate to signs, with ring infiltrate and radial keratoneuritis.',
    },
    {
      id: 'hy-4',
      q: 'Acute primary angle-closure glaucoma treatment of choice is:',
      options: ['Immediate trabeculectomy', 'IOP-lowering medication ± pilocarpine, then laser iridotomy', 'Laser trabeculoplasty', 'Topical steroid only'],
      correct: 1,
      explanation: 'Initial treatment is medical IOP lowering with later laser peripheral iridotomy once the cornea clears.',
    },
    {
      id: 'hy-5',
      q: 'CMV retinitis typically occurs when CD4 count drops below:',
      options: ['500', '350', '200', '50'],
      correct: 3,
      explanation: 'CMV retinitis usually occurs with CD4 < 50 cells/µL in immunocompromised patients.',
    },
    {
      id: 'hy-6',
      q: 'Selective laser trabeculoplasty (SLT) targets:',
      options: ['Schlemm canal', 'Pigmented trabecular meshwork cells', 'Ciliary body', 'Iris stroma'],
      correct: 1,
      explanation: 'SLT selectively targets pigmented trabecular meshwork cells without collateral thermal damage.',
    },
    {
      id: 'hy-7',
      q: 'The principal action of cycloplegic agents in refraction is:',
      options: ['Pupil dilation only', 'Paralysis of accommodation', 'Lowering IOP', 'Improving fundus view'],
      correct: 1,
      explanation: 'Cycloplegics paralyse the ciliary muscle, suspending accommodation to measure refractive error accurately.',
    },
    {
      id: 'hy-8',
      q: 'Best disease shows a reduced Arden ratio on:',
      options: ['ERG', 'EOG', 'VEP', 'OCT'],
      correct: 1,
      explanation: 'Best disease (vitelliform dystrophy) shows a markedly reduced Arden ratio on EOG.',
    },
    {
      id: 'hy-9',
      q: 'Plateau iris is caused by:',
      options: ['Pupillary block', 'Anteriorly positioned ciliary processes', 'Dense iris pigmentation', 'Subluxated lens'],
      correct: 1,
      explanation: 'Plateau iris is caused by anteriorly positioned ciliary processes pushing the peripheral iris forward.',
    },
    {
      id: 'hy-10',
      q: 'The refractive shift in nuclear sclerotic cataract is typically:',
      options: ['Hyperopic', 'Myopic ("second sight")', 'Astigmatic only', 'No change'],
      correct: 1,
      explanation: 'Nuclear sclerosis increases lens refractive index, causing a myopic shift sometimes called "second sight".',
    },
  ],

  general: [
    {
      id: 'gen-1',
      q: 'A 60-year-old with sudden flashes, floaters, and a curtain over vision most likely has:',
      options: ['Migraine aura', 'Posterior vitreous detachment with retinal tear/RD', 'Optic neuritis', 'AION'],
      correct: 1,
      explanation: 'Flashes, floaters, and a curtain warrant urgent retinal examination to rule out PVD with tear or detachment.',
    },
    {
      id: 'gen-2',
      q: 'The fovea centralis is approximately how many disc diameters temporal to the optic disc?',
      options: ['1 DD', '1.5 DD', '2 DD', '2.5 DD'],
      correct: 3,
      explanation: 'The fovea is ~2.5 disc diameters temporal and slightly inferior to the optic disc centre.',
    },
    {
      id: 'gen-3',
      q: 'Vogt-Koyanagi-Harada syndrome classically involves:',
      options: ['Bilateral panuveitis with serous retinal detachments', 'Granulomatous keratitis only', 'Anterior segment only', 'Endophthalmitis'],
      correct: 0,
      explanation: 'VKH is an autoimmune bilateral granulomatous panuveitis with exudative retinal detachments.',
    },
    {
      id: 'gen-4',
      q: 'First-line treatment for centre-involving diabetic macular oedema with reduced vision is:',
      options: ['Focal laser', 'Pan-retinal photocoagulation', 'Intravitreal anti-VEGF', 'Sub-Tenon triamcinolone'],
      correct: 2,
      explanation: 'Intravitreal anti-VEGF is first-line for centre-involving DME with decreased vision.',
    },
    {
      id: 'gen-5',
      q: 'The most common cause of posterior uveitis worldwide is:',
      options: ['Sarcoidosis', 'Toxoplasmosis', 'Behçet disease', 'CMV'],
      correct: 1,
      explanation: 'Toxoplasma chorioretinitis is the leading cause of posterior uveitis worldwide.',
    },
    {
      id: 'gen-6',
      q: 'Levator function ≥10 mm with mild margin reflex distance reduction indicates:',
      options: ['Severe ptosis needing frontalis sling', 'Mild-moderate aponeurotic ptosis', 'Congenital myogenic ptosis', 'Myasthenic ptosis'],
      correct: 1,
      explanation: 'Good levator function with mild-moderate ptosis is usually aponeurotic and repaired with aponeurotic advancement.',
    },
    {
      id: 'gen-7',
      q: 'The commonest type of age-related macular degeneration is:',
      options: ['Wet (neovascular)', 'Dry (non-exudative atrophic)', 'Polypoidal choroidal vasculopathy', 'Pattern dystrophy'],
      correct: 1,
      explanation: 'Dry AMD accounts for ~85-90% of AMD cases, although wet AMD causes most severe vision loss.',
    },
    {
      id: 'gen-8',
      q: 'A patient with optic-disc cupping 0.9, IOP 14, normal field, and family history likely has:',
      options: ['Normal-tension glaucoma', 'Physiologic cupping', 'Optic neuropathy', 'Pseudoexfoliative glaucoma'],
      correct: 0,
      explanation: 'Glaucomatous optic neuropathy with IOP ≤21 mmHg is classified as normal-tension glaucoma.',
    },
    {
      id: 'gen-9',
      q: 'The lens is embryologically derived from:',
      options: ['Neural ectoderm', 'Surface ectoderm', 'Neural crest', 'Mesoderm'],
      correct: 1,
      explanation: 'The lens is derived from surface ectoderm via the lens placode.',
    },
    {
      id: 'gen-10',
      q: 'Retinitis pigmentosa typically presents with:',
      options: ['Sudden central vision loss', 'Nyctalopia followed by peripheral field loss', 'Painful red eye', 'Acute photopsia and curtain'],
      correct: 1,
      explanation: 'RP presents with night blindness and progressive peripheral visual field loss.',
    },
  ],
};

/** Resolve a category by its id. */
export function getCategoryById(id: CategoryId): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
