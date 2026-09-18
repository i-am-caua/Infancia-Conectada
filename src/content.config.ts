import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artigos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    author: z.string(),
    readingMinutes: z.number().int().positive(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    cover: z
      .object({
        src: z.string(),
        socialImage: z.string().optional(),
        alt: z.string(),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
        caption: z.string().optional(),
      })
      .optional(),
    video: z
      .object({
        provider: z.literal('youtube'),
        // Sem ID, o artigo mostra o aviso de vídeo em breve.
        id: z.string().regex(/^[A-Za-z0-9_-]{11}$/).optional(),
        title: z.string(),
        format: z.enum(['standard', 'shorts']).default('standard'),
      })
      .optional(),
    sources: z.array(
      z.object({
        title: z.string(),
        url: z.url(),
        accessedAt: z.string(),
      }),
    ),
  }),
});

export const collections = { artigos };
