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

export const getMemberIds = async () => {
  const members = await getMembers()
  return members.map((member) => member.data.id)
}
