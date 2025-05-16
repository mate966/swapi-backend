import { fetchAllPayloadRecords } from './fetchAllPayloadRecords.js'

export async function buildSwapiIdToPayloadIdMap(collection: string) {
  const records = await fetchAllPayloadRecords(collection)
  const map = new Map()
  for (const rec of records) {
    if (rec.swapiId && rec.id) {
      map.set(rec.swapiId.toString(), rec.id)
    }
  }
  return map
}
