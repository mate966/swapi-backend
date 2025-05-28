import type { CollectionConfig } from 'payload'

export const CharactersCollection: CollectionConfig = {
	slug: 'characters',
	admin: {
		useAsTitle: 'name',
		group: 'Compendium',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
			index: true,
		},
		{
			name: 'birth_year',
			type: 'text',
		},
		{
			name: 'eye_color',
			type: 'text',
		},
		{
			name: 'gender',
			type: 'text',
		},
		{
			name: 'hair_color',
			type: 'text',
		},
		{
			name: 'height',
			type: 'text',
		},
		{
			name: 'mass',
			type: 'text',
		},
		{
			name: 'skin_color',
			type: 'text',
		},
		{
			name: 'homeworld',
			type: 'relationship',
			relationTo: 'planets',
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
			name: 'swapiId',
			type: 'text',
			unique: true,
			index: true,
		},
	],
}
