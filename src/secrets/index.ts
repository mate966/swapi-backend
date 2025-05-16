import { config } from 'dotenv'

config()

export const SECRETS = {
  PAYLOAD_API_URL: process.env.PAYLOAD_API_URL,
  PAYLOAD_EMAIL: process.env.PAYLOAD_EMAIL,
  PAYLOAD_PASSWORD: process.env.PAYLOAD_PASSWORD,
  SWAPI_BASE_URL: process.env.SWAPI_BASE_URL,
}
