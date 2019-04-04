<!--  -->
<template>
  <div class="myorder">
      <Head :title=title></Head>
          <!-- 商品切换栏 -->
    <div class="tab">
        <div class="tab-item">
          <!-- replace 加上replace: true后，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。 -->
          <router-link :to="{name:'MyOrderAll'}" replace>全部</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{name:'MyOrderConfirm'}" replace>待确认</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{name:'MyOrderShipped'}" replace>已发货</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{name:'MyOrderFinish'}" replace>已完成</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{name:'MyOrderRepeal'}" replace>已撤销</router-link>
        </div>
      </div>
      <keep-alive>
      <router-view class="content_wrap"></router-view>
      </keep-alive>

    </div>
</template>

<script>
import Head from '../../components/TopHead'
export default {
  data () {
    return {
        title:"我的订单"
    };
  },

  components: {
      Head
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>

<style lang="scss" scoped>
.myorder{
    width: 100%;
    height: 100%;
    .tab{
    width: 100%;
    height:px2rem(203);
    line-height:px2rem(80);
    background:rgba(248,248,248,1);
    padding-top: px2rem(120);
    .tab-item{
        float: left;
        width: 20%;
        text-align:center;
        font-size:px2rem(28);
        // border: 1px solid rgba(187,187,187,1);
        a{
            display:block;
            position:relative;
            color: rgba(16,16,16,1);
        }
        .router-link-active{
            border-bottom: px2rem(5) solid rgba(229,28,35,1);
        }
    }
  }
  .content_wrap{
      margin-top: px2rem(2);
  }
}
</style>
