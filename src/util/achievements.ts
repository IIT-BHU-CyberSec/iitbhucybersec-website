import { getCollection, type CollectionEntry } from 'astro:content'

export const sortAchievements = (
  a1: CollectionEntry<'achievements'>,
  a2: CollectionEntry<'achievements'>
) => {
  const date1 = new Date(a1.data.date)
  const date2 = new Date(a2.data.date)
  return date2.getTime() - date1.getTime()
}

export const getAchievements = async (
) => {
  const achievements = await getCollection('achievements')
  achievements.sort(sortAchievements)
  return achievements
}
