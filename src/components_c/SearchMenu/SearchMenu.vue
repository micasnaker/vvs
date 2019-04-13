<!--  -->
<template>
  <div>
    <div class="Search_wrap">
      <div class="goback" @click="$router.push('/home')" replace>
        <img src="../../assets/images/search/left@2x.png" alt>
      </div>
      <div class="right_wrap">
        <label for>
          <img @click="searchShop" src="../../assets/images/home/search@2x.png" alt>
        </label>
        <input type="text" placeholder="请输入商品关键词" v-model="search">
      </div>
      <div class="cancel" @click="$router.push('/home')" replace>
        <img src="../../assets/images/search/cancel@2x.png" alt>
      </div>
    </div>

    <div class="nav">
      <div class="nav_view">
        <div class="grid">
          <div class="grid_wrap" v-for="(item, index) in navImage" :key="index">
            <img @click="grid_btn(item)" :src="item.img" alt>
          </div>
        </div>
      </div>

      <div class="meun_wrap">
        <ul>
          <li :class="idx==index?'hover':''" v-for="(item,idx) in items" :key="idx">
            <h2 @click="showToggle(item,idx)">{{ item.name }}</h2>
            <ul v-if="item.isSubshow===true">
              <li :class="idx==indexs?'hover':''" v-for="(subItem,idx) in subItems" :key="idx">
                <h3 @click="goToContent(subItem,idx)">{{ subItem.name }}</h3>
              </li>
            </ul>
          </li>
        </ul>
      </div>
          <router-view></router-view>
    </div>
  </div>
</template>

<script>
import services from "../../../service/index.js";
export default {
  inject: ["reload"],
  data() {
    return {
      index: 0,
      indexs: 0,
      search: "",
      // 八个标签
      navImage: [
        {
          id: 101,
          price_type: "",
          img: require("../../assets/images/search/grid1@2x.png")
        },
        {
          id: 201,
          price_type: 2,
          img: require("../../assets/images/search/grid2@2x.png")
        },
        {
          id: 301,
          price_type: 1,
          img: require("../../assets/images/search/grid3@2x.png")
        },
        {
          id: 401,
          price_type: 3,
          img: require("../../assets/images/search/grid4@2x.png")
        },
        {
          id: 501,
          type: "",
          img: require("../../assets/images/search/grid5@2x.png")
        },
        {
          id: 601,
          type: 1,
          img: require("../../assets/images/search/grid6@2x.png")
        },
        {
          id: 701,
          type: 2,
          img: require("../../assets/images/search/grid7@2x.png")
        },
        {
          id: 801,
          type: 3,
          img: require("../../assets/images/search/grid8@2x.png")
        }
      ],
      items: []
    };
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
    // var arrId = [];
    // 获得一级分类
    services
      .getCatsList({
        pid: 0
      })
      .then(res => {
        this.items = res.data.data;
        // console.log(JSON.stringify(this.items)+"一级分类")
      });

    // 获得二级分类
    services
      .getCatsList({
        pid: 1
      })
      .then(res => {
        this.subItems = res.data.data;
        // console.log(JSON.stringify(this.subItems)+"二级分类")
      });
  },

  methods: {
    // 搜索商品
    searchShop() {
      services
        .getSearchShopList({
          cat1: "",
          cat2: "",
          price_type: "",
          type: "",
          k: this.search,
          page: 1,
          page_size: 10
        })
        .then(res => {
          console.log(JSON.stringify(res) + "搜索结果打印");
          this.$router.push({
            name: "SearchShop",
            params: { k: this.search, id: "000" }
          });
        });
    },
    // 选项点击

    grid_btn(item) {
      this.$router.push({
        name: "SearchShop",
        params: { ids: item.id,cat2:'', type: item.type, price_type: item.price_type }
      });
      this.reload();
    },

    showToggle: function(item, idx) {
      item.isSubshow = !item.isSubshow;
      this.index = idx;
      this.$router.push({ name: "SearchShops", params: { fids: item.id } });
      //  console.log(item)
    },

    // 跳转二级路由页面
    goToContent(subItem, idx) {
      this.$router.push({ name: "SearchShop", params: { ids: subItem.id,fids:'' } });
      this.indexs = idx;
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
      img{
        width: px2rem(30);
        height: px2rem(30);
      }
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
      line-height: px2rem(40);
    }
  }
  .cancel {
    line-height: px2rem(80);
    height: px2rem(80);
    margin: 0 auto;
    margin-left: px2rem(10);
    margin-right: px2rem(10);
    img {
      width: px2rem(48);
      height: px2rem(23);
    }
  }
}
.nav {
  width: px2rem(160);
  .nav_view {
    margin-left: px2rem(180);
    width: 100%;
    height: 90%;
    .grid {
      display: flex;
      justify-content: space-around;
      width: px2rem(500);
      flex-wrap: wrap;
      .grid_wrap {
        width: px2rem(120);
        height: px2rem(50);
        margin-right: px2rem(5);
        img{
          width: px2rem(124);
          height: px2rem(44);
        }
      }
      .grid_wrap:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
  .meun_wrap {
    position: absolute;
    margin-top: -15%;
    border-right: px2rem(1) solid #ddd;
    ul {
      margin-top: px2rem(40);
      width: px2rem(150);
      height: auto;
    }

    h2 {
      background: #fff;
      border: 1px solid #fff;
      color: rgba(16, 16, 16, 1);
      height: px2rem(60);
      font-size: px2rem(25);
      font-family: PingFangSC-regular;
      line-height: px2rem(60);
      text-indent: px2rem(24);
    }
    h2:hover {
      color: rgba(237, 23, 9, 1);
      border-left: px2rem(2) solid rgba(237, 23, 9, 1);
    }

    h3 {
      background: #fff;
      color: rgba(16, 16, 16, 1);
      height: px2rem(45);
      line-height: px2rem(24);
      border: 1px solid #fff;
      font-family: PingFangSC-regular;
      text-indent: px2rem(50);
      font-size: px2rem(21);
    }
    h3:hover {
      color: rgba(237, 23, 9, 1);
      border-left: px2rem(2) solid rgba(237, 23, 9, 1);
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
