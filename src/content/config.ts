import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const sparkles = defineCollection({
  type: 'content',
  schema: z.object({
    url: z.string().url(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    description: z.string().default(''),
  }),
});

export const collections = { blog, sparkles };
