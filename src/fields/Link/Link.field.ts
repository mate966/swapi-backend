import type { Field } from 'payload'

import deepMerge from '@/utils/deepMerge'
import { LinkType } from './link.types'

export const LinkField: LinkType = ({ disableLabel = false, overrides = {} } = {}) => {
	const linkResult: Field = {
		name: 'link',
		type: 'group',
		admin: {
			hideGutter: true,
		},
		fields: [
			{
				type: 'row',
				fields: [
					{
						name: 'type',
						type: 'radio',
						admin: {
							layout: 'horizontal',
							width: '50%',
						},
						defaultValue: 'reference',
						options: [
							{
								label: 'Internal link',
								value: 'reference',
							},
							{
								label: 'Custom URL',
								value: 'custom',
							},
						],
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
		],
	}

	const linkTypes: Field[] = [
		{
			name: 'reference',
			type: 'relationship',
			admin: {
				condition: (_, siblingData) => siblingData?.type === 'reference',
			},
			label: 'Document to link to',
			relationTo: ['pages'],
			required: true,
		},
		{
			name: 'scroll_to_id',
			type: 'text',
			admin: {
				condition: (_, siblingData) => siblingData?.type === 'reference',
			},
			label: 'Scroll to ID',
			required: false,
		},
		{
			name: 'url',
			type: 'text',
			admin: {
				condition: (_, siblingData) => siblingData?.type === 'custom',
			},
			label: 'Custom URL',
			required: true,
		},
	]

	if (!disableLabel) {
		linkTypes.map((linkType) => ({
			...linkType,
			admin: {
				...linkType.admin,
				width: '50%',
			},
		}))

		linkResult.fields.push({
			type: 'row',
			fields: [
				...linkTypes,
				{
					name: 'label',
					type: 'text',
					admin: {
						width: '50%',
					},
					label: 'Label',
					required: true,
				},
			],
		})
	} else {
		linkResult.fields = [...linkResult.fields, ...linkTypes]
	}

	return deepMerge(linkResult, overrides)
}
