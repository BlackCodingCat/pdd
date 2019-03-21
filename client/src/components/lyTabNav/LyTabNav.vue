/* 首页顶部导航栏 */
<template>
  <div class="ly-tab-nav">
      <ly-tab v-model="selectedId" :items="items" :options="options"></ly-tab>
  </div>
</template>

<script>
export default {
  name: "LyTabNav",
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "热门" },
        { label: "女装" },
        { label: "母婴" },
        { label: "内衣" },
        { label: "手机" },
        { label: "百货" },
        { label: "鞋包" },
        { label: "电器" },
        { label: "男装" },
        { label: "食品" },
        { label: "电脑" },
        { label: "运动" },
      ],
      options: {
        activeColor: '#e02e24'
        // 可在这里指定labelKey为你数据里文字对应的字段
      }
    };
  }
};
</script>

<style lang="less" scoped>
    .ly-tab-nav{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>

