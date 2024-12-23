import config from '@/theme.config'
import { glob, file } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().default(config.author),
      description: z.string(),
      publishedDate: z.date(),
      draft: z.boolean().optional().default(false),
      canonicalURL: z.string().optional(),
      openGraphImage: image().or(z.string()).optional(),
      tags: z.array(z.string()).default([]),
      showToC: z.boolean().optional().default(true),
      previewImage: image().or(z.string()).optional()
    })
})

const projects = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './content/projects'
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string().optional(),
      startDate: z.date(),
      endDate: z.date().optional().nullable(),
      tags: z.array(z.string()).default([]),
      previewImage: image().or(z.string()).optional()
    })
})

const members = defineCollection({
  loader: file("./content/members.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    bio: z.string(),
    description: z.string().optional(),
    socials: z.record(z.string(), z.string().url()).optional(),
  }),
})

const achievements = defineCollection({
  loader: file("./content/achievements.json"),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    position: z.number(),
    link: z.string().url(),
    date: z.string().date(),
    ctf_points: z.number(),
    rating_points: z.number(),
  }),
})

export const collections = { posts, projects, members, achievements }
