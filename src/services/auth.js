// src/services/auth.js
import axios from 'axios'
import router from '../router'

const API_URL = process.env.VUE_APP_API_URL || 'http://your-api-base-url'

const authService = {
  // 登录方法
  async login(credentials) {
    try {
      const response = `test-token` + credentials
      localStorage.setItem('userToken', response)
      router.push('/')

      // 待有登录接口再使用 const response = await axios.post(`${API_URL}/auth/login`, credentials)
      // 待有登录接口再使用 localStorage.setItem('userToken', response.data.token)
      // 待有登录接口再使用 设置axios默认授权头
      // axios.defaults.headers.common[
      //   'Authorization'
      // ] = `Bearer ${response.data.token}`
      // return response.data
      return response
    } catch (error) {
      throw error.response ? error.response.data : error
    }
  },

  // 登出方法
  logout() {
    // 移除token
    localStorage.removeItem('userToken')
    // 删除axios授权头
    delete axios.defaults.headers.common['Authorization']
    // 跳转到登录页
    router.push('/login')
  },

  // 检查是否已登录
  isAuthenticated() {
    return !!localStorage.getItem('userToken')
  },

  // 获取token
  getToken() {
    return localStorage.getItem('userToken')
  },

  // 验证token有效性
  async verifyToken() {
    const token = this.getToken()
    if (!token) return false

    try {
      const response = await axios.get(`${API_URL}/auth/verify`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      return response.data.valid
    } catch (error) {
      return false
    }
  }
}

export default authService
