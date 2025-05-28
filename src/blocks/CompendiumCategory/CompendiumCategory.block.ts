import { Block } from 'payload'

const collectionSlugs = [
	'characters',
	'planets',
	'starships',
	'vehicles',
	'species',
	'films',
] as const

export const CompendiumCategoryBlock: Block = {
	slug: 'compendium_category_block',
	interfaceName: 'CompendiumCategoryBlock',
	labels: {
		singular: 'Compendium Category',
		plural: 'Compendium Categories',
	},
	fields: [
		{
			name: 'category',
			type: 'select',
			label: 'Category',
			required: true,
			options: collectionSlugs.map((slug) => ({
				label: slug.charAt(0).toUpperCase() + slug.slice(1),
				value: slug,
			})),
		},
	],
}
