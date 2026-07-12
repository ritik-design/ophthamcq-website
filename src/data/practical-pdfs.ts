/**
 * Practical / OSCE / Viva resources for the homepage section.
 * These must NOT appear in Exam Ready Notes (handwritten theory).
 *
 * Files: public/practical-pdfs/
 */

import { COM_BASE, PRODUCTS } from '../config';

export interface PracticalResource {
  id: string;
  title: string;
  description: string;
  /** Thumbnail image path */
  thumb: string;
  /** Full PDF path (optional for image-only cover) */
  pdf?: string;
  /** Kind for UI badge */
  kind: 'pdf' | 'image';
  /** Optional product id from PRODUCTS for price + store href */
  productId?: string;
  /** Fallback store URL if no productId */
  storeHref?: string;
  badge?: string;
}

const byId = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));

export const PRACTICAL_RESOURCES: PracticalResource[] = [
  {
    id: 'osce-cover',
    title: 'OSCE / Practical / Viva Complete Bundle',
    description: 'Complete DNB · MS · DO practical pack — stations, instruments, cases, investigations and viva.',
    thumb: '/practical-pdfs/osce-cover.jpeg',
    kind: 'image',
    storeHref: `${COM_BASE}`,
    badge: 'New Launch',
  },
  {
    id: 'dnb-ms-case-list',
    title: 'DNB / MS Practical Case List',
    description: 'Compiled practical exam case list from previous year experience — made for OphthaMCQ.',
    thumb: '/practical-pdfs/dnb-ms-case-list.webp',
    pdf: '/practical-pdfs/dnb-ms-case-list.pdf',
    kind: 'pdf',
    productId: 'case-presentation-format-notes',
    badge: 'Case list',
  },
  {
    id: 'glaucoma-case-presentation',
    title: 'Glaucoma Clinical Case Presentation Guide',
    description: 'Guidelines for clinical case presentations in glaucoma — history, exam and viva structure.',
    thumb: '/practical-pdfs/glaucoma-case-presentation.webp',
    pdf: '/practical-pdfs/glaucoma-case-presentation.pdf',
    kind: 'pdf',
    productId: 'case-presentation-format-notes',
    badge: 'Cases',
  },
  {
    id: 'instruments-in-ophthalmology',
    title: 'Instruments in Ophthalmology',
    description: 'Identification, parts and clinical use for instruments on the practical exam table.',
    thumb: '/practical-pdfs/instruments-in-ophthalmology.webp',
    pdf: '/practical-pdfs/instruments-in-ophthalmology.pdf',
    kind: 'pdf',
    productId: 'instruments-in-ophthalmology-notes',
    badge: 'Instruments',
  },
  {
    id: 'drugs-final',
    title: 'Ophthalmology Drugs Practical PDF',
    description: 'Practical drugs guide with doses, indications and exam pearls for viva.',
    thumb: '/practical-pdfs/drugs-final.webp',
    pdf: '/practical-pdfs/drugs-final.pdf',
    kind: 'pdf',
    productId: 'ophthalmology-drugs-practical-pdf',
    badge: 'Drugs',
  },
];

export function practicalStoreHref(r: PracticalResource): string {
  if (r.productId && byId[r.productId]?.href) return byId[r.productId].href;
  return r.storeHref ?? COM_BASE;
}

export function practicalProduct(r: PracticalResource) {
  return r.productId ? byId[r.productId] : undefined;
}

/** PDF path for a store product that belongs to the practical pack (not handwritten notes). */
export function getPracticalPdfForProduct(productId: string): PracticalResource | undefined {
  return PRACTICAL_RESOURCES.find(r => r.productId === productId && r.pdf);
}
