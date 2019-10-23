import { IResolvers } from 'apollo-server-koa'
import { Base64 } from 'js-base64'

import { getSongList } from '../../requests'
import { ISong } from '../../requests/requestTypes'
import { IPageInfo, IListEdge, IList } from './resolverTypes'

type ISongListEdge = IListEdge<ISong>
type ISongList = IList<ISong>

export const songListResolvers: IResolvers = {
    Query: {
        songList: async (
            _parent,
            { songListFilter: { playlistId, after, first, before, last } }
        ): Promise<ISongList> => {
            const songList = await getSongList(playlistId)
            const cursor: string = after || before
            const edges: ISongListEdge[] = songList.map(song => ({
                node: song,
                cursor: Base64.encode(song.id.toString()),
            }))
            const pageInfo: IPageInfo = {}
            const totalCount: number = edges.length

            return {
                edges,
                totalCount,
                pageInfo,
            }
        },
    },
}
