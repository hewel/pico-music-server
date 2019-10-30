import axios from '../utils/axios'
import { parseSong } from './requestParses'

import { ISongRaw, ISearchFilter } from './requestTypes'

type ISuggestSongs = ISongRaw[]

export async function getSearchSuggest(keywords: string) {
    const { data } = await axios.get('/search/suggest', {
        params: { keywords },
    })
    const songList: ISuggestSongs = data.result.songs
    return songList.map(suggest => parseSong(suggest))
}

export async function getSearchResult(filter: ISearchFilter) {
    const { keywords, type, first: limit = 16, offset } = filter

    const {
        data: { result },
    } = await axios.get('/search', {
        params: { keywords, type, limit, offset },
    })

    const songs: ISongRaw[] = result.songs
    const songCount: number = result.songCount

    const songList = songs.map(song => parseSong(song))

    return { songList, songCount }
}
