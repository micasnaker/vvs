<!--  -->
<template>
  <div class="closeShop">
      <topHeader :title=title></topHeader>
      <!-- 收货地址 -->
      <div class="address_wrap">
            <!-- <p>收货地址</p> -->
          <div class="container" v-for="(item, index) in myAddress" :key="index" v-if="item.is_default">
              <div class="default">
          <input type="checkbox" v-model="item.is_default">
          <label for="check">默认地址</label>  
          </div>
          <div class="content">
              <span>收货人：{{item.contact_name}} {{item.phone}}</span>
              <p>{{item.address}}</p>
          </div>
          <div class="right_wrap">
              <img src="../../assets/images/shopCar/close(yes)/right2x.png" alt="">
          </div>
          </div>
      </div>

        <!-- 订单信息 -->
        <div class="order-content">
      <div class="head-top">
        <p>订单信息</p>
      </div>

      <div class="content" v-for="(item, index) in closeShopList.list" :key="index">
        <div class="img_wrap">
          <img :src="item.img" alt="">
        </div>
        <div class="content_top">
          <p>{{item.name}}</p>
          <div class="content_foot">
          <div class="price_wrap"><span>UFV {{item.price}} </span><span>UFV{{item.price_origin}}</span></div>
          <p>X{{item.count}}</p>
        </div>
        </div>
      </div>

      <div class="footer">
          <div class="head-top">
        <h2>支付金额</h2>
      </div>
        <div class="footer_p">
        <p>共计{{allCount}}件商品 总计：</p>
        <div class="span">
          <span>UFV {{closeShopList.ufv_total}}</span>
        <span>银鱼 {{closeShopList.silver_fish_total}}</span>
        <span>金鱼 {{closeShopList.gold_fish_total}}</span>
        </div>
        </div>
      </div>

        <div class="comment">
        <div class="comment_wrap">
            <label for="">备注：</label>
            <textarea rows="5" cols="10" placeholder="多行输入" v-model="comment"></textarea>
        </div>
        </div>

        <div class="footer">
          <div class="head-top">
      </div>
        <div class="footer_p">
        <p>实付金额</p>
        <div class="span">
          <span>UFV {{closeShopList.ufv_total}}</span>
        <span>银鱼 {{closeShopList.silver_fish_total}}</span>
        <span>金鱼 {{closeShopList.gold_fish_total}}</span>
        </div>
        </div>
      </div>
    </div>

    <!-- 底部top -->
        <div class="top_car" @click="placeShops">
            <img src="../../assets/images/shopCar/close(yes)/zhifu@2x.png" alt="">
        </div>
  </div>
</template>

<script>
import topHeader from '../../components/TopHead'
import services from '../../../service/index.js'
export default {
  data () {
    return {
        title:"结算",
        closeShopList:[],
        myAddress:[],
        comment:'',
        address_id:'',
        allCount:localStorage.getItem("allCount"),
    };
  },

  

  components: {
      topHeader
  },

  computed: {
  },

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
    services.getShopCartList({
        token_sc:this.token,
        id:this.id,
    })
    .then(res=>{
        this.closeShopList = res.data.data;
        var length = JSON.stringify(this.closeShopList.list.length)
        // console.log(length+"商品列表")
        // console.log(this.closeShopList)
        var allLength = []
        this.closeShopList.list.forEach(element=>{
          allLength.push(element)
        })
          // console.log(allLength)
          var allCount = allLength.length
          localStorage.setItem("allCount",allCount)
    })

    // 获取地址
    services.AddressList({
        token_sc:this.token,
        id:this.id,
    })
    .then(res=>{
      this.myAddress = res.data.data;
    //   console.log(this.myAddress+"111")
    })

  },

  methods: {
      placeShops(){
          // 提交订单
        // if(closeShopList.list.length>0){
        //     services.userPlaceOrder({
        //     id:this.id,
        //     token_sc:this.token,
        // })
        var myAddress = this.myAddress;
        myAddress.forEach(item=>{
            if(item.is_default===1){
                var address_id = item.id.toString()
                var contact_name = item.contact_name
                var phone = item.phone
                var address = item.address
                var buyer_remark = this.comment
                // console.log(buyer_remark+"备注")
                // console.log(address_id,contact_name,phone,address,buyer_remark)
                let token= sessionStorage.getItem('LoginToken');
                if(token){
                this.token = token;
                // console.log(token+'token_sc')
                }

                let id= sessionStorage.getItem('LoginUser');
                if(id){
                this.id = id;
                // console.log(id+'aid')
                }
                services.userPlaceOrder({
                    id : this.id,
                    token_sc : this.token,
                    address_id : address_id,
                    contact_name : this.contact_name,
                    phone : this.phone,
                    address : this.address,
                    buyer_remark : this.buyer_remark
                })
                .then(res=>{
                  var placeNumber = res.data
                  // console.log(placeNumber)
                  var number = placeNumber.data.order_num;
                  var UFV = placeNumber.data.ufv_total;
                  var gold = placeNumber.data.gold_fish_total;
                  var silver = placeNumber.data.silver_fish_total;
                  // console.log(UFV)
                  this.$router.push({name:'paymentSu',params:{number:number,UFV:UFV,gold:gold,silver:silver}})                  
                })
            }
        })
        // console.log(this.placeNumber)        
        // console.log(myAddress)
    //   }
    }
  }
}

