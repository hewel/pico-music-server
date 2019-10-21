import { gql } from 'apollo-server-koa'

export const typeArtistDefs = gql`
    type ArtistInfo {
        artistId: ID!
        artistName: String!
        tns: [String]
        alias: [String]
    }
`
