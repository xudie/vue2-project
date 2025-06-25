import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { get, post, put, del } from './utils/request'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
// 挂载到 Vue 原型上
Vue.prototype.$http = { get, post, put, del }

Vue.config.productionTip = false

new Vue({
  router, // 注入路由
  render: h => h(App)
}).$mount('#app')
