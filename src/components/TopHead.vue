<!-- 头部组件 -->
<template>
  <div class="tophead">
      <div class="th-l" @click="backAction"><i class="icon iconfont"><img src="../assets/images/shopCar/left2x.png" alt=""></i></div>
      <div class="th-title">{{title}}</div>
      <!-- <div class="th-r">
          <slot name=r>右侧插槽</slot>
      </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props: {
      title:String
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {
      backAction(){
          if(this.backurl){
              this.$router.push(this.backurl);
          }else{
              this.$router.go(-1);
          }
      }
  }
}

</script>

<style lang="scss" scoped>
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
    }
    .th-title{
        text-align: center;
        flex:1 auto;
    }
    // .th-r{
    //     padding-right: px2rem(25)
    // }
    .icon::before{
        font-size: $text-size-imp;
    }
}
</style>
