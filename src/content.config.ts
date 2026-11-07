import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faq = z.object({ q: z.string(), a: z.string() });

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    order: z.number(),
    cardTitle: z.string(),
    summary: z.string(),
    metric: z.string(),
    metricLabel: z.string(),
    industry: z.array(z.string()),
    capability: z.array(z.string()),
    logo: z.string().optional(),
    logoAlt: z.string().optional(),
    glance: z.array(z.object({ label: z.string(), value: z.string() })),
    quote: z.object({ text: z.string(), attribution: z.string() }).optional(),
    ctaHeadline: z.string(),
    ctaSecondary: z.object({ label: z.string(), href: z.string() }).optional(),
    published: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    order: z.number(),
    subhead: z.string(),
    serviceType: z.string(),
    price: z.number().optional(),
    faqs: z.array(faq).default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
  }).passthrough(),
});

export const collections = { work, services, pages };
