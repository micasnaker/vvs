<!--  -->
<template>
  <!-- <div>
      {{$route.params.id}}
  </div>-->
  <div class="shop">
    <div class="shopList">
      <!-- <p>{{this.$route.params.id}}</p> -->
      <div class="shop_wrap" @click="goDetail(item.id)" v-for="(item, index) in searchList.list" :key="index">
        <div class="shop_img">
          <img :src="item.img" alt>
        </div>
        <div class="title_wrap">
          <p>{{item.tag}}</p>
        </div>
        <span class="shop_name">{{item.name}}</span>
        <div class="price_wrap">
          <span>UFV {{item.price}}</span>
          <p>UFV {{item.price_origin}}</p>
        </div>
        <div class="print_wrap">
          <span>已售{{item.sold_count}}件</span>
          <div class="img_buy">
            <img src="../../../assets/images/search/buy_btn@2x.png" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import services from "../../../../service/index.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      searchList: [],
      fid: this.$route.params.fids,
      cat_id: this.$route.params.ids,
      price_types: this.$route.params.price_type,
      types: this.$route.params.type,
      ks: this.$route.params.k
    };
  },

  components: {},

  computed: {},

  mounted() {
    services
      .getSearchShopList({
        cat1: '',
        cat2: '',
        price_type: this.price_types,
        type: this.types,
        k: this.ks,
        page: 1,
        page_size: 1
      })
      .then(res => {
        if (res.data.error_code == 0) {
          this.searchList = res.data.data;
        } else if (res.data.error_code == 1100) {
          Toast("参数错误");
          console.log("参数错误");
        }
        console.log(res);
      });
  },

  methods: {
    //  跳转商品详情页
      goDetail(id){
          this.$router.push({name:'ShopIntro',params:{id}})
      }
  }
};
</script>

<style lang="scss" scoped>
.shop {
  // background-color: red;
  // margin-top: -72%;
//   width: 100%;
  margin-left: px2rem(135);
  position: absolute;
  .heade_wrap {
    width: 50%;
    float: left;
    margin-left: 5%;
    margin-top: px2rem(20);
    img {
      width: px2rem(153);
      height: px2rem(30);
    }
  }
  .shopList {
    // width: 100%;
    height: 100%;
    z-index: 98;
    width: 50%;
    .shop_wrap {
      // width: 63%;
      height: px2rem(420);
      margin-top: px2rem(63);
      margin: 12px 12px;
      background-color: #dcdcdc;
      margin-right: px2rem(50);
      margin-left: px2rem(40);
          display: flex;
    flex-wrap: wrap;
    // flex-flow: row wrap;
    justify-content: space-between;
      .shop_img {
        margin: 0 auto;
        text-align: center;
                  width: px2rem(205);
          height: px2rem(210);
        img {
          width: px2rem(185);
          height: px2rem(200);
          margin: px2rem(20) px2rem(10);
        }
      }
      .title_wrap {
        width: 100%;
        height: px2rem(34);
        background-color: #d0c8b2;
        margin-bottom: px2rem(10);
        p {
          float: left;
          padding-left: px2rem(9);
          font-size: px2rem(18);
          line-height: px2rem(34);
          color: rgba(159, 138, 96, 1);
          font-family: PingFangSC-regular;
        }
      }
      .shop_name {
        margin-top: px2rem(10);
        font-size: px2rem(22);
        color: rgba(85, 85, 85, 1);
        font-family: PingFangSC-regular;
        padding-left: px2rem(9);
      }
      .price_wrap {
        // width: px2rem(285);
        width: 100%;
        height: px2rem(34);
        line-height: px2rem(34);
        span {
          float: left;
          color: rgba(162, 49, 62, 1);
          font-size: px2rem(20);
          font-family: PingFangSC-regular;
          margin-left: px2rem(9);
        }
        p {
          text-decoration: line-through;
          font-size: px2rem(18);
          color: rgba(102, 100, 102, 1);
          font-family: PingFangSC-regular;
          text-align: center;
        }
      }
      .print_wrap {
        width: px2rem(285);
        height: px2rem(34);
        line-height: px2rem(34);
        span {
          float: left;
          color: rgba(102, 100, 102, 1);
          font-size: px2rem(18);
          font-family: PingFangSC-regular;
          margin-left: px2rem(9);
        }
        .img_buy {
          text-align: center;
          img {
            width: px2rem(100);
            height: px2rem(32.03);
          }
        }
      }
    }
  }
}
</style>
