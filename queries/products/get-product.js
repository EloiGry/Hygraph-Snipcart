import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
query GET_PRODUCT ($slug : String) {
    product(where: {slug: $slug}) {
      description {
        html
        text
      }
      image
      name
      price
      slug
      id
      navigation {
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
              image
              id
              link {
                label
                href
              }
            }
          }
        }
      }
    }
  }
`