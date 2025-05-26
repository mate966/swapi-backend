import type { CollectionConfig } from 'payload'
import { generateWebp } from '@/hooks/generateWebp'
import { addWebpUrl } from '@/hooks/addWebpUrl'

export const MediaCollection: CollectionConfig = {
	slug: 'media',
	access: {
		read: () => true,
	},
	upload: {
		staticDir: 'media',
		adminThumbnail: 'thumbnail',
		mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
	},
	hooks: {
		afterChange: [
			async (args) => {
				return generateWebp(args)
			},
		],
		afterRead: [addWebpUrl],
	},
	fields: [
		{
			name: 'alt',
			type: 'text',
			required: true,
		},
		{
			name: 'webpUrl',
			type: 'text',
			admin: {
				readOnly: true,
			},
		},
	],
}
