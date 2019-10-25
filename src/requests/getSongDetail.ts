import axios from '../utils/axios'
import { ISongRaw, ISong, ISongUrlRow, ISongUrl } from './requestTypes'
import { parseSong, parseSongUrl } from './requestParses'

export async function getSongDetail(id: string): Promise<ISong> {
    const { data } = await axios.get('/song/detail', { params: { ids: id } })
    const songs: ISongRaw[] = data.songs
    return parseSong(songs[0])
}
export async function getSongUrl(id: string): Promise<ISongUrl> {
    const { data } = await axios.get('/song/url', { params: { id } })
    const songUrlRow: ISongUrlRow = data.data[0]
    return parseSongUrl(songUrlRow)
}
