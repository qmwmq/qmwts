import axios from 'axios'

axios.interceptors.request.use(
    request => {
      console.log('request')
      return request
    },
    error => {
      console.log('request error')
      return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
      console.log('response')
      return response
    },
    error => {
      console.log('response error')
      return Promise.reject(error)
    }
)

export default axios