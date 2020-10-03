import axios from 'axios'

const api = axios.create({
	baseURL: window.location.hostname.includes('localhost')
	 ? 'http://localhost:8000/api' : 'https://devsoutinhoflix.herokuapp.com'
})

api.interceptors.response.use((response) => {
	return response
}, function (error) {
	const originalRequest = error.config
	if (error.response.status === 401 && error.response.data.status === 'token is expired') {
		return api.post('auth/refresh')
		.then(res => {
			if(res.status === 200){
				localStorage.setItem('tk',JSON.stringify(res.data.access_token))
				originalRequest.headers.Authorization = `Bearer ${res.data.access_token}`
				api.defaults.headers.Authorization = `Bearer ${res.data.access_token}`
				return api.request(originalRequest)
			}
		})
	}
	if (error.response.status === 403 && error.response.data.status === 'token is invalid') {
		localStorage.clear()
	}
	if (error.response.status === 400 && error.response.data.status === 'authorization token not found') {
		localStorage.clear()
	}
	return Promise.reject(error)
})


export default api