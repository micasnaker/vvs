<!--  -->
<template>
  <div class="shopintro">
      <div class="content">
        <!-- <h1>{{$route.query.goodsInfo.product_notes}}</h1> -->
        <h1>{{shopNotice}}</h1>
      </div>
  </div>
</template>

<script>
import services from '../../../../service/index.js'
export default {
  data () {
    return {
      shopNotice:[]
    };
  },

  components: {},

  computed: {},

  mounted(){
    var goods_id = localStorage.getItem("goods_id")
        services.getShopGoodsInfo({
      goods_id:goods_id
    })
    .then(res=>{
      this.shopNotice = res.data.data.product_notes
      // console.log(JSON.stringify(this.shopIntro)+"shopintro")
    })
  },

  methods: {}
}

</script>

<style lang="scss" scoped>
.shopintro{
  width: 100%;
  // height: px2rem(500);
  .content{
    width: 97%;
    height: px2rem(460);
    background-color: #fff;
    margin: px2rem(18) px2rem(15) px2rem(15) px2rem(15);
    h1{
      margin-top: px2rem(20);
      color: rgba(16,16,16,1);
      font-size: px2rem(26);
      line-height: px2rem(35);
      font-family: PingFangSC-regular;
    }
  }
}
</style>
