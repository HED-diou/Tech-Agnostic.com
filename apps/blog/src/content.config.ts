import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Astro 7 deprecates re-exporting `z`; import zod directly.
import { z } from 'zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** `// LABEL` shown above the title. Keep it to one or two words. */
    topic: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Tech-Agnostic'),
    readingTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
