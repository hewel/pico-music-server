import axios from '../utils/axios'
import { ISongRaw, ISong } from './requestTypes'
import { parseSong } from './requestParses'

export async function getSongList(id: string): Promise<ISong[]> {
    const {
        data: { playlist },
    } = await axios.get('/playlist/detail', { params: { id } })
    const tracks: ISongRaw[] = playlist.tracks
    return tracks.map(track => parseSong(track))
}
