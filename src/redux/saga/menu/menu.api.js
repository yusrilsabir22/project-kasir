import axios from 'axios'
import { formData } from '../../../utils/utils'
export const getMenus = async () => {
    return await axios({
            url: '/menu/makanan',
            method: 'get'
        })
        .then(response => ({
            response: {
                ...response.data
            }
        }))
        .catch(error => ({
            error
        }))
}

export const addMenu = async (payload) => {
    console.log(payload)
    return await axios({
        url: '/menu/makanan',
        method: 'post',
        data: formData(payload)
    })
        .then(response => ({response: {...response.data}}))
        .catch(error => ({error}))
}