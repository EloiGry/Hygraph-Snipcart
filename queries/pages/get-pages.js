import { gql } from "@apollo/client";

export const GET_PAGES = gql`
query GET_PAGES {
    pages {
      id
      slug
    }
  }
`