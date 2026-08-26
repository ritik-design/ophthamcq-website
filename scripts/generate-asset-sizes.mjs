/**
 * Scans public/ for raster images and writes their intrinsic dimensions to
 * src/data/asset-sizes.json.
 *
 * This runs in Node at build time (see the "prebuild" npm script). The lookup
 * itself has to stay dependency-free because the Cloudflare adapter evaluates
 * page modules in workerd, where node:fs does not exist.
 *
 * Run: node scripts/generate-asset-sizes.mjs
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, extname } from 'node:path';

const PUBLIC = 'public';
const OUT = 'src/data/asset-sizes.json';
const RASTER = new Set(['.png', '.jpg', '.jpeg', '.webp']);

function parsePng(buf) {
  // 8-byte signature, then IHDR: length(4) type(4) width(4) height(4)
  if (buf.readUInt32BE(12) !== 0x49484452) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function parseJpeg(buf) {
  let offset = 2; // skip SOI
  while (offset < buf.length) {
    if (buf[offset] !== 0xff) return null;
    const marker = buf[offset + 1];
    // SOF0-SOF15, excluding DHT (c4), JPGA (c8) and DAC (cc)
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }
    offset += 2 + buf.readUInt16BE(offset + 2);
  }
  return null;
}

function parseWebp(buf) {
  const format = buf.toString('ascii', 12, 16);

  if (format === 'VP8 ') {
    // Lossy: 3-byte frame tag, 3-byte sync code, then 14-bit dimensions.
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }

  if (format === 'VP8L') {
    // Lossless: 1-byte signature then 14 bits width, 14 bits height.
    const bits = buf.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }

  if (format === 'VP8X') {
    // Extended: 24-bit canvas dimensions minus one.
    const width = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16));
    const height = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16));
    return { width, height };
  }

  return null;
}

function measure(file) {
  const buf = readFileSync(file);
  if (buf[0] === 0x89 && buf.toString('latin1', 1, 4) === 'PNG') return parsePng(buf);
  if (buf[0] === 0xff && buf[1] === 0xd8) return parseJpeg(buf);
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    return parseWebp(buf);
  }
  return null;
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (RASTER.has(extname(entry).toLowerCase())) out.push(path);
  }
  return out;
}

const sizes = {};
let skipped = 0;
for (const file of walk(PUBLIC).sort()) {
  const size = measure(file);
  if (!size) {
    skipped++;
    continue;
  }
  sizes['/' + relative(PUBLIC, file).split(/[\\/]/).join('/')] = [size.width, size.height];
}

writeFileSync(OUT, JSON.stringify(sizes, null, 0) + '\n');
console.log(`[asset-sizes] measured ${Object.keys(sizes).length} images${skipped ? `, skipped ${skipped}` : ''}`);
