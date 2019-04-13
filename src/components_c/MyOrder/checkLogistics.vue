<!--  -->
<template>
  <div class="logistics">
    <topHead :title="title"></topHead>
    <div class="container">
      <div class="top_wrap" v-if="LogisticsList.order_status==0">
        <p>待确认</p>
        <p>[已完成]</p>
        <p>[已发货]</p>
        <p>[已撤销]</p>
      </div>

      <div class="top_wrap" v-else-if="LogisticsList.order_status==2">
        <p>[待确认]</p>
        <p>已完成</p>
        <p>[已发货]</p>
        <p>[已撤销]</p>
      </div>

      <div class="top_wrap" v-else-if="LogisticsList.order_status==1">
        <p>[待确认]</p>
        <p>[已完成]</p>
        <p>已发货</p>
        <p>[已撤销]</p>
      </div>

      <div class="top_wrap" v-else>
        <p>[待确认]</p>
        <p>[已完成]</p>
        <p>[已发货]</p>
        <p>已撤销</p>
      </div>

      <div class="content_wrap">
        <p>{{LogisticsList.contact_name}}</p>
        <p>{{LogisticsList.contact_phone}}</p>
        <p>{{LogisticsList.contact_address}}</p>
        <p>订单编号：{{LogisticsList.order_number}}</p>
        <p>下单时间：{{LogisticsList.created_at}}</p>
      </div>

      <div class="myorderall">
        <div class="order-content">
          <div class="content" v-for="(item, index) in LogisticsList.orders_goods" :key="index">
            <div class="img_wrap">
              <img :src="item.path" alt>
            </div>
            <div class="content_top">
              <p>{{item.goods_name}}</p>
              <div class="content_foot">
                <div class="price_wrap">
                  <span v-if="item.price_type==3">UFV {{item.price}}</span>
                  <span v-else-if="item.price_type==1">银鱼 {{item.price}}</span>
                  <span v-else>金鱼 {{item.price}}</span>

                  <span v-if="item.price_type==3">UFV{{item.price_origin}}</span>
                  <span v-else-if="item.price_type==1">银鱼{{item.price_origin}}</span>
                  <span v-else>金鱼{{item.price_origin}}</span>
                </div>
                <p>X1</p>
              </div>
            </div>
          </div>

          <div class="footer">
            <div class="footer_p">
              <p>共计{{LogisticsList.goods_count_total}}件商品 总计：UFV {{LogisticsList.fly_fish_coin_price}} 银鱼 {{LogisticsList.silver_fish_price}} 金鱼{{LogisticsList.gold_fish_price}}</p>
            </div>
          </div>
          <div class="cargo">
            <div class="cargo_img">
              <img src="../../assets/images/person/myorder/logistics2x.png" alt>
              <img @click="confirmShop" src="../../assets/images/person/myorder/enter@2x.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div class="hint">
        <p>店家正在为您准备商品，如有疑问请致电400-000-0000</p>
        <p>订单已撤销，资产已原路退回，如有疑问请致电400-000-0000</p>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/TopHead";
