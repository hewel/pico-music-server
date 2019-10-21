import axios from '../utils/axios'
import { ISongItemGet, ISongItem } from './requestTypes'

export async function getSongDetail(id: string): Promise<ISongItem> {
    const { data } = await axios.get('/song/detail', { params: { ids: id } })
    const songs: ISongItemGet[] = data.songs
    const {
        id: songId,
        name: songName,
        dt: duration,
        ar,
        al: { id: albumId, name: albumName, picUrl: albumPicUrl },
        copyright,
        publishTime,
    } = songs[0]
    const artist = ar.map(({ id: artistId, name: artistName }) => ({ artistId, artistName }))
    return {
        songId,
        songName,
        duration,
        artist,
        album: { albumId, albumName, albumPicUrl },
        copyright,
        publishTime,
    }
}
