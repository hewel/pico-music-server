import { IListEdge, IPageInfo } from './resolverTypes'
import { head, last } from 'ramda'

export default function getPageInfo<T>(
    rowEdges: IListEdge<T>[],
    slicedEdges: IListEdge<T>[]
): IPageInfo {
    const startCursor = head(slicedEdges).cursor
    const endCursor = last(slicedEdges).cursor
    const hasNextPage = endCursor !== last(rowEdges).cursor
    const hasPreviousPage = startCursor !== head(rowEdges).cursor
    return {
        startCursor,
        endCursor,
        hasNextPage,
        hasPreviousPage,
    }
}
