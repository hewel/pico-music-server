import { gql } from 'apollo-server-koa'

export const typeQueryDefs = gql`
    type Query {
        song(songId: ID!): Song
        songUrl(songId: ID!): SongUrl
        songList(playlistId: ID!, songListFilter: songListFilter): SongList
    }
`
