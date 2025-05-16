import { SECRETS } from '../secrets/index.js'
import axios from 'axios'

export async function getAuthToken(email: string, password: string): Promise<string> {
  const response = await axios.post(`${SECRETS.PAYLOAD_API_URL}/users/login`, { email, password })
  return response.data.token
}
