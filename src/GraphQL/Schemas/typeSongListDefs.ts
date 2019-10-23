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
    type songListFilter implements ListFilter {
        playlistId: ID!
        after: String
        first: Int
        before: String
        last: Int
    }
    type Query {
        songList(songListFilter: songListFilter!): [SongList]!
    }
`
