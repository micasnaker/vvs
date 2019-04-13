<template>
  <div id="app">
    <!-- <keep-alive>
    <router-view  v-show="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-show="!$route.meta.keepAlive"></router-view> -->
    
    <router-view  v-if="isRouterAlive"/>
    <Tabbar v-show="$route.meta.showFooter"></Tabbar>
  </div>
</template>

<script>
// 样式重置 common.css
import "./assets/common.css"
import SHeader from './components_c/SearchHeader.vue'
import Tabbar from './components_c/Tabbar'
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  components:{
    SHeader,
    Tabbar
  },

  methods: {
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    }
  },
}
</script>


