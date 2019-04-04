<!-- 购物车列表 -->
<template>
  <div class="shops-wrapper">
      <ul v-for="(item, index) in shopList.list" :key="index">
          <li class="shop-item" v-if="shopList.list">
              <!-- 图片 -->
              <div class="check_wrap" @click="selectAllBtn($event)">
                  <input class="check" :check=check name="Fruit" type="checkbox" :value=index ref="checks" />
              </div>   
              <div class="icon">
                  <span>
                      <img :src="item.img" alt=""  v-lazy="item.img">
                  </span>
              </div>
              <!-- 主要内容 -->
              <div class="content">
                  <h2>{{item.name}}</h2>
                  <div class="extra">
                      <span>UFV {{item.price}}</span>
                      <span style="text-decoration:line-through">UFV {{item.price_origin}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                      <div class="shop_delete" @click="reduce"><img src="../../assets/images/shopCar/-@2x.png" alt=""></div>
                      <div class="shop_count"><span>{{item.count}}</span></div>
                      <div class="shop_add" @click="add"><img src="../../assets/images/shopCar/+@2x.png" alt=""></div>
                  </div>
              </div>
          </li>
      </ul>

      <div class="shopCart_empty" v-if="!persons.tid">
          <div class="cart_logo">
              <img src="../../assets/images/shopCar_empty/logoCar@2x.png" alt="">
          </div>
          <div class="text_wrap">
              <img src="../../assets/images/shopCar_empty/textCart@2x.png" alt="">
          </div>
          <div class="today_wrap">
              <p>逛逛今日特卖</p>
          </div>
      </div>

      <div class="shopClose">
          <div class="bill_wrap"><span>小计:&nbsp;</span> <span>UFV&nbsp;{{shopList.ufv_total}}</span>
          &nbsp;<span>金鱼&nbsp;{{shopList.gold_fish_total}}</span>&nbsp;<span>银鱼&nbsp;{{shopList.silver_fish_total}}</span></div>
          <div class="shop_bar">
              <img @click="removeShopCart(shopList)" src="../../assets/images/shopCar/clearbtn@2x.png" alt="">
              <img @click="userPlace(shopList)" src="../../assets/images/shopCar/closebtn@2x.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import services from '../../../service/index.js'
import { Toast } from 'mint-ui';
export default {
    inject:['reload'],
  data () {
    return {
        count:1,
        shopList:[],
        goods_id:[],
        check:false,
        cart_ids:'',
        checkShop:'',
        checked:false,
        checkShopList:[],
        values:[],
        goodsid:'',
        goodsids:[],
        persons:[],
    };
  },
//   props: ["shopList"],

  components: {},

  computed: {},

  mounted(){
      let token_sc= sessionStorage.getItem('LoginToken');
        if(token_sc){
        this.token_sc = token_sc;
        }

        let id= sessionStorage.getItem('LoginUser');
        if(id){
        this.id = id;
        }
      // 获取购物车列表
    services.getShopCartList({
      token_sc:this.token_sc,
      id:this.id,
    })
    .then(res=>{
        this.shopList = res.data.data;
        // console.log(JSON.stringify(this.shopList[0].name)+"购物列表")
    })

     services.getPerson({
       token_sc:this.token_sc,
       id:this.id,
     })
    .then(res=>{
        this.persons = res.data.data;
        // console.log(JSON.stringify(res)+"用户信息")
    })
  },

  methods: {
    //   aaa(index){
    //       let cart_ids =index;
    //   },

    selectAllBtn(e){
        let checked = e.target.checked;
        // console.log(checked);
    },

      reduce(){
          if(this.count===1){
              this.count = 1
          }else{
            this.count -=1;
          }
      },
      
      add(){
          this.count +=1;
      },

     //  清除购物车
     removeShopCart(shopList){
         let token_sc= sessionStorage.getItem('LoginToken');
        if(token_sc){
        this.token_sc = token_sc;
        }

        let id= sessionStorage.getItem('LoginUser');
        if(id){
        this.id = id;
        }

         var checkShopList = this.$refs.checks
        //  console.log(checkShopList)
        var goodsids = [];
        checkShopList.forEach(element => {
            // console.log(checkShopList)
            var values = element.value
            var checkShops = checkShopList[values].checked
            if(checkShops === true){
                // var goodsid = this.shopList.list[element.value].goods_id
                goodsids.push(this.shopList.list[element.value].id)
            }
        });
                var cart_ids = goodsids
               var cartid_join = cart_ids.join(',')
                // console.log(cartid_join)
            
            services.removeShopCart({
                id:this.id,
                token_sc:this.token_sc,
                cart_ids:cartid_join
            })
            .then(res=>{
                console.log(JSON.stringify(res)) 
                this.reload();
            })

     },

    //  用户下单
    userPlace(shopList){
        var checkShopList = this.$refs.checks
        var goodsids = [];
        // console.log(shopList)
            if(shopList.list.length>0){
                 checkShopList.forEach(element => {
            // console.log(checkShopList)
            var values = element.value
            var checkShops = checkShopList[values].checked
            // console.log(checkShops)
            if(checkShops === true){
                // var goodsid = this.shopList.list[element.value].goods_id
                goodsids.push(this.shopList.list[element.value].goods_id)
            }
            });
                this.$router.push({name:'closeShop',query:{goodsids:goodsids}})
            }else{
                Toast({
                message: '请先添加商品',
                position: 'middle',
                duration: 1500
                });
        }
    }
}
}

</script>

<style lang="scss" scoped>
.shops-wrapper{
    flex: 1;
    margin-top: 18%;
    width: 100%;
    height: 100%;
    .shop-item{
        height: px2rem(200);
        width: 100%;
        background-color: #fff;
        display: flex;
        .check_wrap{
            width: px2rem(30);
            height: px2rem(30);
            margin-top: px2rem(80);
            margin-left: px2rem(30);
            .check{
            width: px2rem(30);
            height: px2rem(30);
            }
        }
        .icon{
        display: inline-block;
        vertical-align: top;
        width: px2rem(181);
        height: px2rem(181);
        background-repeat: no-repeat;
        margin: px2rem(7) px2rem(14) px2rem(7) px2rem(35);
        background-color: rgba(244,244,244,1);
            img{
                width: px2rem(181);
                height: px2rem(181);
                margin-top: px2rem(6);
            }
        }
        .content{
            margin: px2rem(17) px2rem(17) px2rem(17) px2rem(17);
            line-height: px2rem(60);
            h2{
                color: rgba(16,16,16,1);
                font-size: px2rem(22);
                font-weight: bold;
                text-align: center;
                font-family: PingFangSC-regular;
            }
            .extra{
                width: px2rem(300);
                margin-top: px2rem(20);
                span:first-child{
                    color: rgba(237,23,9,1);
                    margin-right: px2rem(20);
                }
                span{
                    font-size: px2rem(22);
                    font-weight: bold;
                    text-align: center;
                    font-family: PingFangSC-regular;
                }
            }
            .cartcontrol-wrapper{
                display: flex; 
                width: px2rem(120);
                justify-content: space-between;
                text-align: center;
                line-height: px2rem(50);
                float: right;
                position: relative;
                margin: px2rem(-30) px2rem(-120) px2rem(10) px2rem(10);
                .shop_delete{
                    height: px2rem(40);
                    img{
                        margin-bottom: px2rem(8);
                    }
                }
                .shop_count{
                    width: px2rem(60);
                    height: px2rem(35);
                    border: 1px solid rgba(187,187,187,1);
                    position: relative;
                    span{
                        font-size: px2rem(23.5);
                        font-family: Arial;
                        font-weight: bold;
                        position: absolute;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        right: 0px;
                        height: px2rem(45);
                        margin: auto;
                    }
                }
            }
        }
    }
    .shopCart_empty{
        margin-top: px2rem(-35);
        height: px2rem(300);
        .cart_logo{
            width: px2rem(110);
            height: px2rem(150);
            margin: 0 auto;
            padding-top: px2rem(50);
            img{
               width: px2rem(110);
               height: px2rem(95); 
            }
        }
        .text_wrap{
            width: px2rem(415);
            height: px2rem(18);
            margin: 0 auto;
            padding-top: px2rem(20);
            img{
               width: px2rem(413);
               height: px2rem(26); 
            }
        }
        .today_wrap{
            width: px2rem(300);
            height: px2rem(50);
            margin: 0 auto;
            text-align: center;
            margin-top: px2rem(50);
            line-height: px2rem(40);
            border: px2rem(3) solid rgba(187,187,187,1);
            p{
               font-size: px2rem(22);
                font-family: Microsoft Yahei; 
            }
        }
    }
}

.shopClose{
    width: 100%;
    height: px2rem(180);
    background-color: rgba(244,244,244,1);
    .bill_wrap{
        text-align: center;
        height: px2rem(30);
        line-height: px2rem(30);
        padding: px2rem(32) px2rem(17);
        span:first-child{
            color: black;
        }
        span{
            color: rgba(237,23,9,1);
            font-size: px2rem(26);
            font-family: PingFangSC-regular;
        }
    }
    .shop_bar{
        display: flex;
        z-index: 20;
        justify-content: space-evenly;
        padding: px2rem(1) px2rem(25);
        img{
            width: px2rem(156);
            height: px2rem(40);
            background-color: #fff;
        }
    }
}
</style>
