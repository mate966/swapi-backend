import { buildSwapiIdToPayloadIdMap } from '../buildSwapiIdToPayloadIdMap.js'
import { fetchAllSWAPIItems } from '../fetches/fetchAllSWAPIItems.js'
import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'

export async function updateVehicleRelations() {
	const filmsMap = await buildSwapiIdToPayloadIdMap('films')
	const pilotsMap = await buildSwapiIdToPayloadIdMap('characters')

	const swapiVehicles = await fetchAllSWAPIItems('vehicles')

	for (const vehicle of swapiVehicles) {
		const swapiId = vehicle.uid
		const extractId = (url: string) => {
			const match = url.match(/\/(\d+)\/?$/)
			return match ? match[1] : null
		}
		const films = (vehicle.properties.films || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? filmsMap.get(id) : null))
			.filter(Boolean)
		const pilots = (vehicle.properties.pilots || [])
			.map((url: string) => extractId(url))
			.map((id: string | null) => (id ? pilotsMap.get(id) : null))
			.filter(Boolean)

		await createOrUpdatePayloadData('vehicles', {
			swapiId,
			films,
			pilots,
		})
		console.log(`Zaktualizowano relacje dla pojazdu swapiId=${swapiId}`)
	}
}
