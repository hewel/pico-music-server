import axios from 'axios'

export default axios.create({
    baseURL: 'MUSIC_API_HOST',
    withCredentials: true,
})
