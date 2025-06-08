import type { Field } from 'payload'

export const Image = ({ name, caption }: { name: string; caption: boolean }): Field => ({
	name,
	type: 'group',
	fields: [
		{
			name: 'imageDesktop',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'imageMobile',
			type: 'upload',
			relationTo: 'media',
		},
		{
			name: 'caption',
			type: 'text',
			admin: {
				condition: () => caption,
			},
		},
	],
})
