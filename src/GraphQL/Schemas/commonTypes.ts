import { gql } from 'apollo-server-koa'

export const commonTypes = gql`
    scalar Date
    type PageInfo {
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        endCursor: String
    }
`
