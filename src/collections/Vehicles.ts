import { CollectionConfig } from 'payload'

export const Vehicles: CollectionConfig = {
  slug: 'vehicles',
  admin: {
    useAsTitle: 'name',
    group: 'Compendium',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'model',
      type: 'text',
    },
    {
      name: 'vehicle_class',
      type: 'text',
    },
    {
      name: 'manufacturer',
      type: 'text',
    },
    {
      name: 'length',
      type: 'text',
    },
    {
      name: 'cost_in_credits',
      type: 'text',
    },
    {
      name: 'crew',
      type: 'text',
    },
    {
      name: 'passengers',
      type: 'text',
    },
    {
      name: 'max_atmosphering_speed',
      type: 'text',
    },
    {
      name: 'cargo_capacity',
      type: 'text',
    },
    {
      name: 'consumables',
      type: 'text',
    },
    {
      name: 'films',
      type: 'relationship',
      relationTo: 'films',
      hasMany: true,
      index: true,
    },
    {
      name: 'pilots',
      type: 'relationship',
      relationTo: 'characters',
      hasMany: true,
      index: true,
    },
    {
      name: 'swapiId',
      type: 'text',
      unique: true,
      index: true,
    },
  ],
}
