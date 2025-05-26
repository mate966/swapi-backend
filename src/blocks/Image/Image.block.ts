import { Block } from 'payload'

export const ImageBlock: Block = {
	slug: 'image_block',
	interfaceName: 'ImageBlock',
	labels: {
		singular: 'Image',
		plural: 'Images',
	},
	fields: [
		{
			name: 'imageDesktop',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'imageMobile',
			type: 'upload',
			relationTo: 'media',
		},
		{
			name: 'caption',
			type: 'text',
		},
	],
}
