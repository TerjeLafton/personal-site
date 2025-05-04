import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

const devlog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/devlog" }),
  schema: z.object({
    title: z.string(),
    date: z.string().date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, devlog };
