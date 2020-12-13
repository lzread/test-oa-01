import axios from 'axios'
import { Message } from 'element-ui'

// 创建一个请求实例
const service = axios.create({
  baseURL: 'http://api.lzread.com:3111/api',
  timeout: 5000
})

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      return res
    }
  },
  error => {
    const res = error.response.data
    Message({
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
