import axios from '../utils/axios'

export default async function getPlaylist(id: string): Promise<object> {
    const {
        data: { playlist },
    } = await axios.get('/playlist/detail', { params: { id } })

    return playlist
}