</script>

<style lang="scss" scoped>
.closeShop{
    height: 100%;
    .address_wrap{
        width: 100%;
        padding-top: 20%;
        // p{
        //    color: rgba(16,16,16,1);
        //    font-size: px2rem(22);
        //    font-family: PingFangSC-regular; 
        //    margin: px2rem(12) px2rem(12) px2rem(12) px2rem(12);
        // }
        .container{
            width: 90%;
            height: px2rem(130);
            display: flex;
            justify-content: space-around;
            border-bottom: px2rem(1) solid #ddd;
            padding-top: px2rem(20);
            .default{
                margin-top: px2rem(20);
                width: px2rem(130);
                height: px2rem(50);
                display: flex;
                justify-content: space-around;
                input{
                    width: px2rem(30);
                    height: px2rem(30);
                }
                label{
                    font-size: px2rem(20);
                    font-family: PingFangSC-regular;
                    color: rgba(16,16,16,1);
                }
                }
            .check_wrap{
                padding-top: px2rem(20);
            }
            .content{
                span{
                    color: rgba(16,16,16,1);
                    font-size: px2rem(22);
                    font-family: PingFangSC-regular;
                }
                p{
                  color: rgba(16,16,16,1);
                  font-size: px2rem(22);
                  font-family: PingFangSC-regular;  
                }
            }
            .right_wrap{
                padding-top: px2rem(20);
                img{
                    width: px2rem(14);
                    height: px2rem(24);
                }
            }
        }
        .container:last-child{
            margin-bottom: 5%;
            border: none;
        }
    }
    .order-content{
    // background-color: #fff;
    // margin-bottom: px2rem(20);
    .head-top{
      width: 80%;
      height: px2rem(50);
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      line-height: px2rem(50);
      p{
        color: rgba(16,16,16,1);
        font-size: px2rem(22);
        font-family: PingFangSC-regular;
      }
      h2{
        color: rgba(16,16,16,1);
        font-size: px2rem(22);
        font-family: PingFangSC-regular;
        margin-left: px2rem(30);
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
      height: px2rem(160);
      width: 100%;
      margin-top: px2rem(20);
      display: flex;
      justify-content: space-around;
      border-bottom: px2rem(1) solid #ddd;
      .footer_p{
        // width: px2rem(700);
        height: px2rem(200);
        margin-top: px2rem(18);
        display: flex;
        margin-bottom: 10%;
        p{
          color: rgba(16,16,16,1);
          font-size: px2rem(20);
          font-family: PingFangSC-regular;
          // width: px2rem(200);
          height: px2rem(30);
                  width: px2rem(320)
        }
        span{
          float: right;
          color: rgba(237,23,9,1);
          font-size: px2rem(22);
          font-family: PingFangSC-regular;
          // margin-top: px2rem(30);
          width:px2rem(120);
          margin-right: px2rem(20);
        }
      }
    }
    .comment{
        width: 100%;
        height: 100%;
        padding-top: px2rem(20);
        border-bottom: px2rem(1) solid #ccc;
        .comment_wrap{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5%;
        label{
            color: rgba(16,16,16,1);
            font-size: px2rem(22);
            font-family: PingFangSC-regular;
            margin-left: px2rem(30);
        }
        textarea{
            width: px2rem(480);
            height: px2rem(100);
            border: px2rem(1) solid #ccc;
            margin-right: px2rem(80);
            font-size: px2rem(25);
        }
        textarea::-webkit-input-placeholder{
            color: rgba(136,136,136,1);
            font-size: px2rem(22);
            font-family: Microsoft Yahei;
            padding: px2rem(10) px2rem(10) px2rem(10) px2rem(10);
        } 
        }
        
    }
  }
    .top_car{
    position: fixed;
    left:0;
    bottom:0;
    z-index:99;
    width:100%;
    height: px2rem(73);
    border-top: px2rem(1) solid #ddd;
    background-color: #fff;
}
}
</style>
