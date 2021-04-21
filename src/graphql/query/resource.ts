import { GraphQlClient, normalized } from '@utils'
import homePageQuery from './homePage'
import generalPageQuery from './generalPage'

const resource = async (resource: any, lang) => {

  const resources = {
    'homePage': homePageQuery(lang),
    'generalPage': generalPageQuery(lang),
  }

  const query = `
    query Resources {
      ${resources[resource]}
    }
  `
  
  const result: any = await GraphQlClient(query)
  return 'nodes' in result[resource] ? normalized(result[resource].nodes) : normalized(result[resource])
}

export default resource
