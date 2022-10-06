import { gql } from "@apollo/client"

export const GET_STORES = gql`
query PageStores {
  stores {
    address
    id
    name
    phone
    location {
      latitude
      longitude
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
}`