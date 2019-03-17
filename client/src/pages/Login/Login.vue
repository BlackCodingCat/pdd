<template>
    <div class="login-main">
        <!-- 头部logo部分 -->
        <header class="login-main-header">
            <img src="./../../../static/images/logo.png" alt="黑猫logo">
            <div class="title">
                <span>拼多多</span>
                <span>www.<i style="color:red">yangkeduo</i>.com</span>
            </div>           
        </header>
        <!-- 主体登录部分 -->
        <article class="login-main-body">
            <!-- 标题部分 -->
            <div class="login-title">
                <span @click.prevent="chooseLoginMethod(true)" :class="{current:isMessageLogin}">短信登录</span>
                <span @click.prevent="chooseLoginMethod(false)" :class="{current:!isMessageLogin}">密码登录</span>
            </div>
            <!-- 登录的表单内容 -->
            <div class="login-content">
                <form>
                    <!-- 1.短信登录 -->
                    <div :class="{current:isMessageLogin}">
                        <!-- 手机号 -->
                        <section class="login-telephone">
                            <input type="tel" maxlength="11" placeholder="手机号" v-model="telephone">
                            <button v-if="!countDown" :class="{changeColor:testTelephone()}" @click="getVertification()">获取验证码</button>
                            <!-- 备用button -->
                            <button v-else>已发送({{countDown}}s)</button>
                        </section>
                        <!-- 验证码 -->
                        <section class="login-vertification">
                            <input type="text" placeholder="验证码">
                        </section>
                        <!-- 提示 -->
                        <section class="login-prompt">
                            温馨提示 : 未注册拼多多的手机号，登录时将自动注册，且代表已同意
                            <a href="javascript:;">服务协议与隐私政策</a>
                        </section>
                        <!-- 登录 -->
                        <button class="login-submit">登录</button>
                        <!-- 返回按钮 -->
                        <router-link class="login-return" tag="button" to="/mine">返回</router-link>
                    </div>

                    <!-- 2.验证码登录 -->
                    <div :class="{current:!isMessageLogin}">
                        <!-- 用户名/手机/邮箱 -->
                        <section class="login-username">
                            <input type="text" maxlength="11" placeholder="用户名/手机/邮箱">
                        </section>

                        <!-- 密码 -->
                        <!-- 隐藏密码 -->
                        <section class="login-password" v-if="!showPwd">
                            <input type="password" placeholder="密码">
                            <img src="./images/hide_pwd.png" alt="隐藏密码" class="switch-show" @click.prevent="isShowPwd(true)">
                        </section>
                        <!-- 显示密码 -->
                        <section class="login-password" v-else>
                            <input type="type" placeholder="密码">
                            <img src="./images/show_pwd.png" alt="显示密码" class="switch-show" @click.prevent="isShowPwd(false)">
                        </section>

                        <!-- 验证码 -->
                        <section class="login-vertifi-code">
                            <input type="text" maxlength="6" placeholder="验证码">
                            <img src="./images/captcha.svg" alt="验证码图片" class="get-vertification">
                        </section>
                        <!-- 提示 -->
                        <section class="login-prompt">
                            温馨提示 : 未注册拼多多的手机号，登录时将自动注册，且代表已同意
                            <a href="javascript:;">服务协议与隐私政策</a>
                        </section>
                        <!-- 登录 -->
                        <button class="login-submit">登录</button>
                        <!-- 返回按钮 -->
                        <router-link class="login-return" tag="button" to="/mine">返回</router-link>
                    </div>
                </form>                  
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        name:'Login',
        data() {
            return {
                isMessageLogin:true, //短信登录为true,密码登录为false
                telephone:'', //手机号
                countDown:0,  //获取验证码的倒计时
                showPwd:false, //显示密码为true,不显示密码为false
            }
        },
        methods: {
            //1.选择何种方式登录
            chooseLoginMethod(flag){
                this.isMessageLogin = flag;
            },
            //2.验证手机号的合法性，让获取验证码文字变色
            testTelephone(){
                return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.telephone);
            },
            //3.获取验证码倒计时
            getVertification(){
                if(this.testTelephone()){
                    this.countDown = 60;
                    this.intervalId = setInterval(()=>{
                        this.countDown--;
                        if(this.countDown === 0){
                            clearInterval(this.intervalId);
                        }
                    },1000);
                }
            },
            //4.切换密码的显示和隐藏
            isShowPwd(flag){
                this.showPwd = flag;
                console.log(this.showPwd);
            }
        },
    }
</script>

