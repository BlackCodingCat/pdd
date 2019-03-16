import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../pages/Home/Home.vue';
import Recommend from './../pages/Recommend/Recommend.vue'
import Search from './../pages/Search/Search.vue'
import Chat from './../pages/Chat/Chat.vue'
import Mine from './../pages/Mine/Mine.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
      {path:'/home',component:Home},
      {path:'/recommend',component:Recommend},
      {path:'/search',component:Search},
      {path:'/chat',component:Chat},
      {path:'/mine',component:Mine},
      {path:'/',redirect:'/home'}
    ]
})
