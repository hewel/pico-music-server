import { gql } from 'apollo-server-koa'

export const typeAlbumDefs = gql`
    type AlbumInfo {
        albumId: ID!
        albumName: String!
        albumPicUrl: String
    }
`
