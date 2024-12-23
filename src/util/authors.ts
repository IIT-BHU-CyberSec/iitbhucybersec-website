import { getCollection, type CollectionEntry } from 'astro:content'

export const getAuthorData = async (
  author: string
) => {
  const authors = await getCollection('authors')
  return authors
    .filter(
      (a) => a.id === author
    )[0]
}
