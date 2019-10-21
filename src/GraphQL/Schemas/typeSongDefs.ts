import { gql } from 'apollo-server-koa'

export const typeSongDefs = gql`
    type Song {
        songId: ID!
        songName: String!
        duration: Int!
        artist: [ArtistInfo]
        album: AlbumInfo
        copyright: Boolean!
        publishTime: Int!
    }
    type Query {
        song(songId: ID!): Song
    }
`
