import axios from 'axios'
export const pesanAPI = async (payload) => {
    return await axios({
            url: '/pesanan?id='+payload.id_pelanggan,
            method: 'post',
            data: {
                records: payload.records
            }
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

export const getPesananAPI = async () => {
    return await axios({
            url: '/pesanan',
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

export const addCustomersAPI = async (payload) => {
    return await axios({
            url: '/pelanggan',
            method: 'post',
            data: payload
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

export const getCustomerAPI = async (payload) => {
    return await axios({
            url: '/pelanggan',
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

export const updateCustomersAPI = async (payload) => {
    return await axios({
            url: '/pelanggan?id='+payload.id_pelanggan,
            method: 'put',
            data: {
                status: payload.status,
                bayar: payload.bayar
            }
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