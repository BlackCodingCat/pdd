<template>
    <div class="hot">
        <!-- 轮播图 -->
        <Casual></Casual>
        <!-- 热门导航 -->
        <hot-nav></hot-nav>
        <!-- 广告 -->
        <div class="adver">
            <img src="./../../../../../static/images/hot_ad/adver.gif" alt="广告" width="100%">
        </div>
        <!-- 热门商品列表 -->
        <HotGoodsList></HotGoodsList>    
    </div>
</template>

<script>
    import Casual from './../../../../components/casual/Casual.vue'
    import HotNav from './hotNav/HotNav.vue'
    import HotGoodsList from './hotGoodsList/HotGoodsList.vue'
    export default {
        name:'Hot',
        components:{
            Casual,
            HotNav,
            HotGoodsList
        }
    }
</script>

<style lang="less" scoped>
    .hot{
        width: 100%;
        height: 100%;
        padding-top: 45px;
        background-color: #f5f5f5;
        .adver{
            width: 100%;
        }
    }
</style>
