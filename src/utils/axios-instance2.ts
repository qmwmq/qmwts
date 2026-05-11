import axios from 'axios'
import ParamBuilder from './param-builder'

// post 默认application/json
// post 使用URLSearchParams自动变为application/x-www-form-urlencoded;charset=UTF-8
// post 使用FormData自动变为multipart/form-data

// get 默认无
// get 使用URLSearchParams默认无
// get 无法使用FormData

const instance = axios.create({})

instance.interceptors.request.use(
    request => {
      request.data = ParamBuilder.buildData(request.data)
      request.params = ParamBuilder.buildParams(request.params)
      return request
    },
    error => {
      return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    async response => {
      if (response.config.responseType === 'blob') {
        const { data } = response
        if (data.type === 'application/x-download') { // 不是json说明下载成功
          const file = new File([ data ], decodeURI(response.headers['content-disposition'].split('filename=')[1]))
          const a = document.createElement('a')
          a.href = URL.createObjectURL(file)
          a.download = file.name
          a.click()
          // 释放
          URL.revokeObjectURL(a.href)
          a.remove()
          return Promise.resolve(response)
        } else if (data.type === 'application/json') { // 是json说明有报错
          response.data = await new Response(data).json()
        }
      }
      return response
    },
    error => {
      return Promise.reject(error)
    }
)

export default instance