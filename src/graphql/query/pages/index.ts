import { GraphQlClient, normalized } from '@utils'
import welcomePageQuery from './welcomePage'
import aboutPageQuery from './aboutPage'

const pages = async (resource: any, language) => {

  const resources = {
    'welcomePage': welcomePageQuery(language),
    'aboutPage': aboutPageQuery(language)
  }

  const query = `
    query Page {
      ${resources[resource]}
    }
  `
  const result: any = await GraphQlClient(query)

  const data = ('translation' in result[resource]) ? result[resource].translation : result[resource]

  return (result) ? 'nodes' in result[resource] ? normalized(result[resource].nodes) : normalized(data) : {}
}

export default pages
