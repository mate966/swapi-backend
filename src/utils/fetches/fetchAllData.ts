import { config } from 'dotenv'

import { fetchFilms } from './fetchFilms.js'
import { fetchPlanets } from './fetchPlanets.js'
import { fetchCharacters } from './fetchCharacters.js'
import { fetchSpecies } from './fetchSpecies.js'
import { fetchStarships } from './fetchStarships.js'
import { fetchVehicles } from './fetchVehicles.js'

config()

async function fetchAllData() {
	try {
		console.log('Starting full SWAPI import...')

		const [films, planets, characters, species, starships, vehicles] = await Promise.all([
			fetchFilms(),
			fetchPlanets(),
			fetchCharacters(),
			fetchSpecies(),
			fetchStarships(),
			fetchVehicles(),
		])

		console.log('Full SWAPI import finished!')
	} catch (error) {
		console.error('Error during full import:', error)
		process.exit(1)
	}
}

fetchAllData()
