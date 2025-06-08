import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'
import { fetchAllSWAPIItems } from './fetchAllSWAPIItems.js'

interface SWAPICharacter {
	uid: string
	properties: {
		name: string
		height: string
		mass: string
		hair_color: string
		skin_color: string
		eye_color: string
		birth_year: string
		gender: string
		[key: string]: unknown
	}
}

export async function fetchCharacters() {
	console.log('Importing characters...')
	try {
		const characters = (await fetchAllSWAPIItems('people')) as unknown as SWAPICharacter[]
		for (const character of characters) {
			await createOrUpdatePayloadData('characters', {
				name: character.properties.name,
				height: character.properties.height,
				mass: character.properties.mass,
				hair_color: character.properties.hair_color,
				skin_color: character.properties.skin_color,
				eye_color: character.properties.eye_color,
				birth_year: character.properties.birth_year,
				gender: character.properties.gender,
				swapiId: character.uid,
			})
		}
		console.log('Characters import finished!')
		return characters
	} catch (error) {
		console.error('Error fetching characters:', error)
		throw error
	}
}
