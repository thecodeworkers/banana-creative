const projects = `
proyectos(first: 10000000) {
    nodes {
      id
      projects {
        title
        description
        outstanding {
          activated
          outstandingImage {
            mediaItemUrl
          }
          outstandingHoverImage {
            mediaItemUrl
          }
          category
          topic
          tools {
            image {
              mediaItemUrl
            }
          }
        }
        portfolioImage {
          mediaItemUrl
        }
        individual {
          secondImageText
          mainImage {
            mediaItemUrl
          }
          secondImage {
            mediaItemUrl
          }
          thirdImage {
            mediaItemUrl
          }
          thirdImageText
          forthImage {
            mediaItemUrl
          }
          lastImage {
            mediaItemUrl
          }
        }
      }
    }
}
`
export default projects