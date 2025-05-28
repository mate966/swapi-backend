import { LinkField } from '@/fields/Link/Link.field'
import { RelationshipField } from '@/fields/Relationship/Relationship'
import { Block } from 'payload'
import type { Where } from 'payload'

const collectionSlugs = [
	'characters',
	'planets',
	'starships',
	'vehicles',
	'species',
	'films',
] as const

export const FeaturedBlock: Block = {
	slug: 'featured_block',
	interfaceName: 'FeaturedBlock',
	labels: {
		singular: 'Featured',
		plural: 'Featured',
	},

	fields: [
		{
			name: 'title',
			type: 'text',
			label: 'Title',
			required: true,
		},
		{
			name: 'linkedItem',
			type: 'group',
			fields: [
				{
					name: 'category',
					type: 'select',
					label: 'Category',
					required: true,
					options: [
						{ label: 'Characters', value: 'characters' },
						{ label: 'Planets', value: 'planets' },
						{ label: 'Starships', value: 'starships' },
						{ label: 'Vehicles', value: 'vehicles' },
						{ label: 'Species', value: 'species' },
						{ label: 'Films', value: 'films' },
					],
				},
				...collectionSlugs.map((slug) => RelationshipField({ slug: slug })),
			],
		},
		LinkField(),
	],
}
