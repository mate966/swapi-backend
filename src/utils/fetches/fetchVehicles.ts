import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'
import { fetchAllSWAPIItems } from '../fetchAllSWAPIItems.js'

export async function fetchVehicles() {
  console.log('Importing vehicles...')
  try {
    const vehicles = await fetchAllSWAPIItems('vehicles')
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
