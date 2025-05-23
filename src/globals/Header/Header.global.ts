import type { GlobalConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { NavigationField } from '@/fields/Navigation/Navigation.field'

export const HeaderGlobal: GlobalConfig = {
	slug: 'header',
	access: {
		read: anyone,
	},
	admin: {
		group: 'Globals',
	},
	fields: [
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
					RowLabel: '@/ui/RowLabel/RowLabel',
				},
			},
		},
	],
}
