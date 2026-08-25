import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

/**
 * Astro emits a few content-layer internals next to the built pages. They are
 * not needed by a static site, and this output directory is served directly by
 * Next.js from `public/`, so anything left here is publicly reachable.
 */
const outDir = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../../web/public/blog',
);

const strays = [
  'content-assets.mjs',
  'content-modules.mjs',
  'collections',
  '.gitkeep',
];

await Promise.all(
  strays.map((name) =>
    rm(resolve(outDir, name), { recursive: true, force: true }),
  ),
);

console.log(`[prune] removed build internals from ${outDir}`);
