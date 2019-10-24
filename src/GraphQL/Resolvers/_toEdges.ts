import { IListEdge } from './resolverTypes'
import { Base64 } from 'js-base64'

export default function toEdges<T>(list: T[], key: string): IListEdge<T>[] {
    return list.map(item => ({
        node: item,
        cursor: Base64.encode(item[key].toString()),
    }))
}
