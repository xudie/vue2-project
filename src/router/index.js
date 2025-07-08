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
  const token = localStorage.getItem('userToken')
  // 不需要认证的路由直接放行
  if (to.matched.some(record => !record.meta.requiresAuth)) {
    if (token) {
      return next('/')
    } else {
      return next()
    }
  }

  // 需要认证的路由处理
  if (token) {
    // 如果有 token，验证 token 有效性
    try {
      // 使用封装的 Axios 验证 token
      // const { isValid } = await Vue.prototype.$http.get('/auth/verify')
      next()
    } catch (error) {
      localStorage.removeItem('userToken')
      next('/login')
    }
  } else {
    // 没有 token，跳转到登录页
    console.log('没有 token，跳转到登录页')
    next('/login')
  }
})

export default router
