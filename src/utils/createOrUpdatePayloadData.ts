import axios from 'axios'
import { getAuthToken } from './getAuthToken.js'
import { SECRETS } from '../secrets/index.js'

export async function createOrUpdatePayloadData(collection: string, data: Record<string, unknown>) {
	console.log(`Creating/updating ${collection} with data:`, data)
	const token = await getAuthToken(
		SECRETS.PAYLOAD_EMAIL as string,
		SECRETS.PAYLOAD_PASSWORD as string,
	)
	const headers = {
		Authorization: `JWT ${token}`,
	}

	try {
		const existingResponse = await axios.get(
			`${SECRETS.PAYLOAD_API_URL}/${collection}?where[swapiId][equals]=${data.swapiId}`,
			{ headers },
		)

		if (existingResponse.data.docs.length > 0) {
			const existingId = existingResponse.data.docs[0].id
			console.log(`Updating existing ${collection} with id:`, existingId)
			const response = await axios.patch(
				`${SECRETS.PAYLOAD_API_URL}/${collection}/${existingId}`,
				data,
				{
					headers,
				},
			)
			console.log(`Successfully updated ${collection}`)
			return response.data
		} else {
			console.log(`Creating new ${collection}`)
			const response = await axios.post(`${SECRETS.PAYLOAD_API_URL}/${collection}`, data, {
				headers,
			})
			console.log(`Successfully created ${collection}`)
			return response.data
		}
	} catch (error) {
		console.error(`Error creating/updating ${collection}:`, error)
		throw error
	}
}
