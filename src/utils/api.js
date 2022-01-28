import axios from 'axios'

export const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`
})

api.interceptors.response.use(response => {
    return response;
}, async err => {
    if ( err.response.status === 401 && err.config && !err.config.__isRetryRequest)
        {
            const originalReq = err.config
            originalReq._retry = true;

            const interception = await fetch(`${process.env.REACT_APP_API_BASE_URL}/refreshToken`, {
                method: 'POST',
                mode: 'cors',
                headers: {'Authorization': `Bearer ${localStorage.getItem('keepLogged') ? localStorage.getItem('refreshToken') : sessionStorage.getItem('refreshToken')}`},
                body: {},
              })

            const res = await interception.json()
            
            sessionStorage.setItem('token', res.token)
            originalReq.headers = {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}

            return axios(originalReq);
        }

    return Promise.reject(err)
});