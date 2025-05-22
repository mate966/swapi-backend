import type { CheckboxField, TextField } from 'payload'

import { deepMerge } from 'payload'

import { formatSlugHook } from './Slug.hooks'

type Overrides = {
	checkboxOverrides?: Partial<CheckboxField>
	slugOverrides?: Partial<TextField>
}

type Slug = (fieldToUse?: string, overrides?: Overrides) => [TextField, CheckboxField]

export const SlugField: Slug = (fieldToUse = 'title', overrides = {}) => {
	const { slugOverrides, checkboxOverrides } = overrides

	const checkBoxField: CheckboxField = {
		name: 'slugLock',
		type: 'checkbox',
		defaultValue: true,
		admin: {
			hidden: true,
			position: 'sidebar',
		},
		...checkboxOverrides,
	}

	// Expect ts error here because of typescript mismatching Partial<TextField> with TextField
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const slugField: TextField = {
		name: 'slug',
		type: 'text',
		index: true,
		label: 'Slug',
		unique: true,
		...(slugOverrides || {}),
		hooks: {
			// Kept this in for hook or API based updates
			beforeValidate: [formatSlugHook(fieldToUse)],
		},

		admin: {
			position: 'sidebar',
			description: 'To create a homepage, use the slug "home"',
			...(slugOverrides?.admin || {}),
			components: {
				Field: {
					path: '@/fields/Slug/Slug.component#SlugComponent',
					clientProps: {
						fieldToUse,
						checkboxFieldPath: checkBoxField.name,
					},
				},
			},
		},
	}

	return [slugField, checkBoxField]
}

export const SlugStaticField: (overrides: Partial<TextField>) => TextField = (overrides) => {
	const field: TextField = {
		name: 'slug',
		type: 'text',
		unique: true,
		required: true,
		admin: {
			description: 'To create a homepage, use the slug "home"',
		},
	}

	return deepMerge(field, overrides)
}
