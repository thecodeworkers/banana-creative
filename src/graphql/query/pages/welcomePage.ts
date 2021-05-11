
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
      recap{
        title
        link
      }
    }
  }
}
`

export default welcome

