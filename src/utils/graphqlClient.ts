import axios from 'axios'
import { defaultPath } from './path'

const WP_API_URL = process.env.WP_API_URL || defaultPath

const GraphQlClient = async (query, variables = {}) => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const response = await axios.post(WP_API_URL, { query, variables }, { headers })
    
    return response.data.data

  } catch(err) {
    return {}
  }
}

export default GraphQlClient;
