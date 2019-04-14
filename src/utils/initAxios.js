import Axios from 'axios'

export const initAxios = () => {
    const token = localStorage.getItem('token')
    Axios.defaults.baseURL = 'http://localhost:3000/'
    if(token) {
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete Axios.defaults.headers.common['Authorization']
    }
}