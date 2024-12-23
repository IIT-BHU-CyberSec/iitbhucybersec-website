import { getCollection, type CollectionEntry } from 'astro:content'

export const getMembers = async (
  member?: string
) => {
  const members = await getCollection('members')
  if(typeof(member) !== 'undefined') {
    return members
      .filter(
        (a) => a.id === member
      )[0]
  }
  return members
}
