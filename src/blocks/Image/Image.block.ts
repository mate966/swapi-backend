import { Image } from '@/fields/Image/Image.field'
import { Block } from 'payload'

export const ImageBlock: Block = {
	slug: 'image_block',
	interfaceName: 'ImageBlock',
	labels: {
		singular: 'Image',
		plural: 'Images',
	},
	fields: [Image({ name: 'image', caption: false })],
}
