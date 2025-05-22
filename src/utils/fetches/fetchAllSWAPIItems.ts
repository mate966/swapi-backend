import axios from 'axios'
import { SECRETS } from '../../secrets/index.js'

export async function fetchAllSWAPIItems(resource: string) {
	let results: any[] = []
	let nextUrl = `${SECRETS.SWAPI_BASE_URL}/${resource}`
	console.log(`Fetching ${resource} from:`, nextUrl)

	while (nextUrl) {
		const response = await axios.get(nextUrl)
		const data = response.data

		let items: any[] = []
		if (Array.isArray(data.results)) {
			items = data.results
		} else if (Array.isArray(data.result)) {
			items = data.result
		} else if (data.result) {
			items = [data.result]
		}

		console.log(`Received ${items.length} ${resource} from ${nextUrl}`)

		const fullDataPromises = items.map(async (item: any) => {
			if (item.url) {
				const fullDataResponse = await axios.get(item.url)
				return fullDataResponse.data.result
			}
			return item
		})

		const fullData = await Promise.all(fullDataPromises)
		results = results.concat(fullData)

		nextUrl = data.next
	}

	console.log(`Total ${resource} fetched:`, results.length)
	return results
}
