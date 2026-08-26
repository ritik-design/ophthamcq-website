/**
 * Intrinsic dimensions for anything in public/, so every <img> can declare
 * width and height and stop contributing to layout shift.
 *
 * Sizes are measured at build time by scripts/generate-asset-sizes.mjs (wired
 * into the "prebuild" npm script). The lookup itself must stay dependency-free:
 * the Cloudflare adapter evaluates page modules in workerd, where node:fs does
 * not exist, so reading the file here would break the build.
 */
import SIZES from '../data/asset-sizes.json';

/**
 * @param {string | undefined} publicPath site-absolute path, e.g. "/logo.png"
 * @returns {{width: number, height: number} | undefined}
 */
export function imageSize(publicPath) {
  if (!publicPath) return undefined;
  const entry = SIZES[publicPath];
  return entry ? { width: entry[0], height: entry[1] } : undefined;
}
