<!--  -->
<template>
  <div>
      <template>
        <Row>
            <Menu accordion style="width:5rem" @on-select="navigateTo">
                <Submenu name="1">
                    <template slot="title">
                        <!-- <Icon type="ios-paper" /> -->
                        母婴玩具
                    </template>
                    <!-- <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem> -->
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <!-- <Icon type="ios-people" /> -->
                        水果生鲜
                    </template>
                    <!-- <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem> -->
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <!-- <Icon type="ios-stats" /> -->
                        美食
                    </template>
                        <!-- <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                        <MenuItem name="3-4">用户留存</MenuItem> -->
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <!-- <Icon type="ios-stats" /> -->
                        居家百货
                    </template>
                        <!-- <MenuItem name="4-1">新增和启动</MenuItem>
                        <MenuItem name="4-2">活跃分析</MenuItem>
                        <MenuItem name="4-3">时段分析</MenuItem>
                        <MenuItem name="4-4">用户留存</MenuItem> -->
                </Submenu>
                <Submenu name="5">
                    <template slot="title">
                        <!-- <Icon type="ios-stats" /> -->
                        杂货
                    </template>
                        <MenuItem name="/search/5-1">分类1</MenuItem>
                        <MenuItem name="5-2">分类2</MenuItem>
                        <MenuItem name="5-3">分类3</MenuItem>
                        <MenuItem name="5-4">分类4</MenuItem>
                </Submenu>
            </Menu>
        </Row>
</template>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props: ["name"],

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>

<style>



</style>