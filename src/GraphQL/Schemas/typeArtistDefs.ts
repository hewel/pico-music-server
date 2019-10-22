import { gql } from 'apollo-server-koa'

export const typeArtistDefs = gql`
    type ArtistInfo {
        id: ID!
        name: String!
        tns: [String]!
        alias: [String]
    }
`
