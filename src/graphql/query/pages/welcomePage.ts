
import { welcomeId } from '@utils/pageIds'

const welcome = (language) => `
welcomePage: page(id: "${welcomeId}") {
  translation(language: ${language}) {
    id
    title
    welcome {
      title
      subtitle
      secondSubtitle
      content
      moreInfo
      year
    }
  }
}
`

export default welcome

