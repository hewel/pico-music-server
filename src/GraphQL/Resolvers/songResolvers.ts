import { IResolvers } from 'apollo-server-koa'
import { getSongDetail } from '../../requests'
import { ISong } from '../../requests/requestTypes'

export const songResolvers: IResolvers = {
    Query: {
        song: async (_parent, { songId }): Promise<ISong> => getSongDetail(songId),
    },
}
