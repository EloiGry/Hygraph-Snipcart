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
            slug
          }
          categories {
            name
            id
            slug
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