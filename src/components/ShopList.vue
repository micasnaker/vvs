<!-- 商品列表 -->
<template>
  <div class="shop" v-if="shoplist.length>0">
      <div class="heade_wrap">
          <i><img src="../assets/images/home/new2x.png" alt=""></i>
      </div>
      <div class="shopList">
      
      <div class="shop_wrap" v-for="(item, index) in shoplist" :key="index" @click="goDetail(item.id)">
          <div class="shop_img"><img :src="item.img" alt="" v-lazy="item.img"></div>
          <div class="title_wrap">
              <p>粒大饱满，美味健康</p>
          </div>
          <span class="shop_name">{{item.name}}</span>
          <div class="price_wrap">
            <span>UFV {{item.price}}</span>
          <p>{{item.price_origin}}</p>
          </div>
          <div class="print_wrap">
              <span>已售417件</span>
            <div class="img_buy"><img src="../assets/images/home/btn_buy.png" alt=""></div>
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

  props: ["shoplist"],

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
    .heade_wrap{
        width: 50%;
        float: left;
        margin-left: 5%;
        margin-top: px2rem(20);
        img{
            width: px2rem(153);
            height: px2rem(30);
        }
    }
    .shopList{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        // flex-flow: row wrap;
        justify-content: space-between;
        z-index: 98;
        .shop_wrap{
            width: px2rem(285);
            height: px2rem(420);
            margin-top: px2rem(63);
            margin: 12px 12px;
            background-color: #DCDCDC;
            margin-right: px2rem(50);
            margin-left: px2rem(40);
            p{
                width: px2rem(285)
            }
            .shop_img{
                width: px2rem(255);
                margin: 0 auto;
                text-align: center;
                img{
                    width: px2rem(225);
                    height: px2rem(225);
                    margin: px2rem(20) px2rem(10);
                }
            }
            .title_wrap{
                width: 100%;
                height: px2rem(34);
                background-color: #D0C8B2;
                margin-bottom: px2rem(10);
                p{
                    float: left;
                    padding-left: px2rem(9);
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
                    color: rgba(162, 49, 62, 1);
                    font-size: px2rem(20);
                    font-family: PingFangSC-regular;
                    margin-left: px2rem(9);
                }
                p{
                    text-decoration:line-through;
                    font-size: px2rem(18);
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
                        width: px2rem(100);
                        height: px2rem(32.03);
                    }
                }
                
            }
        }
}
}

</style>
