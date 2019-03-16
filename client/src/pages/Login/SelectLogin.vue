<template>
    <div class="select-login-main">
        <!-- 选择登录方式 -->
        <article class="select-login-method">
            <h4 class="title">选择登录方式</h4>
            <div class="phone-login-btn">
                <i class="iconfont icon-shouji"></i>
                <span>手机登录</span>
            </div>
        </article>
        <!-- 登录底部 -->
        <footer class="login-bottom">
            <!-- 底部logo -->
            <div class="footer-logo">
                <img src="./../../../static/images/logo.png" alt="小黑猫logo">
                <span>拼多多</span>
            </div>
            <div class="insurance-container">
                <i class="iconfont icon-dunpai"></i>
                <span>由</span>
                <img src="./../../../static/images/brand_PICC.png" alt="PICC中国人民保险">
                <span>全程保障</span>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name:'SelectLogin'
    }
</script>

<style lang="less" scoped>
    @import './../../../static/fonticon/iconfont.css';
    .select-login-main{
       width:100%;
        height:100%;
        background-color: #f5f5f5;
        position: relative;
        /* 选择登录方式 */
        .select-login-method{
            width: 100%;
            height: 130px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 25%;
            
            .title{
                font-size: 19px;
                letter-spacing: 1px;
                color:#151516;
                margin-bottom: 41px;
            }
            .phone-login-btn{
                width: 80%;
                height: 45px;
                line-height: 45px;
                background-color: #f6a622;
                color: #ffffff;
                font-weight: bolder;
                text-align: center;
                font-size: 16px;
                letter-spacing: 3px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                i{
                    font-size: 25px;
                    color: #ffffff
                }
                span{
                    margin-left: 5px;
                }
            }
        }
        /* 登录底部 */
        .login-bottom{
            width: 100%;
            height: 100px;
            // background-color: blue;
            position: absolute;
            bottom: 10%;
            .footer-logo{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 30px;
                img{
                    width: 15%;
                    border-radius: 50%;
                    margin-right: 10px;
                    vertical-align: middle;
                }
                span{
                    color: red;
                    font-size: 30px;
                    font-weight: bolder;
                    font-family:隶书;
                }
            }
            .insurance-container{
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 37%;
                    margin: 0 3px;
                }
                i{
                    color: rgb(26, 206, 26);
                    margin-right: 3px;
                }
                span{
                    display: inline-block;
                    font-size: 14px;
                    color: #666666;
                    letter-spacing: 1px;
                }
            }
        }
    }
</style>
