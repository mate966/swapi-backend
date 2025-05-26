import { Block } from 'payload'
import { Image } from '@/fields/Image/Image.field'
import { LinkField } from '@/fields/Link/Link.field'
import {
	AlignFeature,
	ParagraphFeature,
	UnderlineFeature,
	BoldFeature,
	ItalicFeature,
	HeadingFeature,
	OrderedListFeature,
	UnorderedListFeature,
	lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const AboutBlock: Block = {
	slug: 'about_block',
	interfaceName: 'AboutBlock',
	labels: {
		singular: 'About',
		plural: 'About',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
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
		Image({
			name: 'image',
			caption: true,
		}),
		LinkField({}),
	],
}
