<!--  -->
<template>
  <div class="tabbar">
     <mt-tabbar fixed>
  <mt-tab-item id="home">
    <div mint-tab-item-icon @click="goTo('/home')" :class="{on:'/home'===$route.path}">
    <img slot="icon" src="../assets/images/home/home_red.png" v-if="$route.path==='/home'">
    <img slot="icon" src="../assets/images/home/home_red.png" v-else-if="$route.path==='/search'">
    <img slot="icon" src="../assets/images/home/home_red.png" v-else-if="$route.path==='/'">
    <img slot="icon" src="../assets/images/home/home@2x.png" v-else>
    </div>
    <div class="mint-tab-item-label">首页</div>
  </mt-tab-item>
  <mt-tab-item id="vip">
    <div mint-tab-item-icon><img slot="icon" :class="{on:'/vip'===$route.path}" src="../assets/images/home/vip.png" @click="See('https://shop.gamevvs.com/hysc/index')"></div>
    <!-- <div mint-tab-item-icon><img slot="icon" src="../assets/images/home/vip.png" @click="goTo('/vip')"></div> -->
    <div class="mint-tab-item-label">会员商城</div>
  </mt-tab-item>
  <mt-tab-item id="shopcar">
    <div mint-tab-item-icon :class="{on:'/shopcar'===$route.path}" @click="goTo('/shopcar')">
    <img slot="icon" src="../assets/images/home/shopCar_red@2x.png" v-if="$route.path==='/shopcar'">
    <img slot="icon" src="../assets/images/home/shopCar.png" v-else>
    </div>
    <div class="mint-tab-item-label">购物车</div>
  </mt-tab-item>
  <mt-tab-item id="person">
    <div mint-tab-item-icon icon-gouwuche @click="goTo('/person')">
    <img slot="icon" src="../assets/images/home/person_red@2x.png" v-if="$route.path==='/person'">
    <img slot="icon" src="../assets/images/home/person.png" v-else>
    </div>
    <div class="mint-tab-item-label">个人</div>
  </mt-tab-item>
</mt-tabbar>

  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
export default {
  data () {
    return {
    };
  },

  watch:{
    // 监听路由
    // $route(to,from){
    //   console.log(to.path)
    // }
  },

  computed: {},

  mounted(){},

  methods: {
      goTo(path){
      this.$router.replace(path)
    },

    // 跳转外部链接
    See(e){
      window.location.href = e
    }
  }
}

</script>

<style lang="scss" scoped>
.mint-tabbar.is-fixed {
    right: 0;
    bottom: px2rem(-2);
    left: 0;
    position: fixed;
    z-index: 99;
    height: px2rem(120);
    display: flex;
    justify-content:center;
    align-items:Center;
    .mint-tab-item{
      height: px2rem(80);
    }
      .mint-tab-item-icon{
        width: px2rem(44);
        height: px2rem(44);
      }
      .mint-tab-item-label{
        font-size: px2rem(25);
        font-weight: bold;
        font-family: Microsoft Yahei;
        color:rgba(102,100,102,1);
        margin-top: px2rem(5);
        img{
          height: px2rem(43);
          width: px2rem(44);
        }
      }
      .on{
        color: rgba(237,23,9,1);
      }

}
</style>
