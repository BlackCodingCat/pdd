let express = require('express');
let router = express.Router();

const sms = require('./../util/sms');

/* GET home page. */
router.get('/', (req,res,next)=>{
  res.render('index', { title: 'Express' });
});

//发送短信验证码
router.get('/api/send_message', (req, res) => {
  let messageCode = sms.randomCode(6);
  sms.mobile = req.query.phone;
  //user[sms.mobile] = code; //将随机验证码和手机号绑定
  //发送信息
  sms.send_sms(sms.send_sms_uri, sms.apikey, sms.mobile, sms.text(messageCode));
})

module.exports = router;
