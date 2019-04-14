import axios from 'axios'
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
        data: payload
    })
        .then(response => ({response: {...response.data}}))
        .catch(error => ({error}))
}