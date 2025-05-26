import { Block } from 'payload'

export const QuoteBlock: Block = {
	slug: 'quote_block',
	interfaceName: 'QuoteBlock',
	labels: {
		singular: 'Quote',
		plural: 'Quotes',
	},
	fields: [
		{
			name: 'quote',
			type: 'text',
			required: true,
		},
		{
			name: 'author',
			type: 'text',
			required: true,
		},
	],
}
