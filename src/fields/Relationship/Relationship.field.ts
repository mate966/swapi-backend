import { CollectionSlug, Field } from 'payload'
import { RelationshipFieldProps } from './relationship.types'

export const RelationshipField = ({ slug }: RelationshipFieldProps): Field => ({
	name: `item_${slug}`,
	label: slug.charAt(0).toUpperCase() + slug.slice(1),
	type: 'relationship',
	relationTo: slug as CollectionSlug,
	hasMany: true,
	required: true,
	validate: (val: any) => {
		if (!val || val.length < 3) return 'Choose at least 3 items'
		if (val.length > 6) return 'You can choose a maximum of 6 items'
		return true
	},
	admin: {
		condition: (_: unknown, data: any) => data?.category === slug,
	},
})
