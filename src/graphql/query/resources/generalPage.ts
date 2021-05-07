import { generalId } from '@utils/pageIds'
const general = (language) => `
generalPage: page(id: "${generalId}") {
    translation(language: ${language}) {
      generals {
        address
        email
        insta
        phoneOne
        phoneTwo
        navigations {
          route
          order
        }
      }
    }
}
`

export default general;