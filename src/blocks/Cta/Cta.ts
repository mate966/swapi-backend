import { LinkField } from '@/fields/Link/Link.field'
import { Block } from 'payload'

export const CtaBlock: Block = {
	slug: 'cta_block',
	interfaceName: 'CtaBlock',
	labels: {
		singular: 'Cta',
		plural: 'Cta',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'copy',
			type: 'text',
			required: true,
		},
		LinkField({}),
	],
}
