<!--  -->
<template>
  <div class="person">
    <header class="header">
      <div class="port">
        <img :src="persons.avatar" alt v-if="persons.avatar">
        <h1 v-else @click="goLogin">请先登录</h1>
      </div>
      <div class="message">
        <p v-if="persons.user_name">{{persons.user_name}}</p>
        <p v-else @click="goLogin">请先登录</p>
        <span class="nickN" v-if="persons.nick_name">{{persons.nick_name}}</span>
        <span class="nickN" v-else @click="goLogin">请先登录</span>
        <div class="fish" v-if="persons.gold_fish">
          <span>金鱼&nbsp;{{persons.gold_fish}}</span>
          <span>银鱼&nbsp;{{persons.silver_fish}}</span>
          <span>UFV&nbsp;{{persons.ufv}}</span>
        </div>

        <div class="fish" v-else @click="goLogin">
          <span>金鱼&nbsp;0.00</span>
          <span>银鱼&nbsp;0.00</span>
          <span>UFV&nbsp;0.00</span>
        </div>
      </div>
      <div class="set">
        <img @click="ToMySet" src="../../assets/images/person/set@2x.png" alt>
      </div>
    </header>

    <!-- 四栏分类 -->
    <div class="order" :head="title" @click="myOrder">
      <div class="label">
        <span>我的订单</span>
        <img src="../../assets/images/person/right2x.png" alt>
        <p>全部订单</p>
      </div>
    </div>

    <!-- 四栏分类 -->
    <div class="fourbar">
      <div class="logo" @click="goToConfirm">
        <p>
          <img src="../../assets/images/person/enter3x.png" alt>
        </p>
        <span>
          <img src="../../assets/images/person/fontenter3x(1).png" alt>
        </span>
      </div>
      <div class="logo" @click="goToShipped">
        <p>
          <img src="../../assets/images/person/deliver3x.png" alt>
        </p>
        <span>
          <img src="../../assets/images/person/fontdeliver3x(1).png" alt>
        </span>
      </div>
      <div class="logo" @click="goToFinish">
        <p>
          <img src="../../assets/images/person/finish3x.png" alt>
        </p>
        <span>
          <img src="../../assets/images/person/fontfinish3x(1).png" alt>
        </span>
      </div>
      <div class="logo" @click="goToRepeal">
        <p>
          <img src="../../assets/images/person/repeal3x.png" alt>
        </p>
        <span>
          <img src="../../assets/images/person/fontrepeal@3x(1).png" alt>
        </span>
      </div>
    </div>
    <div class="bord"></div>

    <div class="content">
      <div class="label" @click="ToMyAddress">
        <span>我的地址</span>
        <img src="../../assets/images/person/right2x.png" alt>
      </div>
      <div class="label">
        <span>在线客服</span>
        <img src="../../assets/images/person/right2x.png" alt>
        <p>4008210369</p>
      </div>
      <div class="label" @click="ToMySet">
        <span>系统设置</span>
        <img src="../../assets/images/person/right2x.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我的地址",
      head: "我的订单"
    };
  },

  props: ["persons"],

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //   去登录
    goLogin() {
      this.$router.push("/login");
    },

    //   去我的地址
    ToMyAddress() {
      let token = sessionStorage.getItem("LoginToken");
      if (token) {
        this.token = token;
        // console.log(token+'token_sc')
      }

      let id = sessionStorage.getItem("LoginUser");
      if (id) {
        this.id = id;
        // console.log(id+'tid')
      }
      if (this.token && this.id) {
        this.$router.push("/myaddress");
      } else {
        this.$router.push("/login");
      }
    },

    // 去我的订单
    myOrder() {
      let token = sessionStorage.getItem("LoginToken");
      if (token) {
        this.token = token;
        // console.log(token+'token_sc')
      }

      let id = sessionStorage.getItem("LoginUser");
      if (id) {
        this.id = id;
        // console.log(id+'tid')
      }
      if (this.token && this.id) {
        this.$router.push("/myorder");
      } else {
        this.$router.push("/login");
      }
    },

    // 去待确认
    goToConfirm() {
      let token = sessionStorage.getItem("LoginToken");
      if (token) {
        this.token = token;
        // console.log(token+'token_sc')
      }

      let id = sessionStorage.getItem("LoginUser");
      if (id) {
        this.id = id;
        // console.log(id+'tid')
      }
      if (token && id) {
        this.$router.push("/myorder/confirm");
      } else {
        this.$router.push("/login");
      }
    },

    // 去已发货
    goToShipped() {
      let token = sessionStorage.getItem("LoginToken");
      if (token) {
        this.token = token;
        // console.log(token+'token_sc')
      }

      let id = sessionStorage.getItem("LoginUser");
      if (id) {
        this.id = id;
        // console.log(id+'tid')
      }
      if (token && id) {
        this.$router.push("/myorder/shipped");
      } else {
        this.$router.push("/login");
      }
    },

    // 去已完成
    goToFinish() {
      let token = sessionStorage.getItem("LoginToken");
      if (token) {
        this.token = token;
        // console.log(token+'token_sc')
      }

      let id = sessionStorage.getItem("LoginUser");
      if (id) {
        this.id = id;
        // console.log(id+'tid')
      }
      if (token && id) {
        this.$router.push("/myorder/finish");
      } else {
        this.$router.push("/login");
      }
    },

    // 去已撤销
    goToRepeal() {
      let token = sessionStorage.getItem("LoginToken");
      if (token) {
        this.token = token;
        // console.log(token+'token_sc')
      }

      let id = sessionStorage.getItem("LoginUser");
      if (id) {
        this.id = id;
        // console.log(id+'tid')
      }
      if (token && id) {
        this.$router.push("/myorder/repeal");
      } else {
        this.$router.push("/login");
      }
    },

    // 去系统设置
    ToMySet() {
      let token = sessionStorage.getItem("LoginToken");
      if (token) {
        this.token = token;
        // console.log(token+'token_sc')
      }

      let id = sessionStorage.getItem("LoginUser");
      if (id) {
        this.id = id;
        // console.log(id+'tid')
      }
      if (token && id) {
        this.$router.push("/personset");
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.person {
  height: 100%;
  .header {
    width: 100%;
    height: px2rem(236);
    background-color: rgba(255, 82, 82, 1);
    .port {
      float: left;
      margin: px2rem(75) px2rem(25) px2rem(0) px2rem(55);
      h1{
        font-size: px2rem(45);
      }
      img {
        border-radius: px2rem(100);
        width: px2rem(135);
        height: px2rem(135);
      }
    }
    .message {
      width: px2rem(380);
      height: px2rem(160);
      float: left;
      margin: px2rem(65) px2rem(25) px2rem(0) px2rem(15);
      line-height: px2rem(80);
      p {
        line-height: px2rem(25);
        color: rgba(255, 255, 255, 1);
        font-size: px2rem(27);
        font-family: SFUIText-regular;
      }
      .nickN {
        line-height: px2rem(25);
        color: rgba(255, 255, 255, 1);
        font-size: px2rem(27);
        font-family: SFUIText-regular;
      }
      .fish {
        width: px2rem(499);
        height: px2rem(50);
        line-height: px2rem(50);
        span {
          color: rgba(16, 16, 16, 1);
          font-size: px2rem(22);
          font-family: PingFangSC-regular;
        }
      }
    }
    .set {
      float: right;
      width: px2rem(41);
      text-align: center;
      margin: px2rem(30) px2rem(15) px2rem(50) px2rem(11);
      img{
        width: px2rem(42);
        height: px2rem(42);
      }
    }
  }
  .order {
    width: 100%;
    height: 100%;
    line-height: px2rem(120);
    margin-top: px2rem(20);
    .label {
      width: 100%;
      height: px2rem(120);
      border-bottom: px2rem(1) solid #dcdcdc;
      float: left;
      img{
        width: px2rem(14);
        height: px2rem(24);
      }
      p {
        float: right;
        font-size: px2rem(26);
        font-weight: bold;
        margin-right: px2rem(20);
      }
      span {
        margin-left: px2rem(20);
        font-weight: bold;
        font-size: px2rem(26);
      }
      img {
        float: right;
        margin-top: px2rem(50);
        margin-right: px2rem(30);
      }
    }
    .label:last-child {
      border-bottom: none;
    }
  }
  .fourbar {
    width: 100%;
    height: px2rem(120);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo {
      // width: px2rem(150);
      height: px2rem(110);
      align-items: center;
      img{
        width: px2rem(51);
        height: px2rme(48);
      }
      p {
        text-align: center;
        width: px2rem(60);
        height: px2rem(60);
      }
      span {
        img {
          width: px2rem(70);
          height: px2rem(30);
        }
      }
    }
  }
  .bord {
    width: 100%;
    height: px2rem(15);
    background-color: #dcdcdc;
  }
  .content {
    width: 100%;
    height: 100%;
    line-height: px2rem(120);
    .label {
      width: 100%;
      height: px2rem(120);
      border-bottom: px2rem(1) solid #dcdcdc;
      float: left;
      img{
        width: px2rem(14);
        height: px2rem(24);
      }
      p {
        float: right;
        font-size: px2rem(26);
        font-weight: bold;
        margin-right: px2rem(20);
      }
      span {
        margin-left: px2rem(20);
        font-weight: bold;
        font-size: px2rem(26);
      }
      img {
        float: right;
        margin-top: px2rem(50);
        margin-right: px2rem(30);
      }
    }
    .label:last-child {
      border-bottom: none;
    }
  }
}
</style>

<style lang="scss">
html,
body,
.person {
  background-color: #fff;
}
</style>