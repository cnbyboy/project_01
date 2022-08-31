// 1. 导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2. 调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 3. 创建路由的实例对象
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Product/ProductView.vue')
    },
    {
      path: '/classify',
      component: () => import('@/views/Classify/ClassifyView.vue')
    },
    {
      path: '/cart',
      component: () => import('@/views/Cart/CartView.vue')
    },
    {
      path: '/user',
      component: () => import('@/views/User/UserView.vue')
    }
  ]
})

// 4. 向外共享路由的实例对象
export default router
