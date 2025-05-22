import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'
import { buildSwapiIdToPayloadIdMap } from '../buildSwapiIdToPayloadIdMap.js'
import { fetchAllSWAPIItems } from '../fetches/fetchAllSWAPIItems.js'

export async function updateCharacterRelations() {
	const filmsMap = await buildSwapiIdToPayloadIdMap('films')
	const planetsMap = await buildSwapiIdToPayloadIdMap('planets')
	const vehiclesMap = await buildSwapiIdToPayloadIdMap('vehicles')
	const starshipsMap = await buildSwapiIdToPayloadIdMap('starships')
	const speciesMap = await buildSwapiIdToPayloadIdMap('species')

	const swapiCharacters = await fetchAllSWAPIItems('people')

	for (const character of swapiCharacters) {
		const swapiId = character.uid
		const extractId = (url: string) => {
			const match = url.match(/\/(\d+)\/?$/)
			return match ? match[1] : null
		}
		const films = (character.properties.films || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? filmsMap.get(id) : null))
			.filter(Boolean)
		const homeworld = planetsMap.get(extractId(character.properties.homeworld)) || null
		const vehicles = (character.properties.vehicles || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? vehiclesMap.get(id) : null))
			.filter(Boolean)
		const starships = (character.properties.starships || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? starshipsMap.get(id) : null))
			.filter(Boolean)
		const species = (character.properties.species || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? speciesMap.get(id) : null))
			.filter(Boolean)

		await createOrUpdatePayloadData('characters', {
			swapiId,
			films,
			homeworld,
			vehicles,
			starships,
			species,
		})
		console.log(`Zaktualizowano relacje dla postaci swapiId=${swapiId}`)
	}
}
