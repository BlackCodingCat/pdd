import ajax from './ajax';

//1.定义基础路径
const BASE_URL = 'http://127.0.0.1:3000';

export const sendMessage = ()=>{
    ajax(BASE_URL+'/api/send_message',{name:'张三',age:'李四'});
}