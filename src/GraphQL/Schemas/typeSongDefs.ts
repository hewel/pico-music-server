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
        url: String!
        bitRate: Int
        fileSize: Int
        md5: String
        type: String
        level: String
    }
    type SongUrl {
        id: ID!
        url: String!
        bitRate: Int
        fileSize: Int
        md5: String
        type: String
        level: String
    }
`
