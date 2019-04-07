export const auth = async (payload) => {
    
    if (payload.username === 'admin' && payload.password === 'admin') {
        localStorage.setItem('auth', '1')
        return await ({
            response: {
                success: true
            }
        })
    } else {
        localStorage.setItem('auth', '0')
        return await ({
            response: {
                success: false
            }
        })
    }
}