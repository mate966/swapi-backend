import type { GlobalConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { LinkField } from '@/fields/Link/Link.field'

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
			fields: [
				LinkField(),
				{
					type: 'collapsible',
					label: 'Nested navigation',
					admin: {
						initCollapsed: true,
					},
					fields: [
						{
							name: 'subnav',
							type: 'array',
							label: '',
							labels: {
								singular: 'Link',
								plural: 'Links',
							},
							fields: [LinkField()],
							admin: {
								components: {
									RowLabel: '@/globals/Header/ui/RowLabel#RowLabel',
								},
							},
						},
					],
				},
			],
			minRows: 1,
			maxRows: 10,
			admin: {
				initCollapsed: true,
				components: {
					RowLabel: '@/globals/Header/ui/RowLabel#RowLabel',
				},
			},
		},
	],
}
