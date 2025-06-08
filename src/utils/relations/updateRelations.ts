import { updateCharacterRelations } from './characterRelations.js'
import { updateFilmRelations } from './filmRelations.js'
import { updatePlanetRelations } from './planetRelations.js'
import { updateVehicleRelations } from './vehicleRelations.js'
import { updateStarshipRelations } from './starshipRelations.js'
import { updateSpeciesRelations } from './speciesRelations.js'

async function updateAllRelations() {
	await updateCharacterRelations()
	await updateFilmRelations()
	await updatePlanetRelations()
	await updateVehicleRelations()
	await updateStarshipRelations()
	await updateSpeciesRelations()
}

updateAllRelations()
	.then(() => {
		console.log('Aktualizacja wszystkich relacji zakończona!')
		process.exit(0)
	})
	.catch((err) => {
		console.error('Błąd podczas aktualizacji relacji:', err)
		process.exit(1)
	})
