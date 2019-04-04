<!--  -->
<template>
  <div class="home">
    <!-- 头部header -->
    <router-link to="/search">
    <div class="Search_wrap">
      <i><img src="../assets/images/home/ufvlogo.png" alt=""></i>
      <div class="right_wrap">
        <label for=""><img src="../assets/images/home/search@2x.png" alt=""></label>
      <!-- <input type="text" placeholder="搜索商品，共4411款好物"> -->
      <input type="text">
        <p>搜索商品，共{{all}}款好物</p>
      </div>
    </div>
    </router-link>

    <!-- 轮播图 -->
    <swiper :banners=banners></swiper>

  <!-- 菜单2 -->
    <div class="grid">
        <div class="grid_content">
        <!-- <div class="group"><img src="../assets/images/home_wrap/1@2x.png" alt=""><p class="name_warp">全部</p></div> -->
        <router-link to="" class="group" v-for="(item, index) in grids" :key="index"><img :src="item.icon" alt="" v-lazy="item.icon"><p class="name_warp">{{item.name}}</p></router-link>
        <router-link to="/search/car" class="group"><img src="../assets/images/home_wrap/5@2x.png" alt=""><p class="name_warp">汽车</p></router-link>          
        <router-link to="" class="group"><img src="../assets/images/home_wrap/8@2x.png" alt=""><p class="name_warp">新品</p></router-link>
        <router-link to="" class="group"><img src="../assets/images/home_wrap/9@2x.png" alt=""><p class="name_warp">推荐</p></router-link>
        <div @click="gofenlei" class="group"><img src="../assets/images/home_wrap/10@2x.png" alt=""><p class="name_warp">热卖</p></div>
        <!-- <div class="group"><img src="../assets/images/home_wrap/10@2x.png" alt=""><p class="name_warp">热卖</p></div> -->
        </div>
    </div>

      <!-- 商品列表 -->

    <!-- 新品 -->
    <shopList :shoplist=shoplist></shopList>

    <!-- 热卖 -->
    <hotSell :hotsell=hotsell></hotSell>

    <!-- 推荐 -->
    <reCom :recoms=recoms></reCom>
    
  </div>
</template>

<script>
import progress from './Progress'
import service from '../../service/index.js'
import shopList from '../components/ShopList'
import hotSell from '../components/HotSell'
import reCom from '../components/Recom'
import swiper from '../components/swiper/swiper'

export default {
  name:"home",
  data () {
    return {
      mounthSealsPercent:0,
      shops:0,
      banners:[],
      grids:[],
      shoplist:[],
      hotsell:[],
      recoms:[],
      recoms_length:'',
      total:'',
      all:localStorage.getItem("all"),
      ddd:null
    };
  },

  created(){

  },

  components: {
    shopList,
    hotSell,
    reCom,
    swiper
  },

  computed: {
  },

  mounted(){

    service.getBanners()
    .then(res=>{
      this.banners = res.data.data;
      // console.log(this.banners)
    })

    service.getGrids()
    .then(res=>{
      this.grids = res.data.data;
      // console.log(this.grids)
    })

    service.getShops({type:1})
    .then(res=>{
      this.shoplist = res.data.data;
      // console.log(JSON.stringify(res.data.data.length)+"shoplist")
    })

    service.getShops({type:2})
    .then(res=>{
      this.hotsell = res.data.data;
      // console.log(JSON.stringify(res)+"hotsell")
    })
    
    service.getShops({type:3})
    .then(res=>{
      this.recoms = res.data.data;
        
        var sss = []
        this.shoplist.forEach(element=>{
          sss.push(element)
        })
        this.recoms.forEach(element=>{
          sss.push(element)
        })
        this.hotsell.forEach(element=>{
          sss.push(element)
        })
        var ddd = sss.length
        localStorage.setItem("all",ddd)
      })
  },

  methods: {
    gofenlei(){
      this.$router.push('person')
    }
  }
}

</script>

<style lang="scss" scoped>
.home{
  margin-top: px2rem(10);
  background-color: #fff;
  .Search_wrap{
    height: px2rem(70);
    display: flex;
    justify-content: space-between;
    margin: px2rem(10) 0;
    i{
      width: px2rem(100);
      height: px2rem(30);
      line-height: px2rem(90);
      margin-left: px2rem(30);
    }
    .right_wrap{
      margin-right: px2rem(80);
      background-color: rgba(236,236,236,1);
      label{
        line-height: px2rem(80);
        padding-left: px2rem(30);
      }
      input{
        width: px2rem(450);
        height: px2rem(50);
        background-color: rgba(236,236,236,1);
        outline:none;
        outline:none;  
        padding-left: px2rem(30);
        border:0px;
        font-size: px2rem(24);
      }
      p{
          margin-top: px2rem(-60);
          margin-left: px2rem(70);
          height: px2rem(50);
          color: rgba(133,133,133,1);
          font-size: px2rem(23);
          font-family: PingFangSC-regular;
          -webkit-text-fill-color: initial;
          
      }
      input::-webkit-input-placeholder{
        color: rgba(133,133,133,1);
        font-size: px2rem(22);
        font-family: PingFangSC-regular;
        -webkit-text-fill-color: initial;
      }
    }
  }
  .grid{
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: px2rem(10);
    flex-flow: row wrap;
    justify-content: space-around;
      .grid_content{
        display: flex;
        height: 100%;
        width: px2rem(700);
        flex-wrap: wrap;
        margin-left: px2rem(35);
        align-items:center;
        .group{
          padding-right: px2rem(50);
          margin: 0 auto;
          margin-top: px2rem(20);
          img{
            width: px2rem(70);
            height: px2rem(70);
          }
          .name_warp{
          text-align: center;
          padding-top: px2rem(8);
          font-size: px2rem(20);
        }
        } 
        .group:nth-child(n+5){
          margin-left: px2rem(10)
        }
      }
    
  }
}
</style>

<style lang="scss">
html,
body,
.home {
    background-color: #fff;
    // height: 100%;
}
</style>