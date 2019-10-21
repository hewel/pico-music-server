import { gql } from 'apollo-server-koa'

export const TypeSongInfo = gql`
    type SongInfo {
        songId: ID!
        songName: String!
        duration: Int!
        artist: [ArtistInfo]
        album: AlbumInfo
        copyright: Boolean!
        publishTime: Int!
    }
    type Query {
        songDetail(songId: ID!): SongInfo
    }
`
