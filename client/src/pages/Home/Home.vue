<template>
    <div class="home">
        <!-- 头部导航 -->
        <ly-tab-nav></ly-tab-nav>
        <router-view></router-view> 
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import LyTabNav from './../../components/lyTabNav/LyTabNav.vue'
    import TabBar from './../../components/TabBar/TabBar.vue'
    export default {
        name:'Home',
        components:{
            LyTabNav,
            TabBar
        }
    }
</script>

<style lang="less" scoped>
    .home{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
</style>
