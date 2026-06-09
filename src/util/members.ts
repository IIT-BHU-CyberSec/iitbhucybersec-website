import { getCollection } from 'astro:content'

export const getMembers = async () => {
  return await getCollection('members')
}

export const getPrevMembers = async () => {
  return await getCollection('prev_members')
}

export const getMemberById = async (id: string) => {
  const members = await getCollection('members')
  const found = members.find((a) => a.id === id)
  if (found) return found

  const prevMembers = await getCollection('prev_members')
  return prevMembers.find((a) => a.id === id)
}

export const getMemberIds = async () => {
  const members = await getCollection('members')
  const prevMembers = await getCollection('prev_members')
  return [...members, ...prevMembers].map((member) => member.data.id)
}
