import axios from 'axios';

export default function ajax(url='',params={},method='GET'){
    let promise;
    return new Promise((resolve,reject)=>{
        //用axios封装get请求
        if('GET' === method){
            //如果get请求带参数，需要对参数进行解析拼接到url上
            let paramsStr = '';
            if(JSON.stringify(params) !== "{}"){
                Object.keys(params).forEach((key)=>{
                    paramsStr += key+'='+params[key]+'&';
                });
                paramsStr = paramsStr.substring(0,paramsStr.lastIndexOf('&'));
                url+='?'+paramsStr;
            }
            console.log(url);
            promise = axios.get(url);
        }else if('POST' === method){ //用aixos封装post请求
            promise = axios.post(url,params);
        }else{
            return new Error('method传递错误');
        }

        promise.then((responce) => {
            resolve(responce.data);
        }).catch((err) => {
            reject(err);
        });
    })
}