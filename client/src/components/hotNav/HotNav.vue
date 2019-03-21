<template>
    <div class="hot-nav">
        <!-- nav内容区域 -->
        <div class="hot-nav-container">
            <div class="hot-nav-inner">
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon02.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon03.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon04.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon05.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon06.gif" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon07.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon08.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon09.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon10.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon11.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon12.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon13.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon14.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon15.png" alt="">
                    <span>限时秒杀</span>
                </div>
                <div class="hot-nav-item">
                    <img src="./imgs/nav/nav_icon16.png" alt="">
                    <span>限时秒杀</span>
                </div>
            </div>
        </div>
        <!-- nav底部滚动条 -->
        <div class="bottom-bar-container">
            <div class="bottom-bar-inner">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HotNav'
    }
</script>

<style lang="less" scoped>
    .hot-nav{
        width: 100%;
        height: 180px;
        background-color: rgb(7, 145, 196);
        padding-top: 5px;
        position: relative;
        .hot-nav-container{
            width: 100%;
            width: 97.346%;
            height: 180px;
            margin: 0 auto;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            background-color: #ffffff;
            overflow-x: scroll;
            &::-webkit-scrollbar{
                display: none;
            }
            .hot-nav-inner{
                width: 160%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
                align-items: center;
                padding-top: 10px;
                .hot-nav-item{
                    width: 12.5%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 15px;
                    img{
                        width: 55%;
                        margin-bottom: 5px;
                    }
                    span{
                        color: #444;
                        font-size: 14px;
                    }
                }
            }
        }
        .bottom-bar-container{
            width: 100px;
            height: 2px;
            background-color: #cccccc;
            border-radius: 2px;
            position: absolute;
            left: 50%;
            margin-left: -50px;
            bottom: 10px;
            .bottom-bar-inner{
                width: 50%;
                height: 2px;
                border-radius: 2px;
                background-color: orangered;
            }
        }
        .adver{
            width: 100%;
            position: absolute;
            bottom: 10px;
        }
    }
</style>
