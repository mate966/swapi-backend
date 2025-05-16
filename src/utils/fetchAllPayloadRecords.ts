import axios from 'axios'
import { getAuthToken } from './getAuthToken.js'
import { SECRETS } from '../secrets/index.js'

export async function fetchAllPayloadRecords(collection: string) {
  const token = await getAuthToken(
    SECRETS.PAYLOAD_EMAIL as string,
    SECRETS.PAYLOAD_PASSWORD as string,
  )
  const headers = {
    Authorization: `JWT ${token}`,
  }
  let page = 1
  let hasMore = true
  let allDocs: any[] = []

  while (hasMore) {
    const response = await axios.get(
      `${SECRETS.PAYLOAD_API_URL}/${collection}?limit=100&page=${page}`,
      {
        headers,
      },
    )
    const docs = response.data.docs
    allDocs = allDocs.concat(docs)
    hasMore = response.data.hasNextPage
    page++
  }
  return allDocs
}
