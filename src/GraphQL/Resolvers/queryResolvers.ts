import { IResolvers } from 'apollo-server-koa'
import { merge } from 'ramda'

import {
    getSongList,
    getSongDetail,
    getSongUrl,
    getSearchSuggest,
    getSearchResult,
} from '../../requests'

import { ISong, ISongUrl, ISearchFilter } from '../../requests/requestTypes'
import { IPageInfo, IListEdge, IList } from './resolverTypes'

import sliceEdges from './_sliceEdges'
import getPageInfo from './_getPageInfo'
import toEdges from './_toEdges'

type ISongListEdge = IListEdge<ISong>
type ISongList = IList<ISong>

export const queryResolvers: IResolvers = {
    Query: {
        song: async (_parent, { songId }): Promise<ISong & ISongUrl> =>
            merge(
                ...(await Promise.all([
                    getSongDetail(songId),
                    getSongUrl(songId),
                ]))
            ),

        songList: async (
            _parent,
            { playlistId, songListFilter }
        ): Promise<ISongList> => {
            const songList = await getSongList(playlistId)
            const songEdges: ISongListEdge[] = toEdges(songList, 'id')

            const edges = sliceEdges(songEdges)(songListFilter)
            const pageInfo: IPageInfo = getPageInfo(songEdges, edges)
            const totalCount: number = edges.length

            return {
                edges,
                totalCount,
                pageInfo,
            }
        },

        searchSuggest: async (_parent, { keywords }) =>
            await getSearchSuggest(keywords),

        search: async (_parent, args, context, info) => {
            const searchFilter: ISearchFilter = args.searchFilter
            return await getSearchResult(searchFilter)
        },
    },
}
