#!/usr/bin/env python3
"""
Generate free preview images (cover → index) from opthapdfs/*.pdf.

Writes WebP pages to public/note-previews/{productId}/page-NN.webp
Never copies full PDFs into public/.

Requires: poppler-utils (pdftoppm), Pillow
Usage: python3 scripts/generate-note-previews.py
"""

from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Install Pillow: pip install Pillow", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "opthapdfs"
OUT = ROOT / "public" / "note-previews"

# product_id -> (source pdf filename, last free page inclusive)
MAP: dict[str, tuple[str, int]] = {
    "retina-deciphered": ("RETINA DECIPHERED .pdf", 6),
    "anatomy-notes": ("ANATOMY FINAL PDF 2.pdf", 3),
    "glaucoma-notes": ("Glau new 2.pdf", 4),
    "eyelids-notes": ("Eyelids final-pages.pdf", 2),
    "ophthalmology-drugs-practical-pdf": ("Drugs final.pdf", 2),
    "instruments-in-ophthalmology-notes": ("Instruments in ophthalmology .pdf", 3),
    "read-ophthalmology-reports-tests": ("Investigations_Imaging_Final.pdf", 1),
    "case-presentation-format-notes": ("DNB ms case list .pdf", 1),
}

MAX_WIDTH = 900
DPI = 140
WEBP_QUALITY = 78


def main() -> None:
    if not SRC.is_dir():
        print(f"Missing source folder: {SRC}", file=sys.stderr)
        sys.exit(1)

    OUT.mkdir(parents=True, exist_ok=True)

    for product_id, (pdf_name, last_page) in MAP.items():
        pdf = SRC / pdf_name
        if not pdf.exists():
            print(f"MISSING PDF: {pdf}")
            continue

        dest = OUT / product_id
        if dest.exists():
            shutil.rmtree(dest)
        dest.mkdir(parents=True)

        tmp = Path("/tmp") / f"ophtha-preview-{product_id}"
        if tmp.exists():
            shutil.rmtree(tmp)
        tmp.mkdir()

        prefix = tmp / "page"
        subprocess.check_call(
            [
                "pdftoppm",
                "-png",
                "-r",
                str(DPI),
                "-f",
                "1",
                "-l",
                str(last_page),
                str(pdf),
                str(prefix),
            ]
        )

        pages = sorted(tmp.glob("page*.png"))
        for i, page_path in enumerate(pages, 1):
            out_path = dest / f"page-{i:02d}.webp"
            im = Image.open(page_path).convert("RGB")
            if im.width > MAX_WIDTH:
                h = int(im.height * MAX_WIDTH / im.width)
                im = im.resize((MAX_WIDTH, h), Image.Resampling.LANCZOS)
            im.save(out_path, "WEBP", quality=WEBP_QUALITY, method=6)
            print(f"  {product_id} page {i} → {out_path.relative_to(ROOT)}")

        shutil.rmtree(tmp)

    print("Done. Full PDFs were not copied to public/.")


if __name__ == "__main__":
    main()
