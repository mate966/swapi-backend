import { createOrUpdatePayloadData } from '../createOrUpdatePayloadData.js'
import { fetchAllSWAPIItems } from './fetchAllSWAPIItems.js'

interface SWAPIFilm {
	uid: string
	properties: {
		title: string
		episode_id: number
		opening_crawl: string
		director: string
		producer: string
		release_date: string
		[key: string]: unknown
	}
}

export async function fetchFilms() {
	console.log('Importing films...')
	try {
		const films = (await fetchAllSWAPIItems('films')) as unknown as SWAPIFilm[]
		for (const film of films) {
			await createOrUpdatePayloadData('films', {
				title: film.properties.title,
				episodeID: film.properties.episode_id.toString(),
				opening_crawl: film.properties.opening_crawl,
				director: film.properties.director,
				producer: film.properties.producer,
				release_date: film.properties.release_date,
				swapiId: film.uid,
			})
		}
		console.log('Films import finished!')
		return films
	} catch (error) {
		console.error('Error fetching films:', error)
		throw error
	}
}
