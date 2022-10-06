import { gql } from "@apollo/client"

export const GET_CATEGORIES = gql`
query GET_CATEGORIES {
    categories {
        name
      	slug
        products {
          image
          name
          slug
          id
          price
          description {
            text
          }
        }
      }
      navigations {
        navBar {
          brands {
            name
            id
          }
          categories {
            name
            id
          }
          images {
            ... on NavImage {
              id
              image
              link {
                id
                label
                href
              }
            }
          }
        }
      }
    }
`