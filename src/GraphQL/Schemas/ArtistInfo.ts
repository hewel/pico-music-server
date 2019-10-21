import { gql } from 'apollo-server-koa'

export const TypeArtistInfo = gql`
    type ArtistInfo {
        artistId: ID!
        artistName: String!
        tns: [String]
        alias: [String]
    }
`
