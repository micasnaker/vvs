<!--  -->
<template>
    <div class="goodsInfo">
        <!-- 头部 -->
    <div class="tophead">
      <div class="th-l" @click="backAction"><i class="icon iconfont"><img src="../../assets/images/shopCar/left2x.png" alt=""></i></div>
      <div class="th-title">商品详情</div>
      <div class="th-r">
          <slot name=r>
              <img @click="goShopCar" src="../../assets/images/home/goodsInfo（1）/shopcar@2x.png" alt="" class="imgs">
              <img src="../../assets/images/home/goodsInfo（1）/share@2x.png" alt="" class="imgs">
          </slot>
      </div>
  </div>

  <!-- 轮播图 -->
  <div class="swiper_wrap" :auto="4000">
      <mt-swipe>
      <mt-swipe-item v-for="(item, index) in goodsInfo.imgs" :key="index"><img :src="item.path" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 商品信息 -->
    <div class="content">
        <div class="info">
        <div class="info_wrap">
            <span>【{{goodsInfo.cat1_name}}】</span>
            <span>{{goodsInfo.name}}</span>
        </div>
        <p>已出售{{goodsInfo.sold_count}}件</p>
        <div class="info_content">
            <div>

            <span v-if="goodsInfo.price_type==3">UFV {{goodsInfo.price}}</span>
            <span v-else-if="goodsInfo.price_type==1">银鱼 {{goodsInfo.price}}</span>
            <span v-else>金鱼 {{goodsInfo.price}}</span>

            <span v-if="goodsInfo.price_type==3"> UFV {{goodsInfo.price_origin}}</span>
            <span v-else-if="goodsInfo.price_type==1"> 银鱼 {{goodsInfo.price_origin}}</span>
            <span v-else> 金鱼 {{goodsInfo.price_origin}}</span>

            </div>
            <p>{{goodsInfo.sold_count}}人已买</p>
        </div>
    </div>
    </div>

    <!-- 商品切换栏 -->
    <div class="tab">
        <div class="tab-item">
          <!-- replace 加上replace: true后，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。 -->
          <router-link :to="{name:'ShopIntro'}" replace>商品简介</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{name:'ShopParame'}" replace>商品参数</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{name:'ShopNotice'}" replace>购买须知</router-link>
        </div>
      </div>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>

        <!-- 底部top -->
        <div class="top_car">
            <div class="logo">
                <img src="../../assets/images/home/goodsInfo（1）/collect@2x.png" alt="">
                <img src="../../assets/images/home/goodsInfo（1）/callman@2x.png" alt="">
            </div>
            <div class="shop_btn">
                <img @click="addShop" src="../../assets/images/home/goodsInfo（1）/car_btn@2x.png" alt="">
                <img src="../../assets/images/home/goodsInfo（1）/buy_btn@2x.png" alt="">
            </div>
        </div>

    </div>

</template>

<script>
import services from '../../../service/index.js'
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
        id:this.$route.params.id,
        goodsInfo:[],
        count:1,
    };
  },

  components: {
  },

  created(){
  },

  watch: {
  },

  computed: {},

  mounted(){
    let id = this.$route.params.id;
    var goodsId = localStorage.setItem("goods_id",id)
      services.getShopGoodsInfo({
          goods_id:this.id
      })
        .then(res=>{
            if(res.data.error_code==0){
            this.goodsInfo = res.data.data;
            // console.log(JSON.stringify(this.goodsInfo)+"goosInfo")
            }
        
        })
  },

  methods: {
    //   去购物车
        goShopCar(){
            this.$router.push('/ShopCar')
        },
    //   返回
      backAction(){
          if(this.backurl){
              this.$router.push(this.backurl);
          }else{
              this.$router.go(-1);
          }
      },

    // 加入购物车
    addShop(){
        var goods_id = this.id;
        let count = this.count;
        let token_sc= sessionStorage.getItem('LoginToken');
        if(token_sc){
        this.token_sc = token_sc;
        }

        let id= sessionStorage.getItem('LoginUser');
        if(id){
        this.id = id;
        }

        services.addShopToCart({
            id : this.id,
            token_sc : token_sc,
            goods_id : goods_id,
            count : count,
        })
        .then(res=>{
            // console.log(res)
            if(res.data.error_code==0){
                Toast({
                message: '添加成功',
                position: 'middle',
                duration: 1500
                });
            }else if(res.data.error_code==2601){
                Toast({
                message: '不存在的商品或已下架',
                position: 'middle',
                duration: 1500
                });
            }else{
                Toast({
                message: '添加购物车失败',
                position: 'middle',
                duration: 1500
                });     
            }
        })
    }
  }
}

