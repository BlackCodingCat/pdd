<template>
  <div class="casual">
    <div class="swiper-container">
      <!-- 轮播内容 -->  
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./imgs/rowing/s1.png" alt width="100%">
        </div>
        <div class="swiper-slide">
          <img src="./imgs/rowing/s2.png" alt width="100%">
        </div>
        <div class="swiper-slide">
          <img src="./imgs/rowing/s3.png" alt width="100%">
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Casual",
  mounted() {
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
  }
};
</script>

<style lang="less" scoped>
.casual {
  width: 100%;
}
</style>
