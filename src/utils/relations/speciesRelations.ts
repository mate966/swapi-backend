import { buildSwapiIdToPayloadIdMap } from '../buildSwapiIdToPayloadIdMap.js'
import { fetchAllSWAPIItems } from '../fetches/fetchAllSWAPIItems.js'
import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'

export async function updateSpeciesRelations() {
	const filmsMap = await buildSwapiIdToPayloadIdMap('films')
	const peopleMap = await buildSwapiIdToPayloadIdMap('characters')
	const homeworldMap = await buildSwapiIdToPayloadIdMap('planets')

	const swapiSpecies = await fetchAllSWAPIItems('species')

	for (const specie of swapiSpecies) {
		const swapiId = specie.uid
		const extractId = (url: string) => {
			const match = url.match(/\/(\d+)\/?$/)
			return match ? match[1] : null
		}
		const films = (specie.properties.films || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? filmsMap.get(id) : null))
			.filter(Boolean)
		const people = (specie.properties.people || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? peopleMap.get(id) : null))
			.filter(Boolean)
		const homeworld = homeworldMap.get(extractId(specie.properties.homeworld)) || null

		await createOrUpdatePayloadData('species', {
			swapiId,
			films,
			people,
			homeworld,
		})
		console.log(`Zaktualizowano relacje dla gatunku swapiId=${swapiId}`)
	}
}