import services from "../../../service/index.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      title: "订单详情",
      allOrderList: this.$route.query.allOrderList,
      LogisticsList: []
    };
  },

  components: {
    topHead
  },

  computed: {},

  mounted() {
    let token = sessionStorage.getItem("LoginToken");
    if (token) {
      this.token = token;
      // console.log(token+'token_sc')
    }

    let id = sessionStorage.getItem("LoginUser");
    if (id) {
      this.id = id;
      // console.log(id+'tid')
    }
    services
      .ordersInfo({
        id: this.id,
        token_sc: this.token,
        orders_id: this.$route.query.orders_id
      })
      .then(res => {
        this.LogisticsList = res.data.data;
        //   console.log(this.LogisticsList)
      });
  },

  methods: {
    //  确认收货
    confirmShop() {
      let token = sessionStorage.getItem("LoginToken");
      if (token) {
        this.token = token;
        // console.log(token+'token_sc')
      }

      let id = sessionStorage.getItem("LoginUser");
      if (id) {
        this.id = id;
        // console.log(id+'tid')
      }
      services
        .ordersTakeDelivery({
          id: this.id,
          token_sc: this.token,
          orders_id: this.$route.query.orders_id
        })
        .then(res => {
          //   console.log(res.data)
          if (res.data.error_code == 0) {
            Toast("确认收货成功");
          } else if (res.data.error_code == 2800) {
            Toast("不存在的订单或非当前用户订单");
          } else if (res.data.error_code == 2801) {
            Toast("已发货订单才可确认收货	");
          } else if (res.data.error_code == 9000) {
            Toast("系统错误");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.logistics {
  height: 100%;
  .container {
    padding-top: 15%;
    .top_wrap {
      height: px2rem(75);
      line-height: px2rem(75);
      padding-left: px2rem(50);
      p {
        float: left;
        color: rgba(16, 16, 16, 1);
        font-family: PingFangSC-regular;
        font-size: px2rem(22);
      }
    }
    .content_wrap {
      height: 100%;
      line-height: px2rem(50);
      padding-left: px2rem(50);
      border-top: px2rem(1) solid #ddd;
      p {
        color: rgba(16, 16, 16, 1);
        font-family: SFUIText-regular;
        font-size: px2rem(22);
      }
    }
  }
  .myorderall {
    width: 100%;
    height: 100%;
    background-color: rgba(224, 224, 224, 1);
    .order-content {
      background-color: #fff;
      .head-top {
        width: 90%;
        height: px2rem(50);
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        border-bottom: px2rem(1) solid #ddd;
        line-height: px2rem(50);
        p {
          color: rgba(16, 16, 16, 1);
          font-size: px2rem(22);
          font-family: PingFangSC-regular;
        }
        p:last-child {
          color: rgba(229, 28, 35, 1);
        }
      }
      .content {
        width: 90%;
        height: px2rem(130);
        display: flex;
        justify-content: space-evenly;
        margin: 0 auto;
        .img_wrap {
          width: px2rem(135);
          height: px2rem(135);
          margin-left: px2rem(-120);
          margin-top: px2rem(10);
          img {
            width: px2rem(125);
            height: px2rem(125);
          }
        }
        .content_top {
          line-height: px2rem(60);
          p {
            color: rgba(16, 16, 16, 1);
            font-size: px2rem(22);
            font-family: PingFangSC-regular;
          }
          .content_foot {
            display: flex;
            justify-content: space-between;
            height: px2rem(30);
            span {
              color: rgba(16, 16, 16, 1);
              font-size: px2rem(22);
              font-family: PingFangSC-regular;
            }
            span:first-child {
              color: rgba(237, 23, 9, 1);
            }
            span:last-child {
              text-decoration: line-through;
            }
          }
        }
      }
      .footer {
        height: px2rem(60);
        width: 100%;
        margin-top: px2rem(20);
        display: flex;
        justify-content: space-around;
        .footer_p {
          width: px2rem(700);
          height: px2rem(30);
          margin-top: px2rem(10);
          padding-left: px2rem(25);
          p {
            color: rgba(16, 16, 16, 1);
            font-size: px2rem(22);
            font-family: PingFangSC-regular;
          }
        }
      }
      .cargo {
        width: 100%;
        height: px2rem(50);
        .cargo_img {
          float: right;
          img {
            padding-right: px2rem(10);
            width: px2rem(140);
            height: px2rem(40);
          }
        }
      }
    }
  }
  .hint {
    height: 100%;
    line-height: px2rem(50);
    padding-left: px2rem(50);
    p {
      color: rgba(16, 16, 16, 1);
      font-size: px2rem(22);
      font-family: PingFangSC-regular;
    }
  }
}
</style>
