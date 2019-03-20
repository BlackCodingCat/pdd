let express = require('express');
let router = express.Router();

let sms = require('./../utils/sms');

/* GET home page. */
router.get('/', (req,res,next)=>{
  res.render('index', { title: 'Express' });
});

//发送短信验证码
router.get('/api/send_message',(req,res,next)=>{
  let messageCode = sms.randomCode(6);
  console.log(messageCode);
})

module.exports = router;
