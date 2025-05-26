import type { CollectionAfterChangeHook } from 'payload'
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

export const generateWebp: CollectionAfterChangeHook = async ({ doc, req }) => {
	if (!doc.filename || !doc.mimeType?.startsWith('image/')) {
		return doc
	}

	const filePath = path.join(process.cwd(), 'media', doc.filename)
	const webpPath = filePath.replace(/\.[^/.]+$/, '.webp')

	try {
		if (!fs.existsSync(filePath)) {
			return doc
		}

		if (fs.existsSync(webpPath)) {
			const webpFilename = path.basename(webpPath)
			doc.webpUrl = `/api/media/file/${webpFilename}`
			return doc
		}

		const sharpInstance = sharp(filePath)

		await sharpInstance.webp({ quality: 80 }).toFile(webpPath)

		const webpFilename = path.basename(webpPath)
		doc.webpUrl = `/api/media/file/${webpFilename}`
	} catch (error) {
		console.error('Error generating WebP:', error)
		if (error instanceof Error) {
			console.error('Error details:', {
				message: error.message,
				stack: error.stack,
			})
		}
	}

	return doc
}
