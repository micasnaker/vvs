<!--  -->
<template>
  <div class="myorderall">
    <div class="order-content">
      <div class="head-top">
        <p>2018-01-23 08：40</p> 
        <p>已发货</p>
      </div>

      <div class="content">
        <div class="img_wrap">
          <img src="../../assets/images/person/myorder/shopimg.png" alt="">
        </div>
        <div class="content_top">
          <p>黄金曼特宁挂耳咖啡 10克*10包</p>
          <div class="content_foot">
          <div class="price_wrap"><span>UFV 66.6 </span><span>UFV100.00</span></div>
          <p>X1</p>
        </div>
        </div>
        
      </div>

      <div class="footer">
        <div class="footer_p">
        <p>共计1件商品 总计：UFV 66.6 银鱼 66.6 金鱼66.6</p>
        </div>
      </div>
      <div class="cargo">
          <div class="cargo_img">
            <img src="../../assets/images/person/myorder/logistics2x.png" alt="">
          <img src="../../assets/images/person/myorder/enter@2x.png" alt="">
          </div>
        </div>
    </div>

    <div class="base">
      <p>我是有底线的</p>
    </div>
  </div>
</template>

<script>
import services from '../../../service/index.js'
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){
  },

  methods: {}
}

</script>

<style lang="scss" scoped>
.myorderall{
  width: 100%;
  height: 100%;
  background-color:rgba(224,224,224,1);
  .order-content{
    background-color: #fff;
    margin-bottom: px2rem(20);
    .head-top{
      width: 90%;
      height: px2rem(50);
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      border-bottom: px2rem(1) solid #ddd;
      line-height: px2rem(50);
      p{
        color: rgba(16,16,16,1);
        font-size: px2rem(22);
        font-family: PingFangSC-regular;
      }
      p:last-child{
        color: rgba(229,28,35,1);
      }
    }
    .content{
      width: 90%;
      height: px2rem(130);
      display: flex;
      justify-content: space-evenly;
      margin: 0 auto;
      .img_wrap{
        width: px2rem(135);
        height: px2rem(135);
        margin-left: px2rem(-120);
        margin-top: px2rem(10);
        img{
          width: px2rem(125);
          height: px2rem(125);
        }
      }
      .content_top{
        line-height: px2rem(60);
        p{
          color: rgba(16,16,16,1);
          font-size: px2rem(22);
          font-family: PingFangSC-regular;
        }
        .content_foot{
          display: flex;
          justify-content: space-between;
          height: px2rem(30);
          span{
            color: rgba(16,16,16,1);
            font-size: px2rem(22);
            font-family: PingFangSC-regular;
          }
          span:first-child{
            color: rgba(237,23,9,1);
          }
        }
      }
    }
    .footer{
      height: px2rem(60);
      width: 100%;
      margin-top: px2rem(20);
      display: flex;
      justify-content: space-around;
      .footer_p{
        width: px2rem(700);
        height: px2rem(30);
        margin-top: px2rem(10);
        p{
          color: rgba(16,16,16,1);
          font-size: px2rem(22);
          font-family: PingFangSC-regular;
        }
      }
    }
    .cargo{
        width: 100%;
        height: px2rem(50);
        .cargo_img{
          float: right;
          width: px2rem(300);
          img{
          padding-right: px2rem(10);
          width: px2rem(140);
          height: px2rem(40);
          }
        }
        
      }
  }
  .base{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 99;
    width: 100%;
    height: px2rem(40);
    background-color: #fff;
    text-align: center;
    line-height: px2rem(40);
    border-top: px2rem(3) solid #ddd;
    margin-top: px2rem(20);
    p{
      color: rgba(16,16,16,1);
      font-size: px2rem(22);
      font-family: PingFangSC-regular;
    }
  }
}
</style>
