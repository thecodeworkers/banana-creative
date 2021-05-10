import { GraphQlClient, normalizedArray } from '@utils'
import projectsQuery from './projects'

const resource = async () => {

  const query = `
    query Resources {
      ${projectsQuery}
    }
  `
  const data: any = await GraphQlClient(query)

  const resources = {
    projects: normalizedArray(data?.projects?.nodes),
  }
  
  return resources
}

export default resource
