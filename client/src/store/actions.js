import {
    getHomeCasual,
} from './../api/index'


import {
    HOME_CASUAL
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
    }
}