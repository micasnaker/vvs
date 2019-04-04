<!--  -->
<template>
  <div>
    
    <div class="Search_wrap">
      <div class="goback" @click="$router.go(-1)">
        <img src="../../assets/images/search/left@2x.png" alt>
      </div>
      <div class="right_wrap">
        <label for>
          <img src="../../assets/images/home/search@2x.png" alt>
        </label>
        <input type="text" placeholder="搜索商品，共4411款好物">
      </div>
      <div class="cancel" @click="$router.go(-1)">
        <img src="../../assets/images/search/cancel@2x.png" alt>
      </div>
    </div>

    <div class="nav">
          <div class="nav_view">
         <div class="grid">
           <div class="grid_wrap">
             <img src="../../assets/images/search/grid1@2x.png" alt="">
           </div>
           <div class="grid_wrap">
             <img src="../../assets/images/search/grid2@2x.png" alt="">
           </div>
           <div class="grid_wrap">
             <img src="../../assets/images/search/grid3@2x.png" alt="">
           </div>
           <div class="grid_wrap">
             <img src="../../assets/images/search/grid4@2x.png" alt="">
           </div>
           <div class="grid_wrap">
             <img src="../../assets/images/search/grid5@2x.png" alt="">
           </div>
           <div class="grid_wrap">
             <img src="../../assets/images/search/grid6@2x.png" alt="">
           </div>
           <div class="grid_wrap">
             <img src="../../assets/images/search/grid7@2x.png" alt="">
           </div>
           <div class="grid_wrap">
             <img src="../../assets/images/search/grid8@2x.png" alt="">
           </div>
         </div>
       </div>

     <div class="meun_wrap">

       <ul>
        <li v-for="item in items">
         <h2 @click="showToggle(item)">{{ item.name }}</h2>
         <ul v-if="item.isSubshow">
             <li v-for="subItem in item.subItems">
               <h3 @click="goToContent(subItem)">{{ subItem.name }}</h3>
             </li>
           </ul>
           
         </li>
               <router-view class="nav_wrap"></router-view>

       </ul>
     </div>
    </div>


  </div>
</template>

<script>
import services from "../../../service/index.js";
export default {
  data() {
    return {
      items:[
            { 
               name: "母婴玩具",
               isSubshow:false,
            },
            {
               name:"杂货",
               isSubshow:false,
               subItems:[
                 {
                   name:"杂货1",
                   id:'1'
                 },
                 {
                   name:"杂货2",
                   id:'2'
                 },
                {
                   name:"杂货3",
                   id:'3'
                 }
               ]
            }
          ]
    }
  },
    

  watch: {
    $route(to, from) {
      let childurl = to.path;
      //   console.log(childurl)
    }
  },

  components: {},

  computed: {},

  mounted() {
    var arrId = [];
    services
      .getCatsList({
        pid: 0
      })
      .then(res => {
        this.ShopName = res.data.data;
        this.ShopName.forEach(element => {
          var eid = element.id;
          arrId.push(eid);
        });
      });
  },

  methods: {
      navigateTo(name){
          this.$router.push(name);
      },

       showToggle:function(item){
         item.isSubshow = !item.isSubshow;
      },

      // 跳转二级路由页面
      goToContent(subItem){
        this.$router.push({name:'SearchShop',params:{id:subItem.id}})
      }
  }
};
</script>

<style lang="scss">
.Search_wrap {
  // width: 100%;
  height: px2rem(70);
  display: flex;
  justify-content: space-between;
  margin: px2rem(10) 0;
  .goback {
    width: px2rem(100);
    height: px2rem(30);
    line-height: px2rem(90);
    margin-left: px2rem(30);
    img {
      width: px2rem(17);
      height: px2rem(34);
    }
  }
  .right_wrap {
    width: 90%;
    background-color: rgba(236, 236, 236, 1);
    label {
      line-height: px2rem(80);
      padding-left: px2rem(30);
      // padding-right: px2rem(30);
    }
    input {
      width: px2rem(450);
      height: px2rem(50);
      background-color: rgba(236, 236, 236, 1);
      outline: none;
      outline: none;
      padding-left: px2rem(30);
      border: 0px;
      font-size: px2rem(24);
    }
    input::-webkit-input-placeholder {
      color: rgba(133, 133, 133, 1);
      font-size: px2rem(22);
      font-family: PingFangSC-regular;
      -webkit-text-fill-color: initial;
    }
  }
  .cancel {
    line-height: px2rem(80);
    height: px2rem(80);
    margin: 0 auto;
    img {
      width: px2rem(48);
      height: px2rem(23);
    }
  }
}
.nav {
  width: px2rem(160);
       .nav_view{
        margin-left: px2rem(180);
        width: 100%;
        height: 90%;
        .grid{
            display: flex;
            justify-content: space-around;
            width: px2rem(500);
            flex-wrap:wrap;
          .grid_wrap{
              width: px2rem(120);
              height: px2rem(50);
              margin-right: px2rem(5);
          }
          .grid_wrap:nth-child(4n){
            margin-right: 0;
        }
        }
        
        .nav_wrap{
        // float: right;
        }
      } 
      .meun_wrap{
          ul{      
         width: px2rem(150);      
          height: auto;   
      } 
 
        h2{      
          background: green;      
          border: 1px solid #fff;      
          color: #fff;      
          height: px2rem(30);      
          line-height: px2rem(30);      
          text-indent: px2rem(24);    
      }  
 
       h3{      
          background: #999;      
          height: px2rem(24);      
          line-height: px2rem(24);      
          border: 1px solid #fff;      
          text-indent: px2rem(50);    
      }
      }
          
}


.ivu-row {
  // width: 50%;
  .ivu-menu {
    // 修改选中竖线
    .ivu-menu-item-active:not(.ivu-menu-submenu):after {
      background-color: #fff;
    }
    .ivu-menu-item {
      font-size: px2rem(26);
    }
    .ivu-menu-item-active:not(.ivu-menu-submenu) {
      background-color: #fff;
    }
    .ivu-menu-item:hover,
    .ivu-menu-vertical .ivu-menu-submenu-title:hover {
      color: rgba(237, 23, 9, 1);
    }
    .ivu-menu-submenu {
      font-size: px2rem(26);
      .ivu-menu-submenu-title:hover {
        color: rgba(237, 23, 9, 1);
      }
    }
    .ivu-menu-item-active:not(.ivu-menu-submenu) {
      color: rgba(237, 23, 9, 1);
    }
  }
}
</style>
