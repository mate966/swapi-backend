import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'
import { fetchAllSWAPIItems } from './fetchAllSWAPIItems.js'

interface SWAPIVehicle {
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
		vehicle_class: string
		[key: string]: unknown
	}
}

export async function fetchVehicles() {
	console.log('Importing vehicles...')
	try {
		const vehicles = (await fetchAllSWAPIItems('vehicles')) as unknown as SWAPIVehicle[]
		for (const vehicle of vehicles) {
			await createOrUpdatePayloadData('vehicles', {
				name: vehicle.properties.name,
				model: vehicle.properties.model,
				manufacturer: vehicle.properties.manufacturer,
				cost_in_credits: vehicle.properties.cost_in_credits,
				length: vehicle.properties.length,
				max_atmosphering_speed: vehicle.properties.max_atmosphering_speed,
				crew: vehicle.properties.crew,
				passengers: vehicle.properties.passengers,
				cargo_capacity: vehicle.properties.cargo_capacity,
				consumables: vehicle.properties.consumables,
				vehicle_class: vehicle.properties.vehicle_class,
				swapiId: vehicle.uid,
			})
		}
		console.log('Vehicles import finished!')
		return vehicles
	} catch (error) {
		console.error('Error fetching vehicles:', error)
		throw error
	}
}
