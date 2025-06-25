import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

// 使用 VueRouter 插件
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')

  // 不需要认证的路由直接放行
  if (to.matched.some(record => !record.meta.requiresAuth)) {
    return next()
  }

  // 需要认证的路由处理
  if (token) {
    // 如果有 token，验证 token 有效性
    try {
      // 使用封装的 Axios 验证 token
      const { isValid } = await Vue.prototype.$http.get('/auth/verify')

      if (isValid) {
        next()
      } else {
        // token 无效，清除并跳转到登录页
        localStorage.removeItem('token')
        next('/login')
      }
    } catch (error) {
      console.error('Token 验证失败:', error)
      localStorage.removeItem('token')
      next('/login')
    }
  } else {
    // 没有 token，跳转到登录页
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
})

export default router
