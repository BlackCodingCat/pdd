<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.showTabBar"></TabBar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  name: 'App',
  components:{
    TabBar
  }
}
</script>

<style lang="less" scoped>
  #app{
    width: 100%;
    height: 100%;
  }
</style>


