// @ts-check
import { defineConfig, sessionDrivers } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  // Static marketing site: use a memory session driver so the Cloudflare
  // adapter does not auto-provision a KV namespace we don't need.
  session: {
    driver: sessionDrivers.memory(),
  },
  site: 'https://www.ophthamcq.org',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
