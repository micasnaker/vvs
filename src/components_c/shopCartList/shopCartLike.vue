<!-- 商品列表 -->
<template>
  <div class="shop">
      <div class="heade_wrap">
          <i><img src="../../assets/images/shopCar/shoplike@2x.png" alt=""></i>
      </div>
      <div class="shopList">
      
      <div class="shop_wrap" v-for="(item, index) in shopCartLike" :key="index" @click="goDetail(item.id)">
          <div class="shop_img"><img :src="item.img" alt="" v-lazy="item.img"></div>
          <div class="title_wrap">
              <p>粒大饱满，美味健康</p>
          </div>
          <span class="shop_name">{{item.name}}</span>
          <div class="price_wrap">
            <span>UFV {{item.price}}</span>
          <p>{{item.price_origin}}</p>
          </div>
      </div>

  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        
    };
  },

  props: ["shopCartLike"],

  components: {},

  computed: {},

  mounted(){},

  methods: {
      //  跳转商品详情页
      goDetail(id){
          this.$router.push({name:'GoodsInfo',params:{id}})
      }
  }
}

</script>

<style lang="scss" scoped>
.shop{
    background-color: #fff;
    .heade_wrap{
        width: 100%;
        text-align: center;
        // margin-top: px2rem(20);
        padding-top: px2rem(20);
    }
    .shopList{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        justify-content: space-around;
        z-index: 98;
        margin-bottom: 20%;

        .shop_wrap{
            width: px2rem(285);
            height: px2rem(380);
            margin-top: px2rem(63);
            margin: 12px 12px;
            background-color: rgba(244,244,244,1);
            p{
                width: px2rem(285)
            }
            .shop_img{
                width: px2rem(255);
                margin: 0 auto;
                text-align: center;
                padding-top: px2rem(30);
                img{
                    width: px2rem(225);
                    height: px2rem(225);
                }
            }
            .title_wrap{
                width: 100%;
                height: px2rem(34);
                background-color: #D0C8B2;
                margin-bottom: px2rem(10);
                p{
                    float: left;
                    padding-left: px2rem(20);
                    font-size: px2rem(18);
                    line-height: px2rem(34);
                    color: rgba(159, 138, 96, 1);
                    font-family: PingFangSC-regular;
                }
            }
            .shop_name{
                margin-top: px2rem(10);
                font-size: px2rem(22);
                color: rgba(85, 85, 85, 1);
                font-family: PingFangSC-regular;
                padding-left: px2rem(9);
            }
            .price_wrap{
                width:px2rem(285);
                height: px2rem(34);
                line-height: px2rem(34);
                span{
                    float: left;
                    color: rgba(237,23,9,1);
                    font-size: px2rem(20);
                    font-family: PingFangSC-regular;
                    margin-left: px2rem(9);
                }
                p{
                    text-decoration:line-through;
                    font-size: px2rem(20);
                    color: rgba(102, 100, 102, 1);
                    font-family: PingFangSC-regular;
                    text-align: center;
                }
            }
            .print_wrap{
                width:px2rem(285);
                height: px2rem(34);
                line-height: px2rem(34);
                span{
                    float: left;
                    color: rgba(102, 100, 102, 1);
                    font-size: px2rem(18);
                    font-family: PingFangSC-regular;
                    margin-left: px2rem(9);
                }
                .img_buy{
                    text-align: center;
                    img{
                        padding-top: px2rem(7);
                    }
                }
                
            }
        }
}
}

</style>
