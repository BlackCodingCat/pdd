<template>
    <div class="tab-bar-container">
        <div class="tab-bar-inner">
            <div class="tab-bar-item">
                <img src="./img/icon_home.png" alt="首页">
                <span>首页</span>
            </div>
            <div class="tab-bar-item">
                <img src="./img/icon_intro.png" alt="推荐">
                <span>推荐</span>
            </div>
            <div class="tab-bar-item">
                <img src="./img/icon_search.png" alt="搜索">
                <span>搜索</span>
            </div>
            <div class="tab-bar-item">
                <img src="./img/icon_chat.png" alt="聊天">
                <span>聊天</span>
            </div>
            <div class="tab-bar-item">
                <img src="./img/icon_mine.png" alt="我的">
                <span>我的</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabBar'
    }
</script>

<style lang="less" scoped>
    .tab-bar-container{
        width: 100%;
        height: 50px;
        position: fixed;
        left:0;
        bottom: 0;
        box-shadow: 0px -2px 5px #cccccc;
        .tab-bar-inner{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .tab-bar-item{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img{
                    width: 30%;
                    margin-bottom: 5px;
                }
                span{
                    font-size: 13px;
                    color: #666;
                }
            }
        }
    }
</style>
