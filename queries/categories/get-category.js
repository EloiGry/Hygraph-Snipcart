import { gql } from "@apollo/client"

export const GET_CATEGORY = gql`
query GET_CATEGORY($slug: String) {
    category(where: {slug: $slug}) {
        name
        slug
        products {
          image
          slug
          name
          price
          id
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


  