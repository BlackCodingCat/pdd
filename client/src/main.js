import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  router,
  //渲染视图 Vue2.0写法
  render:h => h(App)
}).$mount('#app')
