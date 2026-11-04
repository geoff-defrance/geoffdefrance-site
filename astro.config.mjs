import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://geoffdefrance.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
