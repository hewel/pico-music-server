import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:4343',
    withCredentials: true,
})
