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
      {path:'/home',component:Home,meta:{showTabBar:true}},
      {path:'/recommend',component:Recommend,meta:{showTabBar:true}},
      {path:'/search',component:Search,meta:{showTabBar:true}},
      {path:'/chat',component:Chat,meta:{showTabBar:true}},
      {path:'/mine',component:Mine,meta:{showTabBar:false}},
      {path:'/',redirect:'/home'}
    ]
})
