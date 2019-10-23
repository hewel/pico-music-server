import { gql } from 'apollo-server-koa'

export const commonTypes = gql`
    scalar Date

    interface ListFilter {
        after: String
        first: Int
        before: String
        last: Int
    }

    type PageInfo {
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        endCursor: String
    }
`
