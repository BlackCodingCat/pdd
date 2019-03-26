let express = require('express');
let router = express.Router();

const sms = require('./../util/sms');
const conn = require('./../db/db');
let user = {}; //暂时保存和手机号对应的密码信息

/* GET home page. */
router.get('/', (req,res,next)=>{
  res.render('index', { title: 'Express' });
});

/* 获取轮播图 */
router.get('/api/getHomeCasual',(req,res,next)=>{
    let querySql = 'SELECT * FROM pdd_casual_info';
    conn.query(querySql,(error,results,fields)=>{
        if(error){
            res.json({
                error_code:0,
                message : '查询轮播图失败'
            })
        }else{
            res.json({
                success_code : 200,
                message : results
            })
        }
    })
})

/* 获取首页导航 */
router.get('/api/getHomeNavs',(req,res,next)=>{
    let queryStr = 'SELECT * FROM pdd_homenav_info';
    conn.query(queryStr,(error,results,fields)=>{
        if(error){
            res.json({
                error_code : 0,
                message : '查询首页导航失败'
            })
        }else{
            res.json({
                success_code : 200,
                message : results
            })
        }
    })
})

/* 获取首页商品 */
router.get('/api/getHotGoodsList',(req,res,next)=>{
    let queryStr = "SELECT * FROM pdd_recommend_info LIMIT 60,100";
    conn.query(queryStr,(error,results,fields)=>{
        if(error){
            res.json({
                error_code : 0,
                message : '查询首页商品失败'
            })
        }else{
            res.json({
                success_code : 200,
                message : results
            })
        }
    })
})

/* 发送短信验证码 */
router.get('/api/send_message', (req, res) => {
  let messageCode = sms.randomCode(6);
  let mobile = req.query.phone;
  user[mobile] = messageCode; //将随机验证码和手机号绑定
  console.log('验证码:'+messageCode);
  
  
  //调用第三方短信接口发送信息
//   sms.mobile = req.query.phone;
//   sms.send_sms(sms.send_sms_uri, sms.apikey, sms.mobile, sms.text(messageCode));
})

module.exports = router;