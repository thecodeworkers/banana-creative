import { GraphQlClient, normalized, normalizedArray } from '@utils'
import generalQuery from './generalPage'

const resource = async (language) => {
  const query = `
    query Resources {
      ${generalQuery(language)}
    }
  `

  const data: any = await GraphQlClient(query)
  
  const resources = {
    general: normalized(data?.generalPage?.translation)
  }

  return resources
}

export default resource
