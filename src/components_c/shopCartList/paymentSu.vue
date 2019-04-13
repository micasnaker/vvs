<!--  -->
<template>
  <div class="payment">
      <topHead :title=title></topHead>
      <div class="container">
          <div class="order_number">
          <p>订单号{{this.$route.params.number}}</p>
      </div>

      <div class="total_price">
          <p>总计：<span>UFV {{this.$route.params.UFV}} 金鱼 {{this.$route.params.gold}} 银鱼{{this.$route.params.silver}}</span></p>
      </div>

      <div class="pay_content">
          <p>您的订单已经支付成功，我们会在第一时间安排物流送出，如有疑问请致电客服 400-000-0000</p>
      </div>

      <div class="paysu_logo">
          <img src="../../assets/images/payment/logo.png" alt="">
      </div>
      </div>
  </div>
</template>

<script>
import topHead from '../../components/TopHead'
export default {
  data () {
    return {
        title:"支付成功",
    };
  },

  components: {
      topHead
  },

  computed: {},

  mounted(){
    //   var placeNumber = this.$route.params.number;
    //   var placeUFV = this.$route.params.UFV;
    //   var placegold = this.$route.params.gold;
    //   var placesilver = this.$route.params.silver
    //     console.log(placeNumber)
  },

  methods: {}
}

</script>

<style lang="scss" scoped>
.payment{
    height: 100%;
    background-color: rgba(224,224,224,1);
    .container{
    padding-top: 20%;
    .order_number{
        width: 100%;
        height: px2rem(60);
        p{
            color: rgba(16,16,16,1);
            font-size: px2rem(25);
            font-family: PingFangSC-regular;
            text-align: center;
        }
    }
    .total_price{
        width: 100%;
        height: px2rem(60);
        p{
            color: rgba(16,16,16,1);
            font-size: px2rem(25);
            font-family: PingFangSC-regular;
            text-align: center;
            span{
                color: rgba(237,23,9,1);
            }
        }
    }
    .pay_content{
        background-color: #fff;
        width: 90%;
        height: px2rem(180);
        margin: 0 auto;
        p{
            color: rgba(16,16,16,1);
            font-size: px2rem(25);
            font-family: PingFangSC-regular;
            text-align: center;
            padding-top: px2rem(50);
            margin: px2rem(10) px2rem(10) px2rem(10) px2rem(10);
            line-height: px2rem(40);
        }
    }
    .paysu_logo{
        padding-top: px2rem(60);
        margin: 0 auto;
        width: px2rem(190);

        img{
            width: px2rem(186);
            height: px2rem(163);
        }
    }

    }
}

</style>
