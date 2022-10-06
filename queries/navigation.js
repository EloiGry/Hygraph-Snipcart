import { gql } from "@apollo/client"

export const NAVIGATION = gql`
query nav {
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