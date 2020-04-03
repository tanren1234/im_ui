import axios from 'axios'
import qs from 'qs'
import store from '../store'

axios.defaults.withCredentials = true
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000// 请求超时时间
})

service.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  if (store.getters.token) {
    config.headers['Authorization'] = 'Bearer ' + store.getters.token
  }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
