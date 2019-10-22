import axios from '../utils/axios'
import { ISongRaw, ISong } from './requestTypes'
import { parseSong } from './requestParses'

export async function getSongDetail(id: string): Promise<ISong> {
    const { data } = await axios.get('/song/detail', { params: { ids: id } })
    const songs: ISongRaw[] = data.songs
    return parseSong(songs[0])
}
