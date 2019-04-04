<!--  -->
<template>
  <div class="shopintro">
      <div class="content">
      <h1>{{$route.params.goodsInfo.product_parameter}}</h1>    
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>

<style lang="scss" scoped>
.shopintro{
  width: 100%;
  height: px2rem(500);
  .content{
    width: 97%;
    height: px2rem(460);
    background-color: #fff;
    margin: px2rem(18) px2rem(15) px2rem(15) px2rem(15);
    h1{
      margin-top: px2rem(20);
      color: rgba(16,16,16,1);
      font-size: px2rem(26);
      font-family: PingFangSC-regular;
    }
  }
}
</style>
