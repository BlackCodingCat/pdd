<template>
    <div class="tab-bar-container">
        <div class="tab-bar-inner">
            <div class="tab-bar-item" @click="switchTo('/home')">
                <img src="./img/icon_home_selected.png" alt="首页选中" v-if="this.$route.path === '/home'">
                <img src="./img/icon_home.png" alt="首页" v-else>
                <span>首页</span>
            </div>
            <div class="tab-bar-item" @click="switchTo('/recommend')">
                <img src="./img/icon_intro_selected.png" alt="推荐选中" v-if="this.$route.path === '/recommend'">
                <img src="./img/icon_intro.png" alt="推荐" v-else>
                <span>推荐</span>
            </div>
            <div class="tab-bar-item" @click="switchTo('/search')">
                <img src="./img/icon_search_selected.png" alt="搜索选中" v-if="this.$route.path === '/search'">
                <img src="./img/icon_search.png" alt="搜索" v-else>
                <span>搜索</span>
            </div>
            <div class="tab-bar-item" @click="switchTo('/chat')">
                <img src="./img/icon_chat_selected.png" alt="聊天选中" v-if="this.$route.path === '/chat'">
                <img src="./img/icon_chat.png" alt="聊天" v-else>
                <span>聊天</span>
            </div>
            <div class="tab-bar-item" @click="switchTo('/mine')">
                <img src="./img/icon_mine.png" alt="我的选中" v-if="this.$route.path === '/mine'">
                <img src="./img/icon_mine.png" alt="我的" v-else>
                <span>我的</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabBar',
        computed:{

        },
        methods: {
            //切换路由
            switchTo(address){
                this.$router.replace(address);
            }
        },
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
