import axios from '../utils/axios'

export async function getPlaylist(id: string): Promise<object[]> {
    const {
        data: { playlist },
    } = await axios.get('/playlist/detail', { params: { id } })

    const tracks: object[] = playlist.tracks

    return tracks.map(({ name, id }) => ({ name, id }))
}
