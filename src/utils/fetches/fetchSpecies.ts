import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'
import { fetchAllSWAPIItems } from './fetchAllSWAPIItems.js'

export async function fetchSpecies() {
	console.log('Importing species...')
	try {
		const species = await fetchAllSWAPIItems('species')
		for (const specie of species) {
			await createOrUpdatePayloadData('species', {
				name: specie.properties.name,
				classification: specie.properties.classification,
				designation: specie.properties.designation,
				average_height: specie.properties.average_height,
				skin_colors: specie.properties.skin_colors,
				hair_colors: specie.properties.hair_colors,
				eye_colors: specie.properties.eye_colors,
				average_lifespan: specie.properties.average_lifespan,
				language: specie.properties.language,
				swapiId: specie.uid,
			})
		}
		console.log('Species import finished!')
		return species
	} catch (error) {
		console.error('Error fetching species:', error)
		throw error
	}
}
