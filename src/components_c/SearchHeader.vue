<template>
  <div id="header">
    <div class="navSearch">
      <span class="logo">
        <img src="../assets/images/home/ufvlogo.png" alt>
      </span>
      <input
        @keyup.enter="search"
        v-model="searchText"
        id="query"
        class="search_input"
        maxlength="66"
        placeholder="搜索商品共3314款好物"
      >
    </div>
    <ul class="navLists">
      <li
        class="nav-list"
        @click="selectStyle(item,index)"
        :class="{active:item.isActive,unActive:!item.isActive}"
        v-for="(item,index) in items"
        :key="index"
      >
        <router-link :to="item.path">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      searchText: "",
      items: []
    };
  },
  methods: {
    selectStyle: function(item, index) {
      const _this = this;
      this.items.forEach(function(v) {
        //遍历items
        _this.$set(v, "isActive", false);
      });
      this.$set(item, "isActive", true); //这里item是正在点击的栏目，处于被选中状态
    },
    search: function() {
      this.$router.push({
        path: "/movies/movieSearch",
        query: { search_text: this.searchText }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
  height: 100%;
  margin-top: px2rem(5);
  .navSearch {
    width: px2rem(414);
    height: px2rem(42);
    display: flex;
    justify-content: space-between;
    img {
      line-height: px2rem(414);
      width: px2rem(51);
      height: px2rem(20);
    }
    .search_input {
      width: px2rem(398);
      height: px2rem(50);
      background-color: #dcdcdc;
    }
  }
}
</style>

<style lang="scss">
html,
body,
#header {
  height: 100%;
  background-color: #fff;
}
</style>
