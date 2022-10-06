import { gql } from "@apollo/client"

export const SEARCH = gql`
query SEARCH ($_search : String) {
    products(where: {OR: {_search: $_search}}) {
        name
        price
        slug
        id
        description {
          html
        }
        image
    }
    categories(where: {OR: {_search: $_search}}) {
        id
        name
        slug
    }
    brands(where: {OR: {_search: $_search}}) {
        id
        name
        slug
    }
}`

