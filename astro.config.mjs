import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: 'https://www.lauraricher.co.uk',
  compressHTML: true,
  markdown: {
    shikiConfig: {
      wrap: true,
    },
  },
});
