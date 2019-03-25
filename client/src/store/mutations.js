import {
    HOME_CASUAL
} from './mutation-types'

export default {
    //获取轮播图
    [HOME_CASUAL](state,{home_casual}){
        state.homecasual = home_casual;
    }
}