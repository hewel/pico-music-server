import { gql } from 'apollo-server-koa'

export const TypeAlbumInfo = gql`
    type AlbumInfo {
        albumId: ID!
        albumName: String!
        albumPicUrl: String
    }
`
