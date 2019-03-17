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
                <span class="current">短信登录</span>
                <span>密码登录</span>
            </div>
            <!-- 登录的表单内容 -->
            <div class="login-content">
                <form>
                    <!-- 手机号 -->
                    <section class="login-telephone">
                        <input type="tel" maxlength="11" placeholder="手机号">
                        <button>获取验证码</button>
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
                </form>                  
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        name:'Login'
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
</style>