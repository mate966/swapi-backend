import { Field } from 'payload'
import { LinkField } from '../Link/Link.field'

export const SocialField = (): Field => ({
	name: 'social',
	type: 'array',
	label: 'Social',
	fields: [
		LinkField(),
		{
			name: 'icon',
			type: 'text',
			label: 'Icon',
			required: true,
		},
	],
})
