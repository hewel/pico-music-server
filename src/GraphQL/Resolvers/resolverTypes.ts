export interface IPageInfo {
    hasNextPage: boolean
    hasPreviousPage: boolean
    startCursor: string
    endCursor: string
}

export interface IListEdge<T> {
    node: T
    cursor: string
}

export interface IList<T> {
    pageInfo: IPageInfo
    edges: IListEdge<T>[]
    totalCount: number
}
