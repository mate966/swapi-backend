import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'
import { fetchAllSWAPIItems } from './fetchAllSWAPIItems.js'

interface SWAPIPlanet {
	uid: string
	properties: {
		name: string
		diameter: string
		rotation_period: string
		orbital_period: string
		gravity: string
		population: string
		climate: string
		terrain: string
		surface_water: string
		[key: string]: unknown
	}
}

export async function fetchPlanets() {
	console.log('Importing planets...')
	try {
		const planets = (await fetchAllSWAPIItems('planets')) as unknown as SWAPIPlanet[]
		for (const planet of planets) {
			await createOrUpdatePayloadData('planets', {
				name: planet.properties.name,
				diameter: planet.properties.diameter,
				rotation_period: planet.properties.rotation_period,
				orbital_period: planet.properties.orbital_period,
				gravity: planet.properties.gravity,
				population: planet.properties.population,
				climate: planet.properties.climate,
				terrain: planet.properties.terrain,
				surface_water: planet.properties.surface_water,
				swapiId: planet.uid,
			})
		}
		console.log('Planets import finished!')
		return planets
	} catch (error) {
		console.error('Error fetching planets:', error)
		throw error
	}
}
