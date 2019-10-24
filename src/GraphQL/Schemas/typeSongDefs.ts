import { gql } from 'apollo-server-koa'

export const typeSongDefs = gql`
    type Song {
        id: ID!
        name: String!
        duration: Int!
        artist: [ArtistInfo]
        album: AlbumInfo
        copyright: Boolean!
        publishTime: Date!
    }
`
