<!--  -->
<template>
  <div class="tabbar">
    <mt-tabbar fixed>
      <mt-tab-item id="home">
        <span mint-tab-item-icon @click="goTo('/home')" :class="{on:'/home'===$route.path}">
          <i class="iconfont icon-shouye1"></i>
        </span>
        <div :class="{on:'/home'===$route.path}" v-if="$route.path==='/home'">首页</div>
        <div class="mint-tab-item-label" v-else>首页</div>
      </mt-tab-item>
      <mt-tab-item id="vip">
        <span mint-tab-item-icon @click="See('https://shop.gamevvs.com/hysc/index')" :class="{on:'/vip'===$route.path}">
          <i class="iconfont icon-icon-test"></i>
        </span>
        <div :class="{on:'/vip'===$route.path}" v-if="$route.path==='/vip'">会员商城</div>
        <div class="mint-tab-item-label" v-else>会员商城</div>
      </mt-tab-item>
      <mt-tab-item id="shopcar">
        <span mint-tab-item-icon @click="goTo('/shopcar')" :class="{on:'/shopcar'===$route.path}">
          <i class="iconfont icon-gouwuche"></i>
        </span>
        <div :class="{on:'/shopcar'===$route.path}" v-if="$route.path==='/shopcar'">购物车</div>
        <div class="mint-tab-item-label" v-else>购物车</div>
      </mt-tab-item>
      <mt-tab-item id="person">
        <span mint-tab-item-icon @click="goTo('/person')" :class="{on:'/person'===$route.path}">
          <i class="iconfont icon-geren4"></i>
        </span>
        <div :class="{on:'/person'===$route.path}" v-if="$route.path==='/person'">个人</div>
        <div class="mint-tab-item-label" v-else>个人</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";
export default {
  data() {
    return {};
  },

  watch: {
    // 监听路由
    // $route(to,from){
    //   console.log(to.path)
    // }
  },

  computed: {},

  mounted() {},

  methods: {
    goTo(path) {
      this.$router.replace(path);
    },

    // 跳转外部链接
    See(e) {
      window.location.href = e;
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-tabbar.is-fixed {
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 99;
  height: px2rem(120);
  display: flex;
  justify-content: center;
  align-items: Center;
  a {
    color: rgba(157, 157, 157, 1);
  }
  .mint-tab-item {
    height: px2rem(80);
    .mint-tab-item-label {
      font-size: px2rem(25);
      // font-weight: bold;
      font-family: Microsoft Yahei;
      color: rgba(102, 100, 102, 1);
      margin-top: px2rem(5);
      .on {
        color: rgba(237, 23, 9, 1);
        font-family: Microsoft Yahei;
        font-size: px2rem(25);
        // font-weight: bold;
        margin-top: px2rem(5);
      }
      .iconfont {
        font-size: px2rem(45);
        // font-weight: bold;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .mint-tabbar, .closeBookList, .BottomProgress {
        padding-bottom: px2rem(34) !important
    }
}
</style>
