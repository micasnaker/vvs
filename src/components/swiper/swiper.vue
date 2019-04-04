<!--  -->
<template>
  <div class="swiper_wrap" :auto="4000">
      <mt-swipe>
      <mt-swipe-item v-for="(item, index) in banners" :key="index"><img :src="item.path" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props: ["banners"],

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>

<style lang="scss" scoped>
.swiper_wrap{
    width: 100%;
    height: px2rem(402);
    img{
    width: 100%;
    height: px2rem(402); 
    }
  }
</style>
