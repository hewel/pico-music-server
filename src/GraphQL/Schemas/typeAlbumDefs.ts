import { gql } from 'apollo-server-koa'

export const typeAlbumDefs = gql`
    type AlbumInfo {
        id: ID!
        name: String!
        picUrl: String
        pic: Int
        picStr: String
        tns: [String]
    }
`
