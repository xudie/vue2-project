import axios from 'axios'
import Vue from 'vue'
import authService from '../services/auth'

// 创建 axios 实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 从环境变量获取基础 API 地址
  timeout: 10000 // 请求超时时间
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 获取 token
    const token = authService.getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log('对请求错误做些什么', error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器 // 根据业务状态码处理不同情况 authService.logout()
instance.interceptors.response.use(
  response => {
    const res = response.data

    // 根据业务状态码处理不同情况 authService.logout()
    if (res.code !== 200) {
      // 例如：token 过期
      if (res.code === 401) {
        authService.logout()
        Vue.prototype.$message.error('登录已过期，请重新登录')
      } else {
        Vue.prototype.$message.error(res.message || 'Error')
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => error => {
    // 对响应错误做点什么
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权
          break
        case 403:
          // 处理禁止访问
          break
        case 404:
          // 处理未找到
          break
        case 500:
          // 处理服务器错误
          break
        default:
        // 处理其他错误
      }
    }
    return Promise.reject(error)
  }
)

export default instance
