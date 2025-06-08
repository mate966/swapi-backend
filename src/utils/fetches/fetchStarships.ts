import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'
import { fetchAllSWAPIItems } from './fetchAllSWAPIItems.js'

interface SWAPIStarship {
	uid: string
	properties: {
		name: string
		model: string
		manufacturer: string
		cost_in_credits: string
		length: string
		max_atmosphering_speed: string
		crew: string
		passengers: string
		cargo_capacity: string
		consumables: string
		hyperdrive_rating: string
		MGLT: string
		starship_class: string
		[key: string]: unknown
	}
}

export async function fetchStarships() {
	console.log('Importing starships...')
	try {
		const starships = (await fetchAllSWAPIItems('starships')) as unknown as SWAPIStarship[]
		for (const starship of starships) {
			await createOrUpdatePayloadData('starships', {
				name: starship.properties.name,
				model: starship.properties.model,
				manufacturer: starship.properties.manufacturer,
				cost_in_credits: starship.properties.cost_in_credits,
				length: starship.properties.length,
				max_atmosphering_speed: starship.properties.max_atmosphering_speed,
				crew: starship.properties.crew,
				passengers: starship.properties.passengers,
				cargo_capacity: starship.properties.cargo_capacity,
				consumables: starship.properties.consumables,
				hyperdrive_rating: starship.properties.hyperdrive_rating,
				MGLT: starship.properties.MGLT,
				starship_class: starship.properties.starship_class,
				swapiId: starship.uid,
			})
		}
		console.log('Starships import finished!')
		return starships
	} catch (error) {
		console.error('Error fetching starships:', error)
		throw error
	}
}
