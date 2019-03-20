//首先引入https和querystring模块
var https = require('https');
var qs = require('querystring');



//调用发送验证码，参数请求地址、apikey、手机号、自定义模板内容
// send_sms(send_sms_uri, apikey, mobile, text);

//send_sms方法
function send_sms(uri, apikey, mobile, text) {
    var sms_host = 'sms.yunpian.com'; //请求地址的url
    var post_data = {
        'apikey': apikey,
        'mobile': mobile,
        'text': text,
    };
    var content = qs.stringify(post_data);
    //把发送的数据解析为字符串发送
    post(uri, content, sms_host);

    function post(uri, content, host) {
        var options = {
            hostname: host,
            port: 443,
            path: uri,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };
        var req = https.request(options, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
            });
        });
        req.write(content);
        req.end();
    }
}
exports.send_sms = send_sms; //方法
exports.apikey = 'bd954305b736fa2530e45b6676493c39';
exports.mobile = '';
exports.send_sms_uri = '/v2/sms/single_send.json'; //请求地址的url
exports.text = (code)=>{
    return '【沈佳棋】您的验证码是'+code+'。如非本人操作，请忽略本短信';
}
exports.randomCode = (length)=>{
    var chars = ['0','1','2','3','4','5','6','7','8','9'];
    var result = ""; 
    for(var i = 0; i < length ; i ++) {
        var index = Math.ceil(Math.random()*9);
        result += chars[index];
    }
    return result;
}