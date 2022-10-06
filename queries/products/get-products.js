import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query GET_PRODUCTS {
    products {
      name
      price
      slug
      image
      id
      description {
        html
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


  