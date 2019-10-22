import { gql } from 'apollo-server-koa'

export const typeSongListDefs = gql`
    type SongListEdge {
        node: Song
        cursor: String!
    }
    type SongList {
        pageInfo: PageInfo!
        edges: [SongListEdge]!
        totalCount: Int
    }
`
