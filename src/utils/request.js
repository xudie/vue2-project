import axios from 'axios'
import Vue from 'vue'
import router from '../router'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 从环境变量获取基础 API 地址
  timeout: 10000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    // 根据业务状态码处理不同情况
    if (res.code !== 200) {
      // 例如：token 过期
      if (res.code === 401) {
        Vue.prototype.$message.error('登录已过期，请重新登录')
        router.push('/login')
      } else {
        Vue.prototype.$message.error(res.message || 'Error')
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Vue.prototype.$message.error(error.message)
    return Promise.reject(error)
  }
)

/**
 * 封装 get 方法
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} config 额外配置
 */
export function get(url, params = {}, config = {}) {
  return service({
    method: 'get',
    url,
    params,
    ...config
  })
}

/**
 * 封装 post 方法
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} config 额外配置
 */
export function post(url, data = {}, config = {}) {
  return service({
    method: 'post',
    url,
    data,
    ...config
  })
}

/**
 * 封装 put 方法
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} config 额外配置
 */
export function put(url, data = {}, config = {}) {
  return service({
    method: 'put',
    url,
    data,
    ...config
  })
}

/**
 * 封装 delete 方法
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} config 额外配置
 */
export function del(url, params = {}, config = {}) {
  return service({
    method: 'delete',
    url,
    params,
    ...config
  })
}

export default service
