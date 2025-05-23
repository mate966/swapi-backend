import { LinkField } from '@/fields/Link/Link.field'
import { Field } from 'payload'

export const NavigationField = (): Field => ({
	name: 'navigation',
	type: 'group',
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
							RowLabel: '@/ui/RowLabel/RowLabel',
						},
					},
				},
			],
		},
	],
})
