import type { GlobalConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { NavigationField } from '@/fields/Navigation/Navigation.field'
import { SocialField } from '@/fields/Social/Social.field'

export const FooterGlobal: GlobalConfig = {
	slug: 'footer',
	access: {
		read: anyone,
	},
	admin: {
		group: 'Globals',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			label: 'Title',
			required: true,
		},
		{
			name: 'copy',
			type: 'text',
			label: 'Copy',
			required: true,
		},
		{
			name: 'copyright',
			type: 'text',
			label: 'Copyright',
			required: true,
		},
		{
			name: 'nav',
			type: 'array',
			required: true,
			label: 'Navigation',
			labels: {
				singular: 'Link',
				plural: 'Links',
			},
			fields: [NavigationField()],
			minRows: 1,
			maxRows: 10,
			admin: {
				initCollapsed: true,
				components: {
					RowLabel: '@/globals/Header/ui/RowLabel#RowLabel',
				},
			},
		},
		{
			name: 'socials',
			type: 'array',
			label: 'Socials',
			fields: [SocialField()],
		},
	],
}
