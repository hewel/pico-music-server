import { IResolvers } from 'apollo-server-koa'

import { getSongList, getSongDetail } from '../../requests'

import { ISong } from '../../requests/requestTypes'
import { IPageInfo, IListEdge, IList } from './resolverTypes'

import sliceEdges from './_sliceEdges'
import getPageInfo from './_getPageInfo'
import toEdges from './_toEdges'

type ISongListEdge = IListEdge<ISong>
type ISongList = IList<ISong>

export const queryResolvers: IResolvers = {
    Query: {
        song: async (_parent, { songId }): Promise<ISong> =>
            getSongDetail(songId),
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
    },
}
