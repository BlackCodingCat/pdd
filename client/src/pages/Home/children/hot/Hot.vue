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
    </div>
</template>

<script>
    import Casual from './../../../../components/casual/Casual.vue'
    import HotNav from './../../../../components/hotNav/HotNav.vue'
    export default {
        name:'Hot',
        components:{
            Casual,
            HotNav
        }
    }
</script>

<style lang="less" scoped>
    .hot{
        width: 100%;
        height: 100%;
        padding-top: 45px;
        .adver{
            width: 100%;
        }
    }
</style>
