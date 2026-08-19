// @ts-check
import { defineConfig, sessionDrivers } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { copyFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import stripEditorialSections from './src/utils/remark-strip-editorial.js';
import indexNow from './src/integrations/indexnow.js';

/**
 * @astrojs/sitemap writes sitemap-index.xml + sitemap-0.xml.
 * Search tools and crawlers expect /sitemap.xml, so alias the index there.
 * @returns {import('astro').AstroIntegration}
 */
function sitemapXmlAlias() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const dest = join(outDir, 'sitemap.xml');
        // Prefer the urlset chunk so /sitemap.xml lists pages directly.
        // Fall back to the index if only that exists.
        const candidates = ['sitemap-0.xml', 'sitemap-index.xml'];

        for (const name of candidates) {
          const source = join(outDir, name);
          try {
            await access(source);
            await copyFile(source, dest);
            logger.info(`Created sitemap.xml from ${name}`);
            return;
          } catch {
            // try next candidate
          }
        }

        logger.warn('Could not create sitemap.xml alias (no sitemap files found)');
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  // Static marketing site: use a memory session driver so the Cloudflare
  // adapter does not auto-provision a KV namespace we don't need.
  session: {
    driver: sessionDrivers.memory(),
  },
  // Canonical host is apex (www redirects to non-www in production).
  site: 'https://ophthamcq.org',
  integrations: [sitemap(), sitemapXmlAlias(), indexNow()],
  markdown: {
    remarkPlugins: [stripEditorialSections],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
