<template>
  <div class="hot-nav">
    <!-- nav内容区域 -->
    <div class="hot-nav-container" v-if="homenavs.length > 0">
      <div class="hot-nav-inner">
        <div class="hot-nav-item" v-for="(nav,index) in homenavs" :key="index">
          <img :src="nav.iconurl" alt>
          <span>{{nav.icontitle}}</span>
        </div>
      </div>
    </div>
    <!-- nav底部滚动条 -->
    <div class="bottom-bar-container">
      <div class="bottom-bar-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HotNav",
  data() {
    return {
      navContainerW:
        window.innerWidth * 0.97346 ||
        document.documentElement.clientWidth * 0.97346 ||
        document.body.clientWidth * 0.97346,
      navInnerW:
        window.innerWidth * 0.97346 * 1.6 ||
        document.documentElement.clientWidth * 0.97346 * 1.6 ||
        document.body.clientWidth * 0.97346 * 1.6,
      BarContainerW: 100,
      BarInnerW: 0,
      startX: 0,
      navMoveX: 0,
      barMoveX: 0,
      endFlag: 0
    };
  },
  mounted() {
    this.$store.dispatch("reqHomeNavs");
  },
  computed: {
    ...mapState(["homenavs"]),
    innerBarStyle() {
      return {
        width: `${this.BarInnerW}px`,
        left: `${this.barMoveX}px`
      };
    }
  },
  watch: {
    homenavs() {
      this.$nextTick(() => {
        //获取底部滚动条的宽度
        this.getBottomBarW();
        //绑定移动事件
        this.bindEvent();
      });
    }
  },
  methods: {
    //获取底部滚动条的宽度
    getBottomBarW() {
      this.BarInnerW =
        (this.BarContainerW * this.navContainerW) / this.navInnerW;
    },
    //绑定移动事件
    bindEvent() {
      let navContainer = document.getElementsByClassName(
        "hot-nav-container"
      )[0];
      navContainer.addEventListener("touchstart", this.handleTouchStart, false);
      navContainer.addEventListener("touchmove", this.handleTouchMove, false);
      navContainer.addEventListener("touchend", this.handleTouchEnd, false);
    },
    handleTouchStart(event) {
      this.startX = event.touches[0].pageX;
    },
    handleTouchMove(event) {
      //nav区域的滚动距离
      this.navMoveX = event.touches[0].pageX - this.startX;
      //计算滚动条的滚动距离
      this.barMoveX = -(
        (this.BarContainerW * this.navMoveX) / this.navInnerW -
        this.endFlag
      );
      //边界值处理
      if (this.barMoveX <= 0) {
        this.barMoveX = 0;
      }
      if (this.barMoveX >= this.BarContainerW - this.BarInnerW) {
        this.barMoveX = this.BarContainerW - this.BarInnerW;
      }
    },
    handleTouchEnd(event) {
      //结束以后记录本次的bar移动距离
      this.endFlag = this.barMoveX;
    }
  }
};
</script>

<style lang="less" scoped>
.hot-nav {
  width: 100%;
  height: 180px;
  background-color: rgb(7, 145, 196);
  padding-top: 5px;
  position: relative;
  .hot-nav-container {
    width: 100%;
    width: 97.346%;
    height: 180px;
    margin: 0 auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #ffffff;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .hot-nav-inner {
      width: 160%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      padding-top: 10px;
      .hot-nav-item {
        width: 12.5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        img {
          width: 55%;
          margin-bottom: 5px;
        }
        span {
          color: #444;
          font-size: 14px;
        }
      }
    }
  }
  .bottom-bar-container {
    width: 100px;
    height: 2px;
    background-color: #cccccc;
    border-radius: 2px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: 10px;
    .bottom-bar-inner {
      width: 0;
      height: 2px;
      border-radius: 2px;
      background-color: orangered;
      position: absolute;
      left: 0;
    }
  }
  .adver {
    width: 100%;
    position: absolute;
    bottom: 10px;
  }
}
</style>
