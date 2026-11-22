import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://getfoundwithaltura.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
