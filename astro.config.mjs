import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://infancia-conectada.vercel.app';

export default defineConfig({
  output: 'static',
  site,
});
