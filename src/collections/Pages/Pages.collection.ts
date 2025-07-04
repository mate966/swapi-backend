import type { Block, CollectionConfig, Field } from 'payload'

import { anyone } from '@/access/anyone'
import { SlugStaticField } from '@/fields/Slug/Slug.field'

import { HeroBlock } from '@/blocks/Hero/Hero.block'
import { AboutBlock } from '@/blocks/About/About.block'
import { TextBlock } from '@/blocks/Text/Text.block'
import { CtaBlock } from '@/blocks/Cta/Cta.block'
import { QuoteBlock } from '@/blocks/Quote/Quote.block'
import { ImageBlock } from '@/blocks/Image/Image.block'
import { FeaturedBlock } from '@/blocks/Featured/Featured.block'
import { CompendiumCategoryBlock } from '@/blocks/CompendiumCategory/CompendiumCategory.block'
import { GalleryBlock } from '@/blocks/Gallery/Gallery.block'
import { ContactFormBlock } from '@/blocks/ContactForm/ContactForm.block'

type PageContentType = (options?: { blocks?: [Block, ...Block[]] }) => Field

export const PageContent: PageContentType = ({ blocks } = {}) => {
	const field: Field = {
		type: 'tabs',
		tabs: [
			{
				label: 'Content',
				fields: [
					{
						name: 'content',
						type: 'blocks',
						label: '',
						labels: {
							singular: 'Content',
							plural: 'Content',
						},
						blocks: blocks || [],
						required: false,
						admin: {
							initCollapsed: false,
						},
					},
				],
			},
		],
	}

	return field
}

export const PagesCollection: CollectionConfig = {
	slug: 'pages',
	labels: {
		singular: 'Page',
		plural: 'Pages',
	},
	access: {
		read: anyone,
	},
	admin: {
		defaultColumns: ['title', 'slug', 'updatedAt'],
		useAsTitle: 'title',
		group: 'Pages',
	},
	defaultPopulate: {
		title: true,
		slug: true,
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'seo',
			type: 'group',
			label: 'SEO',
			fields: [
				{
					name: 'metaTitle',
					type: 'text',
					label: 'Meta Title',
				},
				{
					name: 'metaDescription',
					type: 'textarea',
					label: 'Meta Description',
				},
			],
		},
		SlugStaticField({}),
		PageContent({
			blocks: [
				HeroBlock,
				TextBlock,
				CtaBlock,
				QuoteBlock,
				ImageBlock,
				AboutBlock,
				FeaturedBlock,
				CompendiumCategoryBlock,
				GalleryBlock,
				ContactFormBlock,
			],
		}),
	],
}
