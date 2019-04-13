<!--  -->
<template>
  <div class="addAddress">
    <headAddress :title="title"></headAddress>
    <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field> -->
    <!-- <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field> -->
    <div class="address_wrap">
      <div class="mans">
        <label for="收货人">收货人</label>
        <input
          type="text"
          label="收货人"
          :placeholder="delete_address.contact_name"
          v-model="username"
        >
      </div>
      <div class="man">
        <label for="手机号">手机号码</label>
        <input type="text" label="手机号" :placeholder="delete_address.phone" v-model="phone">
      </div>
      <div class="man">
        <label for="省市地区" @click="choose">省市地区</label>
        <div class="show_wrap" v-if="show">
        </div>
        <input type="text" readonly="true" :placeholder="delete_address.address">
      </div>
      <div class="mandress">
        <label for="详细地址">详细地址</label>
        <input
          type="textarea"
          :placeholder="delete_address.detail"
          v-model="detail"
          v-if="delete_address.detail"
        >
        <input type="textarea" placeholder="请输入详细地址(5-120字)" v-model="detail" v-else>
      </div>
      <div class="default">
        <label for="设置默认地址">设置默认地址</label>
        <mt-switch v-model="value"></mt-switch>
      </div>
      <div class="btn_wrap" @click="finish">
        <img src="../../../assets/images/person/myorder/delete/delete_btn@2x.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
import headAddress from "../../../components/TopHead";
import services from "../../../../service/index.js";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      title: "删除地址",
      username: "",
      phone: "",
      Region: "",
      detail: "",
      show: false,
      something: [],
      Province: "",
      City: "",
      Area: "",
      value: false,
      delete_address: this.$route.params.delete_address,
    };
  },

  components: {
    headAddress,
  },

  computed: {},

  mounted() {
  },

  methods: {
    choose() {
      this.show = !this.show;
    },

    // 完成按钮添加地址
    finish() {
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

      if (this.value === true) {
        var is_defaults = 1;
      } else {
        var is_defaults = 0;
      }
      var address_id = this.delete_address.id;

      MessageBox.confirm("确定删除地址?").then(action => {
        services
          .deleteAddress({
            id: this.id,
            token_sc: this.token,
            address_id: address_id
          })
          .then(res => {
            // console.log(res);
            if (res.data.error_code == 0) {
              this.$router.go(-1);
            }
          });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.addAddress {
  height: 100%;
  width: 100%;
  .address_wrap {
    padding-top: px2rem(120);
    overflow-y: auto;
    height: 100%;
    // height: px2rem(900);
    .man {
      width: 100%;
      height: px2rem(60);
      border-bottom: px2rem(1) solid #ddd;
      margin-bottom: px2rem(10);
      label {
        font-size: px2rem(22);
        line-height: px2rem(60);
        color: rgba(16, 16, 16, 1);
        font-family: PingFangSC-regular;
        margin-left: px2rem(20);
      }
      input {
        margin-left: px2rem(90);
        height: px2rem(50);
        width: px2rem(500);
        -moz-appearance: none;
        outline: 0;
        text-decoration: none;
        font-size: px2rem(25);
        outline: none;
        border: 0;
      }
      input::-webkit-input-placeholder {
        font-size: px2rem(22);
        color: rgba(136, 136, 136, 1);
        font-family: Microsoft Yahei;
        width: px2rem(50);
        height: px2rem(60);
        line-height: px2rem(40);
      }
    }
    .mans {
      width: 100%;
      height: px2rem(60);
      border-bottom: px2rem(1) solid #ddd;
      margin-bottom: px2rem(10);
      label {
        font-size: px2rem(22);
        line-height: px2rem(60);
        color: rgba(16, 16, 16, 1);
        font-family: PingFangSC-regular;
        margin-left: px2rem(20);
      }
      input {
        margin-left: px2rem(112);
        height: px2rem(50);
        width: px2rem(500);
        -moz-appearance: none;
        outline: 0;
        text-decoration: none;
        font-size: px2rem(25);
        outline: none;
        border: 0;
      }
      input::-webkit-input-placeholder {
        font-size: px2rem(22);
        color: rgba(136, 136, 136, 1);
        font-family: Microsoft Yahei;
        width: px2rem(50);
        height: px2rem(60);
        line-height: px2rem(40);
      }
    }

    .mandress {
      width: 100%;
      height: px2rem(120);
      border-bottom: px2rem(1) solid #ddd;
      margin-bottom: px2rem(10);
      label {
        font-size: px2rem(22);
        line-height: px2rem(60);
        color: rgba(16, 16, 16, 1);
        font-family: PingFangSC-regular;
        margin-left: px2rem(20);
      }
      input {
        margin-left: px2rem(90);
        height: px2rem(50);
        width: px2rem(300);
        -moz-appearance: none;
        outline: 0;
        text-decoration: none;
        font-size: px2rem(25);
        outline: none;
        border: 0;
      }
      input::-webkit-input-placeholder {
        font-size: px2rem(22);
        color: rgba(136, 136, 136, 1);
        font-family: Microsoft Yahei;
        width: px2rem(50);
        height: px2rem(60);
        line-height: px2rem(40);
      }
    }
    .distpicker-address-wrapper {
      margin-left: px2rem(60);
      width: px2rem(300);
      .address-header {
        background: #000;
        color: #fff;
      }
      .address-container {
        height: px2rem(100);
      }
    }
    .default {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: px2rem(60);
      border-bottom: px2rem(1) solid #ddd;
      margin-bottom: px2rem(10);
      label {
        font-size: px2rem(22);
        line-height: px2rem(60);
        color: rgba(16, 16, 16, 1);
        font-family: PingFangSC-regular;
        margin-left: px2rem(20);
      }
      .mint-switch {
        margin-right: px2rem(50);
        width: px2rem(100);
        height: px2rem(50);
      }
    }
    .btn_wrap {
      width: 100%;
      background-color: #F64F4F;
      img {
        width: px2rem(750);
        height: px2rem(80);
      }
    }
  }
  .btn_wrap {
    z-index: 99;
    position: fixed;
    height: px2rem(80);
    width: 100%;
    bottom: 0;
    img {
      width: 100%;
      height: px2rem(80);
    }
  }
}
</style>


<style lang="scss" scoped>
    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .mint-tabbar, .btn_wrap, .add_img {
        padding-bottom: px2rem(34) !important
    }
}
</style>
