import { IListEdge, IFilter } from './resolverTypes'

export default function sliceEdges<T>(edges: IListEdge<T>[]) {
    return (filter: IFilter): IListEdge<T>[] => {
        if (!filter) {
            return edges
        }
        const { after, first, before, last } = filter

        const cursor: string | undefined = after || before
        const cursorIndex = edges.findIndex(edge => edge.cursor === cursor)
        const lastIndex = edges.length - 1
        if (first) {
            return after
                ? edges.slice(cursorIndex + 1, cursorIndex + 1 + first)
                : edges.slice(0, first)
        }
        if (last) {
            return before
                ? edges.slice(cursorIndex - last, cursorIndex)
                : edges.slice(lastIndex - last + 1)
        }
        return edges
    }
}
