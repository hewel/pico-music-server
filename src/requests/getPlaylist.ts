import axios from '../utils/axios'

export default async function getPlaylist(id: string): Promise<Object> {
    const {
        data: { playlist },
    } = await axios.get('/playlist/detail', { params: { id } })

    return playlist
}
