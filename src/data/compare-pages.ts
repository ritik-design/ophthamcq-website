/**
 * Content for the /compare/* pages.
 *
 * These target the site's most commercial queries — someone comparing question
 * banks is someone about to buy — but each page shipped a feature table and a
 * single line of intro, around 245 words. Too thin to outrank a competitor's
 * own comparison, and too thin to be useful.
 *
 * Editorial rule applied here: every claim about a rival is either already in
 * the feature matrix or is a statement about who the product is *built for*,
 * never an invented number. Pricing moves, so each page carries a verification
 * note rather than pretending the table is permanent.
 */

export interface Competitor {
  name: string;
  price: string;
  notes: string;
  pastPapers: string;
  mobile: string;
  freeTrial: string;
  bestFor: string;
}

export interface Verdict {
  /** Competitor name this verdict is about. */
  name: string;
  /** Honest case for choosing them instead of us. */
  chooseWhen: string;
  /** Where that choice costs you something. */
  tradeOff: string;
}

export interface ExamRoute {
  exam: string;
  pick: string;
  why: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface RelatedRead {
  href: string;
  title: string;
  blurb: string;
}

export interface ComparePage {
  title: string;
  description: string;
  h1: string;
  intro: string;
  lede: string[];
  method: string[];
  competitors: Competitor[];
  verdicts: Verdict[];
  byExam: ExamRoute[];
  faqs: Faq[];
  related: RelatedRead[];
}

const OPHTHAMCQ_ROW: Competitor = {
  name: 'OphthaMCQ',
  price: '₹249–₹1,799',
  notes: '✅ Handwritten',
  pastPapers: '✅ ICO/FICO',
  mobile: '✅ iOS + Android',
  freeTrial: '200+ free MCQs',
  bestFor: 'Indian + international exams',
};

const VERIFY_NOTE =
  'Prices and feature sets change without notice, and several of these platforms price in different currencies. Treat the table as a starting point and confirm the current figure on each vendor’s own checkout page before you buy.';

/** Deep-dive articles that carry the full argument behind each summary. */
const READS: Record<string, RelatedRead> = {
  banksCompared: {
    href: '/blog/best-ophthalmology-question-banks-compared-2026/',
    title: 'An exam-first buying framework',
    blurb: 'The long version of this page: how to pick a bank by the exam you are sitting rather than by feature count.',
  },
  ophthoQuestions: {
    href: '/blog/ophthoquestions-for-non-us-residents-what-it-covers-and-what-it-doesnt/',
    title: 'OphthoQuestions for non-US residents',
    blurb: 'A component-by-component audit of what transfers to a DNB, ICO or FRCOphth blueprint and what does not.',
  },
  eyeq: {
    href: '/blog/eyeq-eyedocs-vs-ophthamcq-frcophth-coverage-compared/',
    title: 'eyeQ (EyeDocs) vs OphthaMCQ for FRCOphth',
    blurb: 'Coverage compared per FRCOphth component, rather than brand against brand.',
  },
  freeVsPaid: {
    href: '/blog/free-vs-paid-ophthalmology-question-banks-where-free-runs-out/',
    title: 'Free vs paid banks: where free runs out',
    blurb: 'How far a free question bank actually gets you, and the point at which paying starts to buy something real.',
  },
  apps: {
    href: '/blog/best-ophthalmology-apps-for-residents-2026/',
    title: 'Best ophthalmology apps for residents',
    blurb: 'Chosen by the study job each app does well, not by star rating.',
  },
};

export const COMPARE_PAGES: Record<string, ComparePage> = {
  'best-ophthalmology-question-banks': {
    title: 'Best Ophthalmology Question Banks (2026)',
    description:
      'Compare ophthalmology question banks for FRCOphth, ICO/FICO, FAICO, DNB and NEET-SS on price, notes, past papers and mobile access, with an honest fit guide.',
    h1: 'Best Ophthalmology Question Banks',
    intro:
      'Choosing the right question bank can make or break your exam preparation. Here is how the main platforms compare — and where each of them is genuinely the better buy.',
    lede: [
      'There is no single best ophthalmology question bank, because the four platforms residents actually shortlist were built for four different exams. A bank written to the American board blueprint will drill you on topics an ICO examiner never asks about, and a bank written for DNB theory will not rehearse the single-best-answer style FRCOphth Part 1 uses. Feature counts do not resolve that; the exam you are sitting does.',
      'So the useful question is not "which bank is biggest" but "which bank was written against my blueprint, and does it cover the components I am weakest on". This page compares the shortlist on the things that change your score — question style, whether explanations teach or merely confirm, whether past papers are included, and whether you can revise on a phone between clinics — then says plainly who each one suits.',
      'We publish one of these banks, so read the fit guide below with that in mind. Where a rival is the better choice for your exam, it says so.',
    ],
    method: [
      'Every row below is a feature either published by the vendor or verifiable from a free account. We have deliberately not scored "question quality" out of ten, because that number would be ours to invent and yours to trust blindly.',
      'What we do compare is structural: the exam blueprint the bank is written against, whether explanations carry reasoning or only an answer key, whether real past papers are part of the package, what the free tier actually unlocks, and whether the thing runs on a phone.',
    ],
    competitors: [
      OPHTHAMCQ_ROW,
      { name: 'OphthoQuestions', price: '$314.99/6mo', notes: '❌', pastPapers: '❌', mobile: '⚠️ Web only', freeTrial: 'Limited demo', bestFor: 'US board exams' },
      { name: 'EyeDocs / eyeQ', price: '£79–99', notes: '❌', pastPapers: '❌', mobile: '❌', freeTrial: 'Limited', bestFor: 'UK FRCOphth' },
      { name: 'PrepGuidance', price: '₹999–₹8,995', notes: '❌', pastPapers: '✅ DNB solved', mobile: '✅ Android', freeTrial: '❌', bestFor: 'DNB / NEET-SS' },
    ],
    verdicts: [
      {
        name: 'OphthoQuestions',
        chooseWhen:
          'You are sitting OKAP or an American board examination, or you are a resident in a US programme whose in-service assessment follows the same blueprint. It is the deepest bank written directly against that curriculum, and the volume of questions is its real advantage.',
        tradeOff:
          'The blueprint is the problem for everyone else. Topic weighting, drug availability and management conventions follow US practice, it is priced in dollars at a level that is punishing from India, and it is a web product rather than something you revise on during a ward round.',
      },
      {
        name: 'EyeDocs / eyeQ',
        chooseWhen:
          'Your target is FRCOphth and you want questions written inside the UK training culture, by people who sat the same papers. For Part 1 in particular, that shared context shows in how the stems are framed.',
        tradeOff:
          'Coverage is narrow by design — it is an FRCOphth product, not a general ophthalmology bank — there are no handwritten revision notes bundled in, and there is no mobile app, which matters more than it sounds when your study time is fifteen-minute gaps.',
      },
      {
        name: 'PrepGuidance',
        chooseWhen:
          'You want taught video content and faculty contact alongside questions, and you are preparing for DNB or NEET-SS. If your gap is conceptual rather than practice volume, a mentored course does something a question bank cannot.',
        tradeOff:
          'You pay course prices rather than question-bank prices, the top of the range is several times what a bank costs, there is no free tier to test the fit first, and the value is in the teaching rather than in the bank itself.',
      },
      {
        name: 'OphthaMCQ',
        chooseWhen:
          'You are sitting an Indian or international exam — ICO/FICO, FAICO, DNB, MS, DO, PDCET or FRCOphth — and you want questions, handwritten revision notes and real past papers in one place, on a phone, at Indian pricing.',
        tradeOff:
          'We are not the right answer for American board preparation, and our FRCOphth coverage is newer than a UK-native product’s. If OKAP is your exam, buy OphthoQuestions.',
      },
    ],
    byExam: [
      { exam: 'ICO / FICO', pick: 'OphthaMCQ', why: 'Complete past papers with worked explanations, which no other platform on this list publishes.' },
      { exam: 'FAICO', pick: 'OphthaMCQ', why: 'Questions mapped topic-by-topic to the AIOS fellowship syllabus rather than to a general bank.' },
      { exam: 'DNB / MS / DO', pick: 'OphthaMCQ or PrepGuidance', why: 'Take the bank if you need practice volume and notes; take the course if your gap is conceptual and you want faculty contact.' },
      { exam: 'FRCOphth Part 1', pick: 'OphthaMCQ or eyeQ', why: 'eyeQ is UK-native; OphthaMCQ adds notes, past papers and mobile revision at a lower price.' },
      { exam: 'OKAP / US boards', pick: 'OphthoQuestions', why: 'It is written against that blueprint. Nothing else on this list is.' },
      { exam: 'PDCET', pick: 'OphthaMCQ', why: 'A dedicated PDCET bank in the entrance-test pattern; the others do not cover it at all.' },
    ],
    faqs: [
      {
        q: 'Is one question bank enough to pass?',
        a: 'For the written paper, usually yes, provided the bank is written against your blueprint and you review explanations rather than chasing a score. What a bank cannot do is rehearse practicals, so pair it with case presentation and viva material if your exam has a clinical component.',
      },
      {
        q: 'How many MCQs should I actually do?',
        a: 'Volume matters far less than reviewing what you got wrong. Two thousand questions worked through properly, with the discriminator logged each time, beats ten thousand skimmed. Most residents overshoot on volume and undershoot on review.',
      },
      {
        q: 'Are past papers better than a question bank?',
        a: 'They answer different questions. Past papers tell you what the examiners actually ask and how they phrase it; a bank gives you the repetition to make that automatic. If you can only have one, take past papers closer to the exam and the bank earlier.',
      },
      {
        q: 'Do free question banks get you far enough?',
        a: 'A free tier is good for testing whether a bank suits how you think, and for early revision. It typically runs out on explanation depth and on past-paper access — which is where the marks are decided.',
      },
      {
        q: 'Does the mobile app really matter?',
        a: 'For most residents it is the single biggest determinant of how many questions get done, because the study time that exists is fifteen minutes between clinics rather than a clear evening. A web-only bank quietly loses you hours a week.',
      },
    ],
    related: [READS.banksCompared, READS.freeVsPaid, READS.apps],
  },

  'ophthoquestions-vs-ophthamcq': {
    title: 'OphthoQuestions vs OphthaMCQ (2026)',
    description:
      'OphthoQuestions vs OphthaMCQ on exam blueprint, pricing, explanations, past papers and mobile access — including when OphthoQuestions is the better buy.',
    h1: 'OphthoQuestions vs OphthaMCQ',
    intro:
      'OphthoQuestions is the established US leader. OphthaMCQ is the India-focused challenger with handwritten notes and past papers. The right answer depends almost entirely on which exam you are sitting.',
    lede: [
      'These two banks are rarely a genuine head-to-head, because they were written for different examinations. OphthoQuestions is built around the American board and OKAP curriculum. OphthaMCQ is built around ICO/FICO, FAICO, DNB, MS, DO, PDCET and FRCOphth. Almost every meaningful difference between them follows from that one fact.',
      'Blueprint divergence is not cosmetic. It changes which topics get weighted heavily, which drugs and devices appear in stems, and which management pathway counts as the correct answer. A resident preparing for DNB who drills a US bank spends a large share of their time on material their examiner will not ask about — and, worse, learns conventions that are wrong for their setting.',
      'The comparison below is written by one of the two parties, so the fit guide is deliberately explicit about when you should buy the other one.',
    ],
    method: [
      'We compare the two on blueprint fit first, then on the things that change day-to-day study: what the explanations do, whether past papers are included, what the free tier unlocks, and whether revision works on a phone.',
      'Question counts are deliberately left out of the headline comparison. A larger bank aimed at the wrong blueprint is not a better bank for you, and raw totals are the easiest number for either side to present favourably.',
    ],
    competitors: [
      OPHTHAMCQ_ROW,
      { name: 'OphthoQuestions', price: '$314.99/6mo', notes: '❌', pastPapers: '❌', mobile: '⚠️ Web only', freeTrial: 'Limited demo', bestFor: 'Large US question bank' },
    ],
    verdicts: [
      {
        name: 'OphthoQuestions',
        chooseWhen:
          'Your exam is OKAP or an American board examination. It is the deepest, most established bank written against that blueprint, its question volume is genuinely large, and residents in US programmes have been using it long enough that its coverage is well understood.',
        tradeOff:
          'Outside the US it is the wrong shape and an expensive one. Six-month dollar pricing is a serious sum in India, there are no handwritten revision notes, no ICO or DNB past papers, and it is a desktop-first product.',
      },
      {
        name: 'OphthaMCQ',
        chooseWhen:
          'Your exam is ICO/FICO, FAICO, DNB, MS, DO, PDCET or FRCOphth. You get exam-pattern questions for those blueprints, handwritten notes distilled from Kanski, Ryan, Elkington and BCSC, complete ICO/FICO past papers with explanations, and apps on both iOS and Android — priced in rupees.',
        tradeOff:
          'We do not cover the American board blueprint and are not trying to. If OKAP is your exam, this is not the bank for you.',
      },
    ],
    byExam: [
      { exam: 'OKAP / US boards', pick: 'OphthoQuestions', why: 'Written against that curriculum. This is not a close call.' },
      { exam: 'ICO / FICO', pick: 'OphthaMCQ', why: 'Past papers with full explanations; OphthoQuestions does not cover the ICO blueprint.' },
      { exam: 'DNB / MS / DO', pick: 'OphthaMCQ', why: 'Indian exam pattern, practical and viva material, and pricing that fits a resident’s stipend.' },
      { exam: 'FAICO', pick: 'OphthaMCQ', why: 'Syllabus-mapped fellowship questions; not something a US bank attempts.' },
      { exam: 'FRCOphth', pick: 'OphthaMCQ', why: 'Single-best-answer practice plus notes and mobile revision at a fraction of the cost.' },
    ],
    faqs: [
      {
        q: 'Can I use OphthoQuestions for DNB or ICO?',
        a: 'You can, and some residents do for basic sciences, where the physiology and optics overlap is real. But topic weighting, drug availability and management conventions follow US practice, so a large part of the bank is time spent away from your blueprint.',
      },
      {
        q: 'Is OphthoQuestions worth the price from India?',
        a: 'If you are sitting a US examination, yes — there is no equivalent. If you are not, you are paying a US six-month subscription for a curriculum you will not be examined on, and the same money buys several Indian-blueprint banks plus notes.',
      },
      {
        q: 'Which has better explanations?',
        a: 'They are built differently. OphthoQuestions explanations are written to the American board curriculum and reference BCSC conventions. Ours are written to explain the discriminator in the stem for an Indian or international examiner, and are paired with handwritten notes on the same topic.',
      },
      {
        q: 'Does OphthaMCQ have an app?',
        a: 'Yes, on both Android and iOS, with lifetime access to whatever you buy. OphthoQuestions is a web product, which matters if your study time comes in short gaps rather than long evenings.',
      },
      {
        q: 'Can I try either before paying?',
        a: 'OphthaMCQ publishes 200-plus free MCQs with full explanations on this site, no account needed. OphthoQuestions offers a limited demo. Use both before committing — question style is a personal fit as much as a factual one.',
      },
    ],
    related: [READS.ophthoQuestions, READS.banksCompared, READS.freeVsPaid],
  },

  'ophthamcq-vs-prepguidance': {
    title: 'OphthaMCQ vs PrepGuidance (2026)',
    description:
      'OphthaMCQ vs PrepGuidance for DNB, MS and NEET-SS ophthalmology: question bank versus mentored course, on price, format, notes and who each one actually suits.',
    h1: 'OphthaMCQ vs PrepGuidance',
    intro:
      'Both platforms serve Indian PG residents, but they are different products solving different problems — one is a question bank, the other is a taught course.',
    lede: [
      'This comparison is often framed as two question banks, which is the wrong frame. PrepGuidance is built around taught video content and faculty mentorship. OphthaMCQ is built around exam-pattern questions, handwritten notes and past papers. They address different failure modes, and the price gap between them follows directly from that.',
      'The question worth asking is what is actually stopping you. If you understand the material but keep losing marks on exam-pattern questions, more teaching will not fix that and a bank will. If you have never properly understood retina or optics and reading is not landing, a bank will only tell you repeatedly that you are wrong; a taught course will explain why.',
      'Plenty of residents end up using both, in that order — course first for the topics that never made sense, bank throughout for the repetition.',
    ],
    method: [
      'We compare format before features, because that is where the real difference sits: taught video and mentorship on one side, question volume with notes and past papers on the other.',
      'Pricing is quoted as each platform lists it. Course pricing scales with the amount of teaching included, so the top of the PrepGuidance range is not comparable to a bank subscription and should not be read as one.',
    ],
    competitors: [
      OPHTHAMCQ_ROW,
      { name: 'PrepGuidance', price: '₹999–₹8,995', notes: '❌', pastPapers: '✅ DNB solved', mobile: '✅ Android', freeTrial: '❌', bestFor: 'Video + faculty mentorship' },
    ],
    verdicts: [
      {
        name: 'PrepGuidance',
        chooseWhen:
          'Your gap is conceptual rather than one of practice volume. If there are topics you have read three times and still cannot reason through, taught video with faculty contact does something no question bank can, and solved DNB papers are a genuine asset.',
        tradeOff:
          'You pay course pricing — the top of the range is several times what a question bank costs — there is no free tier to test the fit before committing, Android only, and handwritten revision notes are not part of the package.',
      },
      {
        name: 'OphthaMCQ',
        chooseWhen:
          'You broadly understand the material and need exam-pattern repetition, condensed revision notes, and past papers. Also when budget is a real constraint: individual bundles start at ₹249 and there are 200-plus free questions to test the fit first.',
        tradeOff:
          'There is no live faculty and no taught video course. If what you need is someone to explain the topic from first principles, we are the wrong shape for that.',
      },
    ],
    byExam: [
      { exam: 'DNB theory', pick: 'Either', why: 'Bank for question repetition and past patterns; course if specific topics have never landed.' },
      { exam: 'DNB / MS practical', pick: 'OphthaMCQ', why: 'OSCE stations, case presentation formats, instruments and drugs for the viva table.' },
      { exam: 'NEET-SS', pick: 'PrepGuidance', why: 'Superspecialty entrance benefits from structured teaching across a very wide syllabus.' },
      { exam: 'ICO / FICO', pick: 'OphthaMCQ', why: 'Past papers with explanations; not something a DNB-focused course covers.' },
      { exam: 'PDCET', pick: 'OphthaMCQ', why: 'A dedicated bank in the PDCET entrance pattern.' },
    ],
    faqs: [
      {
        q: 'Is a question bank or a video course better for DNB?',
        a: 'They fix different problems. Courses build understanding; banks build exam reflexes and expose the gaps you did not know you had. If you are already reading a standard text competently, the bank is the higher-yield spend.',
      },
      {
        q: 'Can I use both?',
        a: 'Many residents do, and the sequencing that works is course first for topics that never made sense, bank running throughout for repetition and in the final months for pattern recognition.',
      },
      {
        q: 'Which is better value?',
        a: 'They are priced for what they are. A bank is cheaper because it is not paying faculty time. Whether that is better value depends entirely on whether teaching is what you are missing.',
      },
      {
        q: 'Does either cover the practical exam?',
        a: 'OphthaMCQ publishes OSCE stations, case presentation formats, instruments and drugs material for the practical and viva. Check the current course contents on PrepGuidance directly, since course composition changes between cohorts.',
      },
      {
        q: 'Can I try before paying?',
        a: 'OphthaMCQ has 200-plus free MCQs with explanations on this site and no signup requirement. PrepGuidance does not currently list a free tier, so ask about a sample module before committing to a full course.',
      },
    ],
    related: [READS.banksCompared, READS.freeVsPaid, READS.apps],
  },

  'best-app-for-ophthalmology-mcqs': {
    title: 'Best App for Ophthalmology MCQs (2026)',
    description:
      'Compare ophthalmology MCQ apps on platform support, offline revision, explanation depth, past papers and price — and which fits how residents study.',
    h1: 'Best App for Ophthalmology MCQs',
    intro:
      'Residents study on their phones, in the gaps between clinics. Here is how the main ophthalmology MCQ apps compare on the things that decide whether questions actually get done.',
    lede: [
      'The honest reason app quality matters is that it decides how many questions you complete. Residency study time is not a clear evening; it is fifteen minutes between clinics, a slow theatre list, a commute. A bank that only runs in a desktop browser quietly costs you several hours a week, and the loss is invisible because it looks like a scheduling problem rather than a tooling one.',
      'So the comparison below leads with platform support and revision-on-the-move, then covers the things that determine whether those minutes are well spent: explanation depth, whether past papers are included, and what you can do without paying.',
      'One caveat worth stating up front: an app is a delivery mechanism, not a curriculum. A polished app carrying questions written for the wrong exam is still the wrong bank.',
    ],
    method: [
      'Platform support and free tier are verifiable from the app stores and from a free account. "Best for" is our reading of who each product was built to serve, based on the exam blueprint it targets.',
      'We have not scored interface quality, because that is subjective and we publish one of these apps. Install the free tiers and judge that part yourself — it takes twenty minutes and it is the part you will live with.',
    ],
    competitors: [
      { ...OPHTHAMCQ_ROW, bestFor: 'iOS + Android, notes and past papers included' },
      { name: 'OphthoQuestions', price: '$314.99/6mo', notes: '❌', pastPapers: '❌', mobile: '⚠️ Web only', freeTrial: 'Limited demo', bestFor: 'Desktop study, US boards' },
      { name: 'PrepGuidance', price: '₹999–₹8,995', notes: '❌', pastPapers: '✅ DNB solved', mobile: '✅ Android', freeTrial: '❌', bestFor: 'Android users wanting video teaching' },
    ],
    verdicts: [
      {
        name: 'OphthaMCQ',
        chooseWhen:
          'You want the whole stack on a phone: exam-pattern MCQs with explanations, handwritten revision notes and past papers, on both iOS and Android, with lifetime access to what you buy rather than a lapsing subscription.',
        tradeOff:
          'Our question set is written for Indian and international blueprints. For American board preparation you want a US-native bank, app or not.',
      },
      {
        name: 'OphthoQuestions',
        chooseWhen:
          'You are preparing for OKAP or US boards and you study at a desk. The bank is deep and well-matched to that curriculum, and desktop-first is a smaller penalty if your revision happens in long sittings.',
        tradeOff:
          'No native app on either platform, so phone revision means a browser session. Combined with dollar pricing, it is a hard sell for anyone outside the US.',
      },
      {
        name: 'PrepGuidance',
        chooseWhen:
          'You are on Android, preparing for DNB or NEET-SS, and you want taught video alongside questions rather than questions alone.',
        tradeOff:
          'Android only, no free tier to test the fit, no handwritten notes bundled, and course-level pricing at the upper end.',
      },
    ],
    byExam: [
      { exam: 'iPhone user', pick: 'OphthaMCQ', why: 'The only one of the three with a native iOS app.' },
      { exam: 'Android user', pick: 'OphthaMCQ or PrepGuidance', why: 'Both ship Android apps; pick on whether you need questions or teaching.' },
      { exam: 'Desktop-only study', pick: 'Any', why: 'Platform stops being the deciding factor — choose on blueprint fit instead.' },
      { exam: 'ICO / FICO / FAICO', pick: 'OphthaMCQ', why: 'Past papers and syllabus-mapped questions the others do not carry.' },
      { exam: 'OKAP / US boards', pick: 'OphthoQuestions', why: 'Correct blueprint, even though you will be studying in a browser.' },
    ],
    faqs: [
      {
        q: 'Is there a free ophthalmology MCQ app?',
        a: 'OphthaMCQ publishes 200-plus free MCQs with full explanations on this website with no signup, and the app carries a free tier. Most other platforms offer a limited demo rather than a usable free set.',
      },
      {
        q: 'Can I practise offline?',
        a: 'Purchased PDF notes are downloadable and readable offline. Question practice generally expects a connection, so download your notes before a commute or a posting with poor signal.',
      },
      {
        q: 'Do I need an app, or is a website enough?',
        a: 'A website is enough if your study happens in long planned sittings. If it happens in short unplanned gaps — which for most residents it does — an app is what converts those gaps into completed questions.',
      },
      {
        q: 'Does a subscription lapse?',
        a: 'That varies by platform, and it is worth checking before you buy. OphthaMCQ bundles are one-time purchases with lifetime access and updates; several competitors sell time-limited subscriptions.',
      },
      {
        q: 'Which app is best for image-based questions?',
        a: 'Look for banks that publish worked fundus, OCT and field interpretation rather than a single labelled image. Image reasoning is where practical and viva marks are won, and it is the area where banks differ most.',
      },
    ],
    related: [READS.apps, READS.banksCompared, READS.ophthoQuestions],
  },
};

export const COMPARE_SLUGS = Object.keys(COMPARE_PAGES);
export { VERIFY_NOTE };
