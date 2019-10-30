import { gql } from 'apollo-server-koa'

export const typeQueryDefs = gql`
    type SearchResult {
        songList: [Song]
        songCount: Int
    }
    type Query {
        song(songId: ID!): Song
        songList(playlistId: ID!, songListFilter: Filter): SongList
        searchSuggest(keywords: String!): [Song]
        search(searchFilter: SearchFilter): SearchResult
    }
`
