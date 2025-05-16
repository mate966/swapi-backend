import { buildSwapiIdToPayloadIdMap } from '../buildSwapiIdToPayloadIdMap.js'
import { fetchAllSWAPIItems } from '../fetchAllSWAPIItems.js'
import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'

export async function updatePlanetRelations() {
  const filmsMap = await buildSwapiIdToPayloadIdMap('films')
  const residentsMap = await buildSwapiIdToPayloadIdMap('characters')

  const swapiPlanets = await fetchAllSWAPIItems('planets')

  for (const planet of swapiPlanets) {
    const swapiId = planet.uid
    const extractId = (url: string) => {
      const match = url.match(/\/(\d+)\/?$/)
      return match ? match[1] : null
    }
    const films = (planet.properties.films || [])
      .map((url: string) => extractId(url))
      .map((id: string | null) => (id ? filmsMap.get(id) : null))
      .filter(Boolean)
    const residents = (planet.properties.residents || [])
      .map((url: string) => extractId(url))
      .map((id: string | null) => (id ? residentsMap.get(id) : null))
      .filter(Boolean)

    await createOrUpdatePayloadData('planets', {
      swapiId,
      films,
      residents,
    })
    console.log(`Zaktualizowano relacje dla planety swapiId=${swapiId}`)
  }
}
