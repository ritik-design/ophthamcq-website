/**
 * Generates the default Open Graph card at public/og-image.jpg.
 *
 * Every page in Layout.astro declares `og:image = /og-image.jpg`. That file was
 * missing, so every WhatsApp / Telegram / LinkedIn share rendered a blank card.
 *
 * Run with: node scripts/generate-og-image.mjs
 * Requires python3 with Pillow (already used elsewhere in this repo's tooling).
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const python = `
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
REG  = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"

img = Image.new("RGB", (W, H), "#0c1a2b")
d = ImageDraw.Draw(img)

# Vertical wash from slate-900 into sky-900 so the card reads as one surface.
for y in range(H):
    t = y / H
    r = int(12 + (7 - 12) * t)
    g = int(26 + (63 - 26) * t)
    b = int(43 + (100 - 43) * t)
    d.line([(0, y), (W, y)], fill=(r, g, b))

# Sky-500 accent rule along the top edge.
d.rectangle([0, 0, W, 8], fill="#0ea5e9")

f_brand = ImageFont.truetype(BOLD, 34)
f_head  = ImageFont.truetype(BOLD, 66)
f_sub   = ImageFont.truetype(REG, 30)
f_exam  = ImageFont.truetype(BOLD, 24)

PAD = 80

d.text((PAD, 72), "OPHTHAMCQ", font=f_brand, fill="#38bdf8")

d.text((PAD, 152), "Ophthalmology PG Exam", font=f_head, fill="#ffffff")
d.text((PAD, 228), "Notes & MCQ Question Bank", font=f_head, fill="#ffffff")

d.text((PAD, 336), "20,000+ exam-pattern MCQs and handwritten notes,", font=f_sub, fill="#bae6fd")
d.text((PAD, 378), "written by doctors who passed these exams.", font=f_sub, fill="#bae6fd")

# Exam chips — the terms a resident actually scans for.
x = PAD
y = 470
for label in ["ICO / FICO", "FAICO", "FRCOphth", "DNB / MS / DO", "PDCET"]:
    tw = d.textlength(label, font=f_exam)
    d.rounded_rectangle([x, y, x + tw + 36, y + 52], radius=26,
                        fill="#0b2942", outline="#1e6fa8", width=2)
    d.text((x + 18, y + 13), label, font=f_exam, fill="#7dd3fc")
    x += tw + 52

d.text((PAD, 566), "ophthamcq.org", font=f_sub, fill="#64748b")

img.save("public/og-image.jpg", "JPEG", quality=88, optimize=True)
img.save("public/og-image.png", "PNG", optimize=True)
print("wrote public/og-image.jpg and public/og-image.png")
`;

const res = spawnSync('python3', ['-c', python], { cwd: root, stdio: 'inherit' });
process.exit(res.status ?? 1);
