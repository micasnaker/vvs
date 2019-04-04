<!--  -->
<template>
  <div>
     <TopHeader :title=title></TopHeader>
     <div class="bord"></div>
    <shopCartList :shopList=shopList></shopCartList>
    <shopCartLike :shopCartLike=shopCartLike></shopCartLike>
  </div>
</template>

<script>
import TopHeader from '../components/TopHead'
import shopCartList from '../components_c/shopCartList/shopCartList'
import shopCartLike from '../components_c/shopCartList/shopCartLike'
import services from '../../service/index.js'
import store from '../store/store.js'
export default {
  data () {
    return {
      shopCartLike:[],
      shopList:[],
      title:"购物车",
    };
  },

  components: {
    TopHeader,
    shopCartList,
    shopCartLike
  },

  computed: {},

  mounted(){
  let token= sessionStorage.getItem('LoginToken');
      if(token){
      this.token = token;
      // console.log(token+'token_sc')
      }

  let id= sessionStorage.getItem('LoginUser');
      if(id){
      this.id = id;
      // console.log(id+'tid')
      }

      // 获取猜你喜欢列表
    services.getShopCartLike({
      token_sc:this.token,
      id:this.id,
    })
    .then(res=>{
        this.shopCartLike = res.data.data;
        // console.log(JSON.stringify(res)+"猜你喜欢")
    })

    // 获取购物车列表
    services.getShopCartList({
      token_sc:this.token,
      id:this.id,
    })
    .then(res=>{
        this.shopList = res.data.data;
        // console.log(JSON.stringify(this.shopList[0].name)+"购物列表")
    })
  },

  methods: {
  }
}

</script>

<style lang="scss" scoped>
.bord{
  width: 100%;
  height: px2rem(20);
}
</style>

<style lang="scss">
html,
body,
.shops-wrapper {
    background-color: rgba(244,244,244,1);
}
</style>