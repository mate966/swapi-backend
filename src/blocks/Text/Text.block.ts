import type { Block } from 'payload'

import {
	AlignFeature,
	BoldFeature,
	HeadingFeature,
	ItalicFeature,
	lexicalEditor,
	OrderedListFeature,
	ParagraphFeature,
	UnderlineFeature,
	UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

export const TextBlock: Block = {
	slug: 'text_block',
	interfaceName: 'TextBlock',
	imageAltText: 'Text Block',
	labels: {
		singular: 'Text',
		plural: 'Text',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			label: 'Section Title',
			required: true,
		},
		{
			name: 'updated_date',
			type: 'text',
			label: 'Last updated date',
			admin: {
				description:
					'This date will be displayed on the website under the section title to show when the content was last updated.',
			},
		},
		{
			name: 'text',
			type: 'richText',
			label: 'Text',
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [
						...rootFeatures,
						AlignFeature(),
						ParagraphFeature(),
						UnderlineFeature(),
						BoldFeature(),
						ItalicFeature(),
						OrderedListFeature(),
						UnorderedListFeature(),
						HeadingFeature({ enabledHeadingSizes: ['h5'] }),
					]
				},
			}),
			required: true,
		},
	],
}
