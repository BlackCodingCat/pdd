import Vue from 'vue'
import VueRouter from 'vue-router'

/* 引入一级路由 */
import Home from './../pages/Home/Home.vue';
import Recommend from './../pages/Recommend/Recommend.vue'
import Search from './../pages/Search/Search.vue'
import Chat from './../pages/Chat/Chat.vue'
import Mine from './../pages/Mine/Mine.vue'
import Login from './../pages/Login/Login.vue'
/* 引入二级路由 */
import Hot from './../pages/Home/children/hot/Hot.vue'
import Woman from './../pages/Home/children/woman/Woman.vue'
import Baby from './../pages/Home/children/baby/Baby.vue'
import Shirt from './../pages/Home/children/shirt/Shirt.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: '/home',
      component: Home,
      meta: {
        showTabBar: true
      },
      children:[
          {path:'hot',component:Hot},
          {path:'woman',component:Woman},
          {path:'baby',component:Baby},
          {path:'shirt',component:Shirt},
          {path:'/home',redirect:'/home/hot'}
      ]
    },
    {
      path: '/recommend',
      component: Recommend,
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/chat',
      component: Chat,
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/mine',
      component: Mine,
      meta: {
        showTabBar: false
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showTabBar: false
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
