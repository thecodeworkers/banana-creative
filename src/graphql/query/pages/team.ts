
const team = (language) => `
    bananas {
  
      edges {
        node {
          title
          team {
            colors
            categories
            position
            order
            name
            image {
              id
              slug
              mediaItemUrl
            }
          }
        }
      }

  } 
`

export default team

