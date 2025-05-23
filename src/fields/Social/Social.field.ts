import { Field } from 'payload'
import { LinkField } from '../Link/Link.field'

export const SocialField = (): Field => ({
	name: 'social',
	type: 'array',
	label: 'Social',
	fields: [
		LinkField({
			overrides: {
				fields: [
					{
						name: 'url',
						type: 'text',
						label: 'Custom URL',
						required: true,
					},
					{
						name: 'newTab',
						type: 'checkbox',
						admin: {
							style: {
								alignSelf: 'flex-end',
							},
							width: '50%',
						},
						label: 'Open in new tab',
					},
				],
			},
		}),
		{
			name: 'icon',
			type: 'select',
			label: 'Icon',
			options: [
				{
					label: 'Facebook',
					value: 'facebook',
				},
				{
					label: 'LinkedIn',
					value: 'linkedin',
				},
				{
					label: 'Github',
					value: 'github',
				},
			],
		},
	],
	admin: {
		initCollapsed: true,
		components: {
			RowLabel: '@/ui/RowLabel/RowLabel',
		},
	},
})
