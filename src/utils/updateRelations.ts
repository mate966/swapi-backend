import { updateCharacterRelations } from './relations/characterRelations.js'
import { updateFilmRelations } from './relations/filmRelations.js'
import { updatePlanetRelations } from './relations/planetRelations.js'
import { updateVehicleRelations } from './relations/vehicleRelations.js'
import { updateStarshipRelations } from './relations/starshipRelations.js'
import { updateSpeciesRelations } from './relations/speciesRelations.js'

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
