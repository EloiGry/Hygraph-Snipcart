import { gql } from "@apollo/client";

export const GET_PAGE_BY_SLUG = gql`
query GET_PAGE_BY_SLUG ($slug: String) {
  page(where: {slug: $slug}) {
    name
    heroText
    heroLink
    heroTitle
    heroBackground
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
  products {
    name
    price
    slug
    id
    description {
      html
    }
    image
  }
}
`



export const GET_HOME_PAGE = gql`
query GET_HOME_PAGE($slug: String) {
  page(where: {slug: $slug}) {
    name
    heroText
    heroLink
    heroTitle
    heroBackground
    navigation {
      navBar {
        brands {
          name
          id
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
  products {
    name
    price
    slug
    id
    description {
      html
    }
    image
  }
}
`