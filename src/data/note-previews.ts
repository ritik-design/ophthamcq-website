/**
 * Handwritten Exam Ready Notes PDFs only.
 * Practical / OSCE / Viva PDFs live in practical-pdfs.ts — do not add them here.
 *
 * PDFs: /public/note-pdfs/{productId}.pdf
 * Sync: python3 scripts/sync-note-pdfs.py
 */

export interface NotePreview {
  productId: string;
  sourcePdf: string;
  publicPdf: string;
  previewThroughPage?: number;
  lockedLabel: string;
  lockCopy: string;
}

/** Theory / handwritten exam notes only (NOT practical OSCE resources) */
export const NOTE_PREVIEWS: NotePreview[] = [
  {
    productId: 'retina-deciphered',
    sourcePdf: 'RETINA DECIPHERED .pdf',
    publicPdf: '/note-pdfs/retina-deciphered.pdf',
    previewThroughPage: 6,
    lockedLabel: 'Get Retina Deciphered',
    lockCopy: 'Full handwritten retina notes — lifetime access on the OphthaMCQ store.',
  },
  {
    productId: 'anatomy-notes',
    sourcePdf: 'ANATOMY FINAL PDF 2.pdf',
    publicPdf: '/note-pdfs/anatomy-notes.pdf',
    previewThroughPage: 3,
    lockedLabel: 'Get Anatomy Notes',
    lockCopy: 'Full anatomy of eye handwritten notes on the OphthaMCQ store.',
  },
  {
    productId: 'glaucoma-notes',
    sourcePdf: 'Glau new 2.pdf',
    publicPdf: '/note-pdfs/glaucoma-notes.pdf',
    previewThroughPage: 4,
    lockedLabel: 'Get Glaucoma Notes',
    lockCopy: 'Full glaucoma exam-ready notes on the OphthaMCQ store.',
  },
  {
    productId: 'eyelids-notes',
    sourcePdf: 'Eyelids final-pages.pdf',
    publicPdf: '/note-pdfs/eyelids-notes.pdf',
    previewThroughPage: 2,
    lockedLabel: 'Get Eyelids Notes',
    lockCopy: 'Full eyelids / oculoplastics notes on the OphthaMCQ store.',
  },
];

export function getNotePreview(productId: string): NotePreview | undefined {
  return NOTE_PREVIEWS.find(p => p.productId === productId);
}

export function previewImagePaths(productId: string, pageCount: number): string[] {
  return Array.from({ length: pageCount }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return `/note-previews/${productId}/page-${n}.webp`;
  });
}
