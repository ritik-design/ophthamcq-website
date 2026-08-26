/**
 * Downloads the product cover images that were hot-linked from
 * appx-content-v2.classx.co.in, converts them to WebP and writes them to
 * public/product-images/.
 *
 * The originals are unoptimised PNG/JPEG — one is 2 MB — served from a
 * third-party host that sits inside our largest contentful paint. Serving them
 * from our own origin also means Cloudflare caches them and the intrinsic size
 * is known at build time.
 *
 * Run: node scripts/localise-product-images.mjs
 */
import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync } from 'node:fs';

mkdirSync('public/product-images', { recursive: true });

// Every distinct remote asset, keyed by the basename we want locally.
const SOURCES = JSON.parse(readFileSync('scripts/product-image-sources.json', 'utf8'));

const python = `
import json, io, sys, urllib.request
from PIL import Image

sources = json.loads(sys.argv[1])
MAX_W = 900
out = {}

for name, url in sources.items():
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    raw = urllib.request.urlopen(req, timeout=60).read()
    im = Image.open(io.BytesIO(raw))
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGB")
    if im.width > MAX_W:
        im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)
    path = f"public/product-images/{name}.webp"
    im.save(path, "WEBP", quality=82, method=6)
    out[name] = {"width": im.width, "height": im.height}
    print(f"  {name:38} {im.width}x{im.height}  {len(raw)//1024}KB -> {len(open(path,'rb').read())//1024}KB")

with open("src/data/product-image-sizes.json", "w") as f:
    json.dump(out, f, indent=2, sort_keys=True)
print(f"\\nwrote {len(out)} images + src/data/product-image-sizes.json")
`;

const res = spawnSync('python3', ['-c', python, JSON.stringify(SOURCES)], { stdio: 'inherit' });
process.exit(res.status ?? 1);
