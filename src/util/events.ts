import { getCollection, type CollectionEntry } from 'astro:content'

export const getEvents = async (
  type?: string,
  status?:string,
) => {
  const events = await getCollection('events')
  return events
  .filter(
    (e) => !type || e.data.type === type
  )
  .filter(
    (e) => !status || e.data.status === status
  )
  .reverse()
}
