import { gql } from "@apollo/client"

export const GET_BRANDS = gql`
query GET_BRANDS {
    brands {
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
            slug
          }
          categories {
            name
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