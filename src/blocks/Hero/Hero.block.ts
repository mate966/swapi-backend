import { Block } from 'payload'

export const HeroBlock: Block = {
	slug: 'hero_block',
	interfaceName: 'HeroBlock',
	labels: {
		singular: 'Hero',
		plural: 'Hero',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
		},
		{
			name: 'description',
			type: 'text',
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
		},
	],
}
