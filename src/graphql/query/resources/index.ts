import { GraphQlClient, normalizedArray } from '@utils'

const resource = async () => {

  const query = `
    query Resources {
    }
  `
  const data: any = await GraphQlClient(query)

  const resources = {}
  
  return resources
}

export default resource
