import type { Block } from 'payload'
import { Image } from '@/fields/Image/Image.field'

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
		Image({
			name: 'background',
			caption: false,
		}),
	],
}
