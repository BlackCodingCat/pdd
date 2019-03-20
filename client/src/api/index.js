import ajax from './ajax';

//1.定义基础路径
const BASE_URL = 'http://127.0.0.1:3000';

//发送短信验证码
export const sendMessage = (phone)=>{
    ajax(BASE_URL+'/api/send_message',{phone:phone});
}