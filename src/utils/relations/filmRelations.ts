import { buildSwapiIdToPayloadIdMap } from '../buildSwapiIdToPayloadIdMap.js'
import { fetchAllSWAPIItems } from '../fetches/fetchAllSWAPIItems.js'
import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'

export async function updateFilmRelations() {
	const charactersMap = await buildSwapiIdToPayloadIdMap('characters')
	const planetsMap = await buildSwapiIdToPayloadIdMap('planets')
	const speciesMap = await buildSwapiIdToPayloadIdMap('species')
	const starshipsMap = await buildSwapiIdToPayloadIdMap('starships')
	const vehiclesMap = await buildSwapiIdToPayloadIdMap('vehicles')

	const swapiFilms = await fetchAllSWAPIItems('films')

	for (const film of swapiFilms) {
		const swapiId = film.uid
		const extractId = (url: string) => {
			const match = url.match(/\/(\d+)\/?$/)
			return match ? match[1] : null
		}
		const characters = (film.properties.characters || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? charactersMap.get(id) : null))
			.filter(Boolean)
		const planets = (film.properties.planets || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? planetsMap.get(id) : null))
			.filter(Boolean)
		const species = (film.properties.species || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? speciesMap.get(id) : null))
			.filter(Boolean)
		const starships = (film.properties.starships || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? starshipsMap.get(id) : null))
			.filter(Boolean)
		const vehicles = (film.properties.vehicles || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? vehiclesMap.get(id) : null))
			.filter(Boolean)

		await createOrUpdatePayloadData('films', {
			swapiId,
			characters,
			planets,
			species,
			starships,
			vehicles,
		})
		console.log(`Zaktualizowano relacje dla filmu swapiId=${swapiId}`)
	}
}
