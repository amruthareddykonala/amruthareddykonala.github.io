import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Keep in sync with SITE.url in src/data/site.ts
export default defineConfig({
  site: 'https://amruthareddykonala.github.io',
  trailingSlash: 'ignore',
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
