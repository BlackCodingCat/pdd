<template>
    <div class="hot">
        <Casual></Casual>
    </div>
</template>

<script>
    import Casual from './../../../../components/casual/Casual.vue'
    export default {
        name:'Hot',
        components:{
            Casual
        }
    }
</script>

<style scoped>
    .hot{
        width: 100%;
        height: 100%;
        padding-top: 45px;
    }
</style>