import { Image } from '@/fields/Image/Image.field'
import { Block } from 'payload'

export const GalleryBlock: Block = {
	slug: 'gallery_block',
	interfaceName: 'GalleryBlock',
	labels: {
		singular: 'Gallery',
		plural: 'Galleries',
	},
	fields: [
		{
			name: 'images',
			type: 'array',
			label: 'Images',
			fields: [Image({ name: 'image', caption: false })],
		},
	],
}