</script>

<style lang="scss" scoped>
.goodsInfo{
    height: 100%;
    background-color: rgba(244,244,244,1);
    .tophead{
    display: flex;
    z-index: 99;
    position: fixed;
    justify-content: space-between;
    height: px2rem(120);
    line-height: px2rem(120);
    color: rgba(16,16,16,1);
    font-size: $text-size-imp;
    background-color: #eee;
    font-weight: bold;
    width: 100%;
    .th-l{
        padding-left: px2rem(25);
        img{
            width: px2rem(28);
            height: px2rem(40);
        }
    }
    .th-title{
        text-align: center;
        flex:1 auto;
    }
    .th-r{
        padding-right: px2rem(25);
        .imgs{
            width: px2rem(30);
            height: px2rem(30);
            margin:0 px2rem(10);
        }
    }
    .icon::before{
        font-size: $text-size-imp;
    }
}
.swiper_wrap{
    width: 100%;
    height: px2rem(560);
    img{
    width: 100%;
    height: px2rem(580); 
    }
  }

  .content{
      width: 100%;
      height: px2rem(160);
      margin-top: px2rem(20);
      background-color: #fff;
      line-height: px2rem(40);
      .info{
          width: px2rem(730);
          height: px2rem(180);
          margin: px2rem(15) px2rem(15);
          .info_wrap{
              padding: px2rem(5) px2rem(10);
              span{
                  font-size: px2rem(23.5);
                  color: rgba(16,16,16,1);
                  font-family: PingFangSC-regular;
              }
          }
          p{
            color: rgba(102,100,102,1);
            font-size: px2rem(23);
            font-family: PingFangSC-regular;
            margin-left: px2rem(30);
          }
          .info_content{
              display: flex;
              justify-content: space-between;
              margin-top: px2rem(10);
              div{
                  width: px2rem(290);
                  display: flex;
                  justify-content: space-between;
                  margin-left: px2rem(30);
                  span{
                  color:rgba(237,23,9,1);
                  font-size: px2rem(23.5);
                  font-family: PingFangSC-regular;
              }
              span:last-child{
                  color: rgba(102,100,102,1);
                  text-decoration:line-through;
              }
              }
          }
      }
  }
  .tab{
    width: 100%;
    height:px2rem(80);
    line-height:px2rem(80);
    background:rgba(224,224,224,1);
    .tab-item{
        float: left;
        width: 32.999999%;
        text-align:center;
        font-size:px2rem(28);
        border: px2rem(1) solid rgba(187,187,187,1);
        a{
            display:block;
            position:relative;
            color: rgba(16,16,16,1);
        }
        .router-link-active{
            color: #fff;
            background-color: rgba(82,80,82,1)
        }
    }
  }
  .top_car{
      position: fixed;
      left:0;
      bottom:0;
      z-index:99;
      width:100%;
      height: px2rem(70);
      display: flex;
      border-top: px2rem(1) solid #ddd;
      background-color: #fff;
      justify-content: space-between;
      .logo{
          float: left;
          width: px2rem(150);
          margin: 0 auto;
          line-height: px2rem(120);
          img{
              width: px2rem(34);
              height: px2rem(60);
              margin-left: px2rem(25);
          }
      }
      .shop_btn{
        //   width: px2rem(540);
        //   height: px2rem(100);
        img{
            width: px2rem(262);
            height: px2rem(80);
        }
      }
  }
}

</style>
