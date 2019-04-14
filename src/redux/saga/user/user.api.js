import axios from 'axios'
export const auth = async (payload) => {
    return await axios({
        url: '/user/auth?type=sign-in',
        method: 'post',
        data: {
            nama: payload.username,
            kode_rahasia: payload.password
        }
    })
        .then(response => ({response: {...response.data}}))
        .catch(error => ({error}))
}