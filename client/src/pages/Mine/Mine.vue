<template>
    <div class="mine">
        <select-login></select-login>
    </div>
</template>

<script>
    import SelectLogin from './../Login/SelectLogin.vue'
    export default {
        name:'Mine',
        components:{
            SelectLogin
        }
    }
</script>

<style lang="less" scoped>
    .mine{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
</style>
