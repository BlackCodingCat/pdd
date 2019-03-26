import {
    HOME_CASUAL,
    HOME_NAVS,
    HOT_GOODS_LIST
} from './mutation-types'

export default {
    //获取轮播图
    [HOME_CASUAL](state,{home_casual}){
        state.homecasual = home_casual;
    },

    //获取首页导航
    [HOME_NAVS](state,{home_navs}){
        state.homenavs = home_navs;
    },

    //获取首页商品
    [HOT_GOODS_LIST](state,{hot_goods_list}){
        state.hotGoodsList = hot_goods_list;
    }
}