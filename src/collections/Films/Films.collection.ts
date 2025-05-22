import type { CollectionConfig } from 'payload'

export const FilmsCollection: CollectionConfig = {
  slug: 'films',
  admin: {
    useAsTitle: 'title',
    group: 'Compendium',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'episodeID',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'opening_crawl',
      type: 'textarea',
    },
    {
      name: 'director',
      type: 'text',
    },
    {
      name: 'producer',
      type: 'text',
    },
    {
      name: 'release_date',
      type: 'text',
    },
    {
      name: 'species',
      type: 'relationship',
      relationTo: 'species',
      hasMany: true,
      index: true,
    },
    {
      name: 'starships',
      type: 'relationship',
      relationTo: 'starships',
      hasMany: true,
      index: true,
    },
    {
      name: 'vehicles',
      type: 'relationship',
      relationTo: 'vehicles',
      hasMany: true,
      index: true,
    },
    {
      name: 'characters',
      type: 'relationship',
      relationTo: 'characters',
      hasMany: true,
      index: true,
    },
    {
      name: 'planets',
      type: 'relationship',
      relationTo: 'planets',
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
