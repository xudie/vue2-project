export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue'),
    meta: {
      title: '首页',
      requiresAuth: true // 标记需要认证
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/test/test.vue'),
    meta: {
      title: 'Test',
      requiresAuth: true
    },
    children: [
      {
        path: '/test',
        component: () => import('@/views/test/test'),
        meta: {
          title: 'test',
          requiresAuth: true
        }
      },
      {
        path: '/test1',
        component: () => import('@/views/test/test1'),
        meta: {
          title: 'test1',
          requiresAuth: true // 标记需要认证
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/login/register.vue')
  },
  {
    path: '/forget',
    name: 'Rorget',
    component: () => import('../views/login/forget.vue')
  }
]
