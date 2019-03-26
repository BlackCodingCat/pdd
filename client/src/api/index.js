import ajax from './ajax';

//1.定义基础路径
const BASE_URL = 'http://127.0.0.1:3000';

//获取轮播图
export const getHomeCasual = ()=>ajax(BASE_URL+'/api/getHomeCasual');

//获取首页导航
export const getHomeNavs = ()=>ajax(BASE_URL+'/api/getHomeNavs');

//获取首页商品
export const getHotGoodsList = ()=>ajax(BASE_URL+'/api/getHotGoodsList')

//发送短信验证码
export const sendMessage = (phone)=>{
    ajax(BASE_URL+'/api/send_message',{phone:phone});
};