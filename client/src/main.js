import Vue from 'vue'
import App from './App.vue'
import router from './router'
import lyTab from 'ly-tab'
import store from './store/index'

Vue.use(lyTab);

new Vue({
  router,
  store,
  //渲染视图 Vue2.0写法
  render:h => h(App)
}).$mount('#app')
