/**
 * Long-form marketing descriptions for product pages.
 * Structure matches OphthaMCQ sales copy (Eyelids notes as the reference style).
 */

export interface ProductDescription {
  /** SEO / page title style line */
  headline: string;
  /** Short punchy line under H1 */
  tagline: string;
  /** Opening paragraphs */
  intro: string[];
  whatYoullLearn: string[];
  whyStandsOut: string[];
  whoIsThisFor: string[];
  inside: string[];
  whyOphtha: string;
  closing: string;
}

const AUDIENCE_PG = [
  'DNB Ophthalmology Residents',
  'MS Ophthalmology Residents',
  'MD Ophthalmology Residents',
  'DO Ophthalmology Trainees',
  'FCPS Ophthalmology Candidates',
  'ICO Examination Aspirants',
  'FICO Examination Aspirants',
  'FAICO Candidates',
  'FRCOphth Candidates',
  'Fellowship Entrance Preparation',
  'Comprehensive Ophthalmology Revision',
];

const AUDIENCE_MCQ = [
  'PG residents preparing for theory MCQ papers',
  'ICO / FICO and FAICO aspirants',
  'FRCOphth Part 1 candidates',
  'PDCET and entrance exam aspirants',
  'Residents who prefer exam-pattern practice over passive reading',
];

const WHY_OPHTHA =
  'At OPHTHA MCQ, every resource is built by ophthalmologists, for ophthalmologists. Our goal is to simplify postgraduate learning by providing concise, exam-focused study material that helps residents revise efficiently, improve clinical understanding and perform better in DNB, MS, MD, ICO, FICO, FAICO and FRCOphth examinations.';

const CLOSING =
  'Study smarter. Revise faster. Score higher—with OPHTHA MCQ.';

