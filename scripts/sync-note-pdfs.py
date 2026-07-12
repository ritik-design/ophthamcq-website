#!/usr/bin/env python3
"""Copy full note PDFs from opthapdfs/ → public/note-pdfs/{productId}.pdf"""

from __future__ import annotations

import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "opthapdfs"
OUT = ROOT / "public" / "note-pdfs"

# Handwritten exam notes only (practical/OSCE PDFs use public/practical-pdfs/)
MAP = {
    "retina-deciphered": "RETINA DECIPHERED .pdf",
    "anatomy-notes": "ANATOMY FINAL PDF 2.pdf",
    "glaucoma-notes": "Glau new 2.pdf",
    "eyelids-notes": "Eyelids final-pages.pdf",
}


def main() -> None:
    if not SRC.is_dir():
        print(f"Missing {SRC}", file=sys.stderr)
        sys.exit(1)
    OUT.mkdir(parents=True, exist_ok=True)
    for product_id, filename in MAP.items():
        src = SRC / filename
        if not src.exists():
            print(f"MISSING: {src}")
            continue
        dest = OUT / f"{product_id}.pdf"
        shutil.copy2(src, dest)
        print(f"  {product_id} → {dest.relative_to(ROOT)} ({dest.stat().st_size / 1024 / 1024:.1f} MB)")
    print("Done.")


if __name__ == "__main__":
    main()
