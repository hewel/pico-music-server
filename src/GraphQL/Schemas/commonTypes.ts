import { gql } from 'apollo-server-koa'

export const commonTypes = gql`
    scalar Date

    type PageInfo {
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        endCursor: String
    }
    input Filter {
        after: String
        first: Int
        before: String
        last: Int
    }
    input SearchFilter {
        keywords: String!
        type: String
        first: Int
        offset: Int
    }
`