<style lang="less" scoped>
    .login-main{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;

        .login-main-header{
            width: 90%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 70px;
            img{
                width: 18%;
                border-radius: 50%;
            }
            .title{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-left: 15px;

                span:first-child{
                    color: red;
                    font-size: 35px;
                    font-family: 隶书;
                    font-weight: bolder;
                    margin-bottom: 8px;
                    letter-spacing: 3px;
                }  
                span:nth-child(2){
                    color: #000;
                    font-size: 16px;
                    font-weight: bolder;
                    letter-spacing: 1px;
                }
            }      
        }

        .login-main-body{
            width: 90%;
            margin: 0 auto;
            margin-top: 50px;
            .login-title{
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    padding-bottom: 5px;
                }
                span:first-child{
                    margin-right: 40px;
                }
                span.current{
                    border-bottom: 2px solid #f6a622;
                    font-weight: 700;
                    color: #f6a622;
                }
            }
            .login-content{
                width: 100%;
                form{
                    div{
                        display: none;
                    }
                    div.current{
                        display: block;
                        .login-telephone{
                            width: 100%;
                            position: relative;
                            input{
                                box-sizing: border-box;
                                width: 100%;
                                height: 50px;
                                border: 1px solid #cccccc;
                                border-radius: 5px;
                                padding-left: 15px;
                                margin-top: 15px;
                                font-size: 15px;
                                outline: 0;
                                &:focus{
                                    border: 2px solid #f6a622;
                                }
                            }
                            button{
                                display: inline-block;
                                height: 20px;
                                position: absolute;
                                right: 5px;
                                top: 45%;
                                border: none;
                                outline: none;
                                background-color: transparent;
                                color: #aaa;
                                font-size: 15px;
                            }
                            button.changeColor{
                                color: #f6a622;
                            }
                        }
                        .login-vertification{
                            width: 100%;
                            margin-top: 20px;
                            input{
                                box-sizing: border-box;
                                width: 100%;
                                height: 50px;
                                border-radius: 5px;
                                border: 1px solid #cccccc;
                                padding-left: 15px;
                                outline: none;
                                font-size: 15px;
                                &:focus{
                                    border: 2px solid #f6a622;
                                }
                            }
                        }
                        .login-username{
                            width: 100%;
                            input{
                                box-sizing: border-box;
                                width: 100%;
                                height: 50px;
                                border: 1px solid #cccccc;
                                border-radius: 5px;
                                padding-left: 15px;
                                margin-top: 15px;
                                font-size: 15px;
                                outline: 0;
                                &:focus{
                                    border: 2px solid #f6a622;
                                }
                            }
                        }
                        .login-password{
                            width: 100%;
                            margin-top: 20px;
                            position: relative;
                            input{
                                box-sizing: border-box;
                                width: 100%;
                                height: 50px;
                                border-radius: 5px;
                                border: 1px solid #cccccc;
                                padding-left: 15px;
                                outline: none;
                                font-size: 15px;
                                &:focus{
                                    border: 2px solid #f6a622;
                                }
                            }
                            .switch-show{
                                width: 7%;
                                position: absolute;
                                right: 8px;
                                bottom: 6px;
                            }
                        }
                        .login-vertifi-code{
                            width: 100%;
                            margin-top: 20px;
                            position: relative;
                            input{
                                box-sizing: border-box;
                                width: 100%;
                                height: 50px;
                                border-radius: 5px;
                                border: 1px solid #cccccc;
                                padding-left: 15px;
                                outline: none;
                                font-size: 15px;
                                &:focus{
                                    border: 2px solid #f6a622;
                                }
                            }
                            .get-vertification{
                                width: 40%;
                                position: absolute;
                                bottom: 1px;
                                right: 3px;
                            }
                        }
                        .login-prompt{
                            box-sizing: border-box;
                            width: 100%;
                            height: 25px;
                            line-height: 25px;
                            font-size: 13px;
                            color: #999999;
                            letter-spacing: 1px;
                            margin-top: 10px;
                            padding-left: 5px;
                            a{
                                text-decoration: none;
                                color: #f6a622;
                            }
                        }
                        .login-submit{
                            width: 100%;
                            height: 38px;
                            border-radius: 5px;
                            text-align: center;
                            color: #fff;
                            font-weight: bolder;
                            font-size: 17px;
                            letter-spacing: 2px;
                            outline: none;
                            border:none;
                            background-color: #f6a622;
                            margin-top: 55px;
                        }
                        .login-return{
                            width: 100%;
                            height: 38px;
                            border-radius: 5px;
                            text-align: center;
                            color: #f6a622;
                            font-size: 14px;
                            font-size: 17px;
                            letter-spacing: 2px;
                            outline: none;
                            border:1px solid #f6a622;
                            background-color: transparent;
                            margin-top: 20px;
                        }
                    }
                }
            }
        }
    }
</style>