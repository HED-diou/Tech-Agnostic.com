// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.PUBLIC_SITE_URL ?? 'https://tech-agnostic.com';

/**
 * The blog is a static Astro site mounted at /blog on the same origin as the
 * Next.js marketing site. It compiles straight into the Next app's `public`
 * directory, so a single deployment serves both.
 *
 * `apps/web/next.config.mjs` adds the two rewrites that map `/blog` and
 * `/blog/<slug>` onto the generated `index.html` files.
 */
export default defineConfig({
  site: SITE,
  base: '/blog',
  trailingSlash: 'ignore',
  outDir: '../web/public/blog',
  build: {
    format: 'directory',
    assets: '_astro',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
