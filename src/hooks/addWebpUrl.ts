import type { CollectionAfterReadHook } from 'payload'
import path from 'path'
import fs from 'fs'

export const addWebpUrl: CollectionAfterReadHook = async ({ doc }) => {
	if (!doc.filename || !doc.mimeType?.startsWith('image/')) {
		return doc
	}

	const webpFilename = doc.filename.replace(/\.[^/.]+$/, '.webp')
	const webpPath = path.join(process.cwd(), 'media', webpFilename)

	if (fs.existsSync(webpPath)) {
		doc.webpUrl = `/api/media/file/${webpFilename}`
	} else {
		console.log('WebP file does not exist, skipping URL addition')
	}

	return doc
}
