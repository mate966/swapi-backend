import { CollectionConfig } from 'payload'

export const Species: CollectionConfig = {
  slug: 'species',
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
      name: 'classification',
      type: 'text',
    },
    {
      name: 'designation',
      type: 'text',
    },
    {
      name: 'average_height',
      type: 'text',
    },
    {
      name: 'average_lifespan',
      type: 'text',
    },
    {
      name: 'eye_colors',
      type: 'text',
    },
    {
      name: 'hair_colors',
      type: 'text',
    },
    {
      name: 'skin_colors',
      type: 'text',
    },
    {
      name: 'language',
      type: 'text',
    },
    {
      name: 'homeworld',
      type: 'relationship',
      relationTo: 'planets',
      index: true,
    },
    {
      name: 'people',
      type: 'relationship',
      relationTo: 'characters',
      hasMany: true,
      index: true,
    },
    {
      name: 'films',
      type: 'relationship',
      relationTo: 'films',
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
