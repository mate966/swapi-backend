import { buildSwapiIdToPayloadIdMap } from '../buildSwapiIdToPayloadIdMap.js'
import { fetchAllSWAPIItems } from '../fetches/fetchAllSWAPIItems.js'
import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'

export async function updateStarshipRelations() {
	const filmsMap = await buildSwapiIdToPayloadIdMap('films')
	const pilotsMap = await buildSwapiIdToPayloadIdMap('characters')

	const swapiStarships = await fetchAllSWAPIItems('starships')

	for (const starship of swapiStarships) {
		const swapiId = starship.uid
		const extractId = (url: string) => {
			const match = url.match(/\/(\d+)\/?$/)
			return match ? match[1] : null
		}
		const films = (starship.properties.films || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? filmsMap.get(id) : null))
			.filter(Boolean)
		const pilots = (starship.properties.pilots || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? pilotsMap.get(id) : null))
			.filter(Boolean)

		await createOrUpdatePayloadData('starships', {
			swapiId,
			films,
			pilots,
		})
		console.log(`Zaktualizowano relacje dla statku swapiId=${swapiId}`)
	}
}
