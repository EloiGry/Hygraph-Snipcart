import { gql } from "@apollo/client"

export const GET_BRAND = gql`
query GET_BRAND($slug: String) {
    brand(where: {slug: $slug}) {
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