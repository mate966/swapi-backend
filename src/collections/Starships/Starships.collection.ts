import { CollectionConfig } from 'payload'

export const StarshipsCollection: CollectionConfig = {
  slug: 'starships',
  admin: {
    useAsTitle: 'name',
    group: 'Compendium',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'model',
      type: 'text',
    },
    {
      name: 'starship_class',
      type: 'text',
    },
    {
      name: 'manufacturer',
      type: 'text',
    },
    {
      name: 'cost_in_credits',
      type: 'text',
    },
    {
      name: 'length',
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
      name: 'hyperdrive_rating',
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
    },
    {
      name: 'pilots',
      type: 'relationship',
      relationTo: 'characters',
      hasMany: true,
    },
    {
      name: 'swapiId',
      type: 'text',
      unique: true,
    },
  ],
}
