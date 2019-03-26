import {
    getHomeCasual,
    getHomeNavs,
    getHotGoodsList
} from './../api/index'


import {
    HOME_CASUAL,
    HOME_NAVS,
    HOT_GOODS_LIST
} from './mutation-types'

export default {
    //获取轮播图
    async reqHomeCasual({commit}){
        let result = await getHomeCasual();

        if(result.success_code === 200){
            commit(HOME_CASUAL,{home_casual:result.message})
        }else{
            throw '获取轮播图失败'
        }
    },

    //获取首页导航
    async reqHomeNavs({commit}){
        let result = await getHomeNavs();
        
        if(result.success_code === 200){
            commit(HOME_NAVS,{home_navs:result.message});
        }
    },

    //获取首页商品列表
    async reqHotGoodsList({commit}){
        let result = await getHotGoodsList();

        if(result.success_code === 200){
            commit(HOT_GOODS_LIST,{hot_goods_list:result.message})
        }
    }
}