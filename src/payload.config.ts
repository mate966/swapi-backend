// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { UsersCollection } from './collections/Users/Users.collection'
import { MediaCollection } from './collections/Media/Media.collection'
import { FilmsCollection } from './collections/Films/Films.collection'
import { CharactersCollection } from './collections/Characters/Characters.collection'
import { PlanetsCollection } from './collections/Planets/Planets.collection'
import { SpeciesCollection } from './collections/Species/Species.collection'
import { StarshipsCollection } from './collections/Starships/Starships.collection'
import { VehiclesCollection } from './collections/Vehicles/Vehicles.collection'
import { PagesCollection } from './collections/Pages/Pages.collection'

import { HeaderGlobal } from './globals/Header/Header.global'
import { FooterGlobal } from './globals/Footer/Footer.global'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
	admin: {
		user: UsersCollection.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	cors: [
		'http://localhost:5173',
		'http://localhost:5174',
		'http://192.168.55.106:5174',
		'http://192.168.55.106:5173',
		'http://localhost:3000',
		'http://172.20.10.12:5173',
		'https://swapi-phi-eight.vercel.app',
	],
	globals: [HeaderGlobal, FooterGlobal],
	collections: [
		UsersCollection,
		MediaCollection,
		FilmsCollection,
		CharactersCollection,
		PlanetsCollection,
		SpeciesCollection,
		StarshipsCollection,
		VehiclesCollection,
		PagesCollection,
	],
	graphQL: {
		schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
	},
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || '',
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || '',
	}),
	sharp,
	plugins: [
		payloadCloudPlugin(),
		// storage-adapter-placeholder
	],
})
