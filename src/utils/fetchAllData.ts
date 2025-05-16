import { config } from 'dotenv'

import { fetchFilms } from './fetches/fetchFilms.js'
import { fetchPlanets } from './fetches/fetchPlanets.js'
import { fetchCharacters } from './fetches/fetchCharacters.js'
import { fetchSpecies } from './fetches/fetchSpecies.js'
import { fetchStarships } from './fetches/fetchStarships.js'
import { fetchVehicles } from './fetches/fetchVehicles.js'

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
