<template>
  <div class="casual" v-if="homecasual.length > 0">
    <div class="swiper-container">
      <!-- 轮播内容 -->
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(casual,index) in homecasual" :key="index">
          <img :src="casual.imgurl" width="100%">
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { mapState } from "vuex";
import "swiper/dist/css/swiper.css";
export default {
  name: "Casual",
  computed: {
    //拿到轮播图数据
    ...mapState(["homecasual"])
  },
  mounted() {
    this.$store.dispatch("reqHomeCasual");
  },
  watch: {
    homecasual() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          //自动轮播
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
          //形成环路
          loop: true,
          //修改swiper自己或子元素时，自动初始化swiper
          observer: true,
          //修改swiper的父元素时，自动初始化swiper
          observeParents: true,
          //轮播图效果
          effect: "coverflow",
          //分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.casual {
  width: 100%;
}
</style>
