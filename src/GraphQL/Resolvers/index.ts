import { mergeAll } from 'ramda'

import { commonResolvers } from './commonResolvers'
import { queryResolvers } from './queryResolvers'

export const resolvers = mergeAll([commonResolvers, queryResolvers])
