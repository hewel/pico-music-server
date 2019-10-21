import { IResolvers } from 'apollo-server-koa'
import { getSongDetail } from '../../requests'
import { ISongItem } from '../../requests/requestTypes'

export const RSongDetail: IResolvers = {
    Query: {
        songDetail: async (_parent, { songId }): Promise<ISongItem> => getSongDetail(songId),
    },
}
