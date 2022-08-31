import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js' // 导入路由模块
import './mock/index.js' // 导入mockjs模块
import '@/assets/css/index.css' // 导入全局样式

// 导入并安装Vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router: router // 挂载路由模块
}).$mount('#app')
