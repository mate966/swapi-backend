import { CollectionConfig } from 'payload'

export const PlanetsCollection: CollectionConfig = {
	slug: 'planets',
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
			name: 'diameter',
			type: 'text',
		},
		{
			name: 'rotation_period',
			type: 'text',
		},
		{
			name: 'orbital_period',
			type: 'text',
		},
		{
			name: 'gravity',
			type: 'text',
		},
		{
			name: 'population',
			type: 'text',
		},
		{
			name: 'climate',
			type: 'text',
		},
		{
			name: 'terrain',
			type: 'text',
		},
		{
			name: 'surface_water',
			type: 'text',
		},
		{
			name: 'residents',
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
