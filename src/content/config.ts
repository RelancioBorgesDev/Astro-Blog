import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      author: z.string(),
      image: image(),
      description: z.string(),
      category: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
};
