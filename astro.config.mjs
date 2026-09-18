import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://www.cuidadodigital.social';

export default defineConfig({
  output: 'static',
  site,
});