export const PRODUCT_DESCRIPTIONS: Record<string, ProductDescription> = {
  'eyelids-notes': {
    headline:
      'Eyelids Handwritten Notes for DNB, MS, ICO, FICO & FRCOphth | Exam Ready Ophthalmology Revision PDF',
    tagline: 'Master Eyelid Disorders Faster. Revise Smarter. Score Higher.',
    intro: [
      'Preparing eyelid disorders from multiple textbooks can be overwhelming. This Eyelids Exam Ready Handwritten Notes PDF by OPHTHA MCQ has been designed specifically for ophthalmology postgraduates, residents and fellowship aspirants who want concise, high-yield, exam-oriented revision material in one place.',
      'Created by ophthalmologists, these notes convert lengthy textbook chapters into easy-to-understand handwritten concepts with clinical photographs, diagrams, surgical illustrations and rapid revision points that help you retain information faster and perform confidently in theory, viva, practical and clinical examinations.',
    ],
    whatYoullLearn: [
      'Applied eyelid anatomy',
      'Clinical terminology and lesion identification',
      'Histopathology essentials',
      'Diagnosis and treatment principles',
      'Non-neoplastic eyelid lesions',
      'Chalazion and eyelid cysts',
      'Benign pigmented lesions',
      'Benign adnexal tumours',
      'Miscellaneous benign tumours',
      'Malignant eyelid tumours (BCC, SCC, Sebaceous Gland Carcinoma, Melanoma and more)',
      'Ptosis',
      'Ectropion',
      'Entropion',
      'Eyelid retraction',
      'Eyelid reconstruction principles',
      'Clinical photographs and image-based learning',
      'Histopathology pearls',
      'Surgical management and reconstruction concepts',
      'Differential diagnosis tables',
      'Viva-ready high-yield facts and rapid revision points',
    ],
    whyStandsOut: [
      'Handwritten, easy-to-revise format',
      '90+ pages of high-yield ophthalmology content',
      'Colour-coded notes for better recall',
      'Numerous clinical photographs and diagrams',
      'Examination-focused approach',
      'Practical, viva and theory-oriented content',
      'Quick differentiation of commonly confused eyelid disorders',
      'Saves hours of textbook reading before examinations',
    ],
    whoIsThisFor: AUDIENCE_PG,
    inside: [
      'High-yield handwritten notes',
      'Clinical photographs',
      'Histopathology images',
      'Surgical illustrations',
      'Reconstruction concepts',
      'Management algorithms',
      'Differential diagnosis tables',
      'Practical examination pearls',
      'Viva-ready facts',
      'Rapid revision format for last-minute preparation',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'If you’re looking for one comprehensive eyelid revision resource that combines textbook knowledge with clinical relevance in an easy-to-read handwritten format, this PDF is the perfect companion for your ophthalmology journey. ' + CLOSING,
  },

  'retina-deciphered': {
    headline:
      'Retina Deciphered Handwritten Notes for DNB, MS, ICO, FICO & FRCOphth | Exam Ready Retina Revision PDF',
    tagline: 'Decode the Entire Retina Syllabus. Revise Faster. Score Higher.',
    intro: [
      'Retina is vast, image-heavy and high-yield in every major ophthalmology exam. Retina Deciphered by OPHTHA MCQ turns Ryan, Kanski and standard retina texts into a single handwritten, exam-ready revision system for postgraduates and fellowship aspirants.',
      'Created by ophthalmologists who passed these exams, the notes distil pathophysiology, clinical signs, investigations and management into clear diagrams, tables and rapid-revision bullets you can actually finish before the paper.',
    ],
    whatYoullLearn: [
      'Retinal circulation and applied anatomy',
      'Diabetic retinopathy and classification systems',
      'Non-diabetic retinopathies',
      'Retinal venous and arterial occlusive disease',
      'Ocular ischaemic syndrome',
      'Hypertensive eye disease',
      'Sickle cell and thalassaemia retinopathy',
      'ROP and paediatric retina essentials',
      'Acquired macular disease and AMD',
      'CSCR, PCV and CNVM spectrum',
      'Vitreomacular interface disorders',
      'Retinal breaks, RD and vitrectomy concepts',
      'Retinal tumours and paraneoplastic syndromes',
      'Investigations: FFA, OCT, ERG and imaging pearls',
      'Viva-ready differentials and exam mnemonics',
    ],
    whyStandsOut: [
      'Handwritten, topic-mapped retina notes',
      '150+ pages of high-yield content',
      'Exam-style diagrams (not glossy textbook plates only)',
      'High-yield tags for FRCOphth, ICO, DNB and FAICO',
      'Investigation interpretation built into each topic',
      'Management algorithms you can recite in viva',
      'Lifetime access with free updates',
      'Built to replace cover-to-cover textbook slogs for revision',
    ],
    whoIsThisFor: AUDIENCE_PG,
    inside: [
      'Complete handwritten index of retina topics',
      'Disease-wise clinical + investigation blocks',
      'Hand-drawn schematics matching exam stems',
      'Imaging interpretation pearls',
      'Surgical retina essentials',
      'Rapid revision bullets',
      'Self-test style recall points',
      'PDF + mobile app sync access',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'If you need one retina resource that bridges classic textbooks and exam reality, Retina Deciphered is built for that job. ' + CLOSING,
  },

  'anatomy-notes': {
    headline:
      'Anatomy of Eye Handwritten Notes for DNB, MS, ICO, FICO & FRCOphth | Exam Ready Basic Sciences PDF',
    tagline: 'Build Unshakeable Foundations. Revise Anatomy the Exam Way.',
    intro: [
      'Basic sciences and ocular anatomy decide scores in ICO Basic, FRCOphth Part 1, PD-CET and DNB theory. This Anatomy of Eye Exam Ready Handwritten Notes PDF by OPHTHA MCQ compresses orbital, adnexal and intraocular anatomy into clinical, diagram-first revision notes.',
      'Every page is written for recall under pressure—structures, relations, blood supply, innervation and clinical correlations that examiners actually ask.',
    ],
    whatYoullLearn: [
      'Orbital anatomy and bony walls',
      'Eyelid anatomy and adnexa',
      'Lacrimal gland and excretory system',
      'Extraocular muscles and innervation',
      'Cornea, sclera and limbus',
      'Anterior chamber and angle structures',
      'Uveal tract anatomy',
      'Lens anatomy and zonules',
      'Vitreous and retinal layers',
      'Optic nerve and visual pathway essentials',
      'Blood supply and venous drainage',
      'Cranial nerves III, IV, V, VI clinical correlations',
      'Histology and embryology high-yield points',
      'Applied anatomy for surgery and trauma',
    ],
    whyStandsOut: [
      'Handwritten format optimised for spatial memory',
      'Diagram-first layout matching exam schematics',
      'Clinical correlations on every major structure',
      'Ideal for Part 1 / basic sciences papers',
      'One-sitting topic revision design',
      'No fluff—only testable facts',
      'Printable PDF + app access',
    ],
    whoIsThisFor: AUDIENCE_PG,
    inside: [
      'Indexed topic maps',
      'Hand-drawn anatomical diagrams',
      'Tables of origins, insertions and actions',
      'Nerve and vessel summaries',
      'Clinical correlation boxes',
      'Viva spotter-ready facts',
      'Rapid revision checklists',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'If anatomy has been the weak link in your prep, these notes give you a complete, exam-shaped foundation. ' + CLOSING,
  },

  'glaucoma-notes': {
    headline:
      'Glaucoma Exam Ready Handwritten Notes for DNB, MS, ICO, FICO & FRCOphth | Revision PDF',
    tagline: 'From Angle Anatomy to Surgery—Glaucoma Made Exam-Ready.',
    intro: [
      'Glaucoma spans basic science, diagnostics, medical therapy and surgery—and it appears in every major ophthalmology exam. This Glaucoma Exam Ready Handwritten Notes PDF by OPHTHA MCQ distils Kanski, Shields and standard glaucoma texts into high-yield handwritten revision pages.',
      'Built by ophthalmologists for residents, the set covers pathophysiology, evaluation, open- and closed-angle disease, secondary glaucomas and management algorithms you can present cleanly in theory and viva.',
    ],
    whatYoullLearn: [
      'Anatomy of the angle and aqueous dynamics',
      'Optic disc evaluation',
      'Tonometry principles and pitfalls',
      'Gonioscopy grading and interpretation',
      'Perimetry strategies and printout reading',
      'HRT / OCT RNFL basics',
      'POAG and normal tension glaucoma',
      'Angle-closure spectrum (PAC, PACG)',
      'PXF / PDS and secondary open-angle disease',
      'Neovascular, inflammatory and steroid-induced glaucoma',
      'Lens-related and traumatic glaucoma',
      'ICE syndrome and tumour-associated glaucoma',
      'Developmental glaucomas',
      'Medical and laser therapy high-yield points',
      'Surgical options and post-op pearls',
    ],
    whyStandsOut: [
      'Handwritten notes from passers who sat the same exams',
      'Full index covering the clinical glaucoma syllabus',
      'Investigation interpretation integrated into topics',
      'Differentials and classification tables for rapid recall',
      'Viva-ready management algorithms',
      'Saves multi-book hunting before exams',
      'Lifetime access with updates',
    ],
    whoIsThisFor: AUDIENCE_PG,
    inside: [
      'Topic-wise handwritten pages',
      'Angle and optic disc diagrams',
      'Perimetry interpretation guides',
      'Drug and laser summary tables',
      'Secondary glaucoma checklists',
      'Surgical overview notes',
      'Rapid revision bullets',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'One focused glaucoma resource for theory, clinic and viva—without drowning in multi-volume textbooks. ' + CLOSING,
  },

  'optics-notes': {
    headline:
      'Optics & Refraction Exam Ready Notes for DNB, MS, ICO, FICO & FRCOphth | High-Yield PDF',
    tagline: 'The Most Feared Topic—Made Clear, Visual and Solvable.',
    intro: [
      'Optics and refraction intimidate most PGs—and yet they decide scores in ICO Optics papers, FRCOphth Part 1 and DNB theory. This Optics & Refraction Exam Ready Notes set by OPHTHA MCQ turns abstract physics into diagrams, worked problems and exam-pattern explanations.',
      'Designed for residents who need conceptual clarity and speed, not a pure physics textbook.',
    ],
    whatYoullLearn: [
      'Geometric optics foundations',
      'Vergence, lenses and mirrors',
      'Prisms and prismatic effects',
      'Refraction at spherical surfaces',
      'Ametropia and refractive errors',
      'Accommodation and presbyopia',
      'Retinoscopy principles',
      'Subjective refraction steps',
      'Contact lens optics essentials',
      'Low vision optics basics',
      'Aberrations and image quality',
      'Solved numerical problems',
      'Exam tips for optics MCQs and short notes',
    ],
    whyStandsOut: [
      'Diagram-first teaching for abstract concepts',
      'Worked examples matching exam style',
      'Handwritten clarity without sterile formatting noise',
      'Built for ICO / FRCOphth / DNB optics weightage',
      'Premium depth where other notes skim',
      'Rapid revision maps before the paper',
    ],
    whoIsThisFor: AUDIENCE_PG,
    inside: [
      'Handwritten concept pages',
      'Ray diagrams and formulae sheets',
      'Solved numerical walkthroughs',
      'Clinical refraction correlations',
      'Common exam trap callouts',
      'Quick formula revision lists',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'Stop fearing optics—revise it with structure, diagrams and exam-pattern problems. ' + CLOSING,
  },

  'instruments-in-ophthalmology-notes': {
    headline:
      'Instruments in Ophthalmology Notes for DNB / MS Practical & Viva | Exam Ready PDF',
    tagline: 'Identify. Describe. Use. Walk Into Practical With Confidence.',
    intro: [
      'Instrument tables and viva stations punish vague answers. This Instruments in Ophthalmology PDF by OPHTHA MCQ gives you identification, parts, uses and clinical applications for instruments that repeatedly appear in DNB, MS and DO practical exams.',
      'Written for the practical room—not a surgical atlas—so you can speak structured 30–60 second answers under pressure.',
    ],
    whatYoullLearn: [
      'Speculums and lid instruments',
      'Forceps types and uses',
      'Scissors and cutting instruments',
      'Needle holders and suturing tools',
      'Cataract and IOL-related instruments',
      'Glaucoma surgery instruments essentials',
      'Corneal instruments and trephines',
      'Strabismus instruments overview',
      'Identification tips and common viva traps',
      'Parts, advantages and limitations language for examiners',
    ],
    whyStandsOut: [
      'Practical-exam first design',
      'Clear identification + use format',
      'Viva-ready phrasing',
      'High-yield instruments only—no noise',
      'Pairs perfectly with OSCE and case presentation prep',
      'Instant PDF access for ward revision',
    ],
    whoIsThisFor: [
      'DNB / MS / DO practical exam candidates',
      'Residents facing instrument table viva',
      'OSCE and clinical exam aspirants',
      'Fellowship interview candidates needing instrument fluency',
    ],
    inside: [
      'Instrument identification notes',
      'Parts and uses summaries',
      'Exam-style viva answers',
      'Clinical application pointers',
      'Rapid last-minute revision layout',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'Turn the instrument table from a stress point into a scoring station. ' + CLOSING,
  },

  'ophthalmology-drugs-practical-pdf': {
    headline:
      'Ophthalmology Drugs Practical PDF for DNB / MS Viva & OSCE | Exam Ready Guide',
    tagline: 'Doses, Indications and Pearls—Ready for the Practical Table.',
    intro: [
      'Drug viva and OSCE stations test dose, route, indications and contraindications at speed. This Ophthalmology Drugs Practical PDF by OPHTHA MCQ is a practical-exam companion covering high-yield ophthalmic drugs with clear exam pearls.',
      'Built for residents who need structured answers—not a pharmacology textbook.',
    ],
    whatYoullLearn: [
      'Mydriatics and cycloplegics',
      'Anti-glaucoma medications',
      'Antibiotics and antivirals used in ophthalmology',
      'Steroids and NSAIDs',
      'Anaesthetic agents',
      'Viscoelastics and intraoperative agents',
      'Anti-VEGF essentials',
      'Doses, routes and key contraindications',
      'Side-effect profiles examiners love to ask',
      'Rapid viva phrasing for each drug class',
    ],
    whyStandsOut: [
      'Practical / viva oriented—not dense pharmacology prose',
      'Dose and indication clarity',
      'Exam pearls highlighted for recall',
      'Pairs with instruments and case presentation packs',
      'Printable PDF for pocket revision',
    ],
    whoIsThisFor: [
      'DNB / MS / DO practical candidates',
      'OSCE and viva examinees',
      'Residents revising pharmacology the night before practicals',
      'Fellowship interview aspirants',
    ],
    inside: [
      'Drug class summaries',
      'Dose tables and indications',
      'Contraindication callouts',
      'Intraoperative agents',
      'Viva-ready one-liners',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'Walk into drug viva with structured, confident answers. ' + CLOSING,
  },

  'case-presentation-format-notes': {
    headline:
      'Ophthalmology Case Presentation Format Notes for DNB / MS Practical | Exam Ready PDF',
    tagline: 'Present Long and Short Cases Like a Passer.',
    intro: [
      'Case presentation decides first impressions in practical exams. This Case Presentation Format PDF by OPHTHA MCQ gives step-by-step templates for history, examination, differential diagnosis, investigations and management—the structure examiners expect.',
      'Includes practical case-list thinking used by residents who have cleared DNB and MS practicals.',
    ],
    whatYoullLearn: [
      'Long case presentation structure',
      'Short case rapid frameworks',
      'History-taking that scores',
      'Systematic ocular examination order',
      'Differential diagnosis presentation',
      'Investigation justification language',
      'Management plan framing',
      'Anterior segment and posterior segment case patterns',
      'Glaucoma and cornea case templates',
      'Common examiner interruptions and how to handle them',
    ],
    whyStandsOut: [
      'Format-first design for practicals',
      'Templates you can reuse across cases',
      'Aligned with DNB / MS / DO practical flow',
      'Reduces blank-outs under examiner pressure',
      'Pairs with OSCE and instruments packs',
    ],
    whoIsThisFor: [
      'DNB / MS / DO practical exam candidates',
      'Residents preparing case presentations',
      'OSCE communication stations',
      'Juniors learning clinical presentation skills',
    ],
    inside: [
      'Step-by-step case formats',
      'Section-wise checklists',
      'Sample phrasing for viva',
      'High-yield case categories',
      'Rapid revision layout',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'Present every case with structure, clarity and confidence. ' + CLOSING,
  },

  'read-ophthalmology-reports-tests': {
    headline:
      'How to Read Ophthalmology Reports & Tests | OCT, Fields, FFA Exam Ready PDF',
    tagline: 'Interpret Investigations Like an Examiner Expects.',
    intro: [
      'OSCE and viva increasingly test investigation interpretation. This How to Read Ophthalmology Reports/Tests PDF by OPHTHA MCQ teaches structured reading of OCT, visual fields, FFA, B-scan and related tests—with station-style questions and answers.',
      'Based on practical exam patterns for DNB, MS, FAICO and FRCOphth oral-style assessment.',
    ],
    whatYoullLearn: [
      'FFA phases and laminar flow concepts',
      'OCT interpretation frameworks',
      'Visual field printout reading',
      'USG / B-scan essentials',
      'A-scan and biometry basics',
      'Keratometry and corneal imaging pearls',
      'Station-style Q&A formats',
      'How to present findings in 60 seconds',
      'Common traps in imaging viva',
    ],
    whyStandsOut: [
      'OSCE-station modelling',
      'Image-based learning',
      'Structured answer keys',
      'Practical exam relevance over theory dump',
      'Built for DNB / MS practicals and oral exams',
    ],
    whoIsThisFor: [
      'DNB / MS practical candidates',
      'OSCE and imaging station aspirants',
      'FRCOphth oral exam candidates',
      'Residents weak in investigation interpretation',
    ],
    inside: [
      'Multi-station investigation modules',
      'Images with guided questions',
      'Model answers',
      'Presentation scripts',
      'Rapid revision summaries',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'Stop guessing at printouts—read and present investigations with a system. ' + CLOSING,
  },

  'recent-advances-ophthalmology-notes': {
    headline:
      'Recent Advances in Ophthalmology Notes for PG Exams, Viva & Interviews | Exam Ready PDF',
    tagline: 'Stay Current Without Chasing Every Journal.',
    intro: [
      'Recent advances questions appear in viva, interviews and theory papers. This Recent Advances PDF by OPHTHA MCQ distils high-yield updates across subspecialties into exam-ready notes for postgraduates and fellowship aspirants.',
      'Focus on what examiners ask—not a full literature review.',
    ],
    whatYoullLearn: [
      'High-yield advances across major subspecialties',
      'New diagnostics and imaging concepts',
      'Surgical innovations commonly asked in viva',
      'Drug and device updates of exam relevance',
      'How to frame “recent advances” answers',
      'Interview-ready talking points',
    ],
    whyStandsOut: [
      'Exam and interview focused',
      'Concise distillation of advances',
      'Viva phrasing included',
      'Updated periodically',
      'Saves months of random paper hunting',
    ],
    whoIsThisFor: AUDIENCE_PG,
    inside: [
      'Topic-wise recent advances notes',
      'Viva answer frames',
      'High-yield lists',
      'Rapid revision format',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'Walk into viva and interviews with current, structured answers. ' + CLOSING,
  },

  'rings-dots-lines-spots-guide': {
    headline:
      'Rings, Dots, Lines & Spots in Ophthalmology | Ultimate Clinical Guide PDF',
    tagline: 'Name the Sign. Localise the Disease. Score the Spotter.',
    intro: [
      'Spotters and clinical MCQs love eponymous signs—rings, dots, lines and spots. This Ultimate Clinical Guide by OPHTHA MCQ organises these high-yield signs for rapid identification in exams and clinics.',
      'Ideal for image-based questions and viva “what is this sign?” moments.',
    ],
    whatYoullLearn: [
      'Classic corneal and conjunctival signs',
      'Retinal spots, dots and flecks',
      'Fundus rings and lines of exam importance',
      'Systemic associations of key signs',
      'Differentials when signs overlap',
      'Rapid identification frameworks',
    ],
    whyStandsOut: [
      'Sign-first organisation for spotters',
      'High clinical and exam yield',
      'Quick differentials',
      'Perfect last-week revision resource',
    ],
    whoIsThisFor: AUDIENCE_PG,
    inside: [
      'Catalogued clinical signs',
      'Image-oriented descriptions',
      'Association tables',
      'Viva one-liners',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'Never blank on a classic sign again. ' + CLOSING,
  },

  'instruments-drugs-practical-viva': {
    headline:
      'Instruments & Drugs for Practical Exams and Viva | Combined Ophthalmology PDF',
    tagline: 'One Pack for the Practical Table and Drug Viva.',
    intro: [
      'Practical exams combine instruments and drugs in rapid-fire viva. This combined PDF by OPHTHA MCQ brings both streams together for DNB / MS / DO candidates who want a single revision asset for the practical room.',
    ],
    whatYoullLearn: [
      'High-yield ophthalmic instruments',
      'Parts, uses and viva descriptions',
      'Core ophthalmology drugs with doses',
      'Indications, contraindications and pearls',
      'Integrated practical exam strategy',
    ],
    whyStandsOut: [
      'Combined instruments + drugs format',
      'Built for practical exam day',
      'Structured viva answers',
      'Saves juggling two separate resources under time pressure',
    ],
    whoIsThisFor: [
      'DNB / MS / DO practical candidates',
      'Residents preparing instrument and drug viva together',
      'OSCE practical exam aspirants',
    ],
    inside: [
      'Instrument identification notes',
      'Drug dose and indication summaries',
      'Viva-ready phrasing',
      'Rapid revision layout',
    ],
    whyOphtha: WHY_OPHTHA,
    closing:
      'Cover both practical pillars—instruments and drugs—in one focused pack. ' + CLOSING,
  },

  'high-yield-mcqs': {
    headline:
      'Ophthalmology High Yield MCQs for PG Exams | 1,000+ Exam-Pattern Questions',
    tagline: 'Practice the Pattern. Fix Weak Topics. Score Higher.',
    intro: [
      'MCQ exams reward pattern recognition and explanation depth—not passive reading. This High Yield MCQ bank by OPHTHA MCQ delivers exam-pattern questions across subspecialties with detailed explanations for serious PG prep.',
    ],
    whatYoullLearn: [
      'High-yield questions across major subspecialties',
      'Detailed explanations for right and wrong options',
      'Exam-pattern stem construction',
      'Topic-wise practice strategy',
      'How to use an MCQ bank for spaced revision',
    ],
    whyStandsOut: [
      '1,000+ high-yield MCQs',
      'Explanation-first learning',
      'Built by doctors who passed these exams',
      'Affordable vs international banks',
      'Pairs with handwritten notes for complete prep',
    ],
    whoIsThisFor: AUDIENCE_MCQ,
    inside: [
      'Topic-mapped MCQs',
      'Full explanations',
      'Exam tips',
      'Mobile app access',
    ],
    whyOphtha: WHY_OPHTHA,
    closing: CLOSING,
  },

  'faico-mcqs': {
    headline:
      'FAICO MCQs — AIOS Fellowship Exam Preparation | Syllabus-Mapped Question Bank',
    tagline: 'Syllabus-Mapped. Subspecialty-Focused. Fellowship-Ready.',
    intro: [
      'FAICO rewards depth in your chosen fellowship track. This FAICO MCQ bank by OPHTHA MCQ is mapped topic-by-topic to the AIOS syllabus so you practice what the exam actually tests.',
    ],
    whatYoullLearn: [
      'FAICO-pattern MCQs',
      'Subspecialty-aligned topic coverage',
      'Explanation-based learning',
      'How to combine notes + MCQs for fellowship prep',
    ],
    whyStandsOut: [
      'Syllabus-mapped design',
      'Fellowship-exam focus',
      'Built by passers and practitioners',
      'Pairs with Retina / Glaucoma / Eyelids note sets',
    ],
    whoIsThisFor: [
      'FAICO aspirants',
      'AIOS fellowship exam candidates',
      'Subspecialty-track residents',
    ],
    inside: [
      'Syllabus-mapped MCQs',
      'Detailed explanations',
      'Topic organisation',
      'App + web access',
    ],
    whyOphtha: WHY_OPHTHA,
    closing: CLOSING,
  },

  'ico-fico-past-papers': {
    headline:
      'ICO / FICO Past Papers with Full Explanations | Last 10 Years Exam Ready',
    tagline: 'Past Papers With Answers—Not Blank Question Lists.',
    intro: [
      'ICO/FICO rewards familiarity with real paper style. This Past Papers pack by OPHTHA MCQ provides last 10 years of papers with full explanations and answer keys so you learn pattern and content together.',
    ],
    whatYoullLearn: [
      'Real ICO/FICO paper patterns',
      'Full explanations for answers',
      'Time management for international exams',
      'Topic weightage awareness',
    ],
    whyStandsOut: [
      'Full explanations—not bare keys only',
      'Multi-year coverage',
      'Best-value positioning for ICO candidates',
      'Used by candidates across India, Middle East and Africa',
    ],
    whoIsThisFor: [
      'ICO Basic and Clinical Sciences candidates',
      'FICO aspirants',
      'International exam candidates from India and abroad',
    ],
    inside: [
      'Past papers',
      'Answer keys',
      'Full explanations',
      'Exam strategy notes',
    ],
    whyOphtha: WHY_OPHTHA,
    closing: CLOSING,
  },

  'ico-basic-visual-sciences': {
    headline:
      'ICO Basic Visual Sciences MCQs | Part A Exam Preparation',
    tagline: 'Basic Sciences MCQs Built for ICO Part A.',
    intro: [
      'ICO Basic Visual Sciences demands precise basic science recall. This MCQ bank targets Part A with focused questions and explanations for optics, anatomy, physiology and related foundations.',
    ],
    whatYoullLearn: [
      'Basic visual sciences MCQs',
      'Optics and anatomy integration',
      'Explanation-based correction of weak areas',
    ],
    whyStandsOut: [
      'ICO Part A focused',
      'Detailed explanations',
      'Complements handwritten anatomy and optics notes',
    ],
    whoIsThisFor: [
      'ICO Basic Sciences candidates',
      'FRCOphth Part 1 aspirants needing basic science drill',
    ],
    inside: [
      'MCQ bank',
      'Explanations',
      'Topic organisation',
    ],
    whyOphtha: WHY_OPHTHA,
    closing: CLOSING,
  },

  'ico-optics-refraction-mcqs-part-a': {
    headline:
      'ICO Optics & Refraction MCQs Part A | ICO/FICO Ophthalmology',
    tagline: 'Drill Optics Until the Fear Is Gone.',
    intro: [
      'Optics MCQs decide many ICO Part A outcomes. This bank focuses on optics and refraction with full explanations for candidates who need deliberate practice.',
    ],
    whatYoullLearn: [
      'Optics and refraction MCQs',
      'Numerical and conceptual stems',
      'Explanation-first error correction',
    ],
    whyStandsOut: [
      'Part A optics focus',
      'Pairs with Optics handwritten notes',
      'Exam-pattern practice',
    ],
    whoIsThisFor: [
      'ICO / FICO Part A candidates',
      'Residents weak in optics MCQs',
    ],
    inside: [
      'Optics MCQs',
      'Full explanations',
      'Exam tips',
    ],
    whyOphtha: WHY_OPHTHA,
    closing: CLOSING,
  },

  'frcophth-step-1-mcqs': {
    headline:
      'FRCOphth Step 1 / Part 1 MCQs | Comprehensive Exam Bank',
    tagline: 'UK Exam Pattern. Detailed Explanations. Serious Prep.',
    intro: [
      'FRCOphth Part 1 / Step 1 is a basic sciences and clinical knowledge filter. This MCQ bank by OPHTHA MCQ provides comprehensive practice with detailed explanations and exam tips for candidates targeting the Royal College pathway.',
    ],
    whatYoullLearn: [
      'FRCOphth-pattern MCQs',
      'Basic sciences and clinical integration',
      'Explanation-driven learning',
      'Exam strategy tips',
    ],
    whyStandsOut: [
      'Dedicated FRCOphth focus',
      'Detailed explanations',
      'Complements anatomy, optics and retina notes',
    ],
    whoIsThisFor: [
      'FRCOphth Part 1 / Step 1 candidates',
      'UK fellowship pathway aspirants',
    ],
    inside: [
      'Comprehensive MCQ bank',
      'Explanations',
      'Exam tips',
    ],
    whyOphtha: WHY_OPHTHA,
    closing: CLOSING,
  },

  'pdcet-mcqs': {
    headline:
      'PDCET Ophthalmology MCQs | High-Yield Bank for Post Diploma Entrance',
    tagline: 'Fast, High-Yield Practice for PDCET.',
    intro: [
      'PDCET rewards speed and basics. This dedicated PDCET Ophthalmology MCQ bank by OPHTHA MCQ is built for post-diploma candidates who need focused, high-yield practice.',
    ],
    whatYoullLearn: [
      'PDCET-pattern questions',
      'High-yield basics across ophthalmology',
      'Explanation-based revision',
    ],
    whyStandsOut: [
      'Exam-specific design',
      'High-yield focus',
      'Pairs with anatomy and optics notes for rapid prep',
    ],
    whoIsThisFor: [
      'PDCET aspirants',
      'Post-diploma ophthalmology candidates',
    ],
    inside: [
      'MCQ bank',
      'Explanations',
      'Rapid revision utility',
    ],
    whyOphtha: WHY_OPHTHA,
    closing: CLOSING,
  },

  'dnb-do-past-5-year-papers': {
    headline:
      'Past 5-Year DNB / DO Ophthalmology Question Papers | Model Answers & Exam Focus',
    tagline: 'Know the Paper Pattern Before You Walk In.',
    intro: [
      'DNB and DO theory rewards familiarity with recent paper trends. This Past 5-Year Papers pack by OPHTHA MCQ provides recent questions with model-answer focus so you revise what keeps recurring.',
    ],
    whatYoullLearn: [
      'Recent DNB / DO paper patterns',
      'Model answer orientation',
      'High-yield recurring themes',
    ],
    whyStandsOut: [
      'Past-paper authenticity',
      'Exam-focused model answers',
      'Ideal for last-month theory revision',
    ],
    whoIsThisFor: [
      'DNB Ophthalmology candidates',
      'DO theory candidates',
      'MS residents practicing long/short notes',
    ],
    inside: [
      'Past papers',
      'Model-answer guidance',
      'Exam focus notes',
    ],
    whyOphtha: WHY_OPHTHA,
    closing: CLOSING,
  },

  'short-term-phaco': {
    headline:
      'Short-Term Phaco — Ophthalmology Fellowship Preparation',
    tagline: 'Hands-On Phaco Prep for Fellowship Pathways.',
    intro: [
      'Short-term phaco fellowships reward surgical understanding and case discussion readiness. This OPHTHA MCQ resource supports fellowship preparation with notes and case-oriented material for phaco-focused training.',
    ],
    whatYoullLearn: [
      'Phaco fundamentals for fellowship aspirants',
      'Case discussion frameworks',
      'Exam and interview relevant surgical concepts',
    ],
    whyStandsOut: [
      'Fellowship-oriented content',
      'Practical case focus',
      'Built by ophthalmologists for training pathways',
    ],
    whoIsThisFor: [
      'Short-term phaco fellowship aspirants',
      'Residents preparing surgical interviews',
    ],
    inside: [
      'Fellowship preparation notes',
      'Case discussions',
      'High-yield surgical concepts',
    ],
    whyOphtha: WHY_OPHTHA,
    closing: CLOSING,
  },
};

export function getProductDescription(productId: string): ProductDescription | undefined {
  return PRODUCT_DESCRIPTIONS[productId];
}
