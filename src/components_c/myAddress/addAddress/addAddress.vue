<!--  -->
<template>
  <div class="addAddress">
    <headAddress :title="title"></headAddress>
    <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field> -->
    <!-- <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field> -->
    <div class="address_wrap">
      <div class="mans">
        <label for="收货人">收货人</label>
        <input type="text" label="收货人" placeholder="请输入收货人姓名" v-model="username">
      </div>
      <div class="man">
        <label for="手机号">手机号码</label>
        <input type="text" label="手机号" placeholder="请输入手机号码" v-model="phone">
      </div>
      <div class="man">
        <label for="省市地区" @click="choose">省市地区</label>
        <div class="show_wrap" v-if="show">
          <VDistpicker type="mobile" @selected="onSelected"></VDistpicker>
        </div>
      </div>
      <div class="mandress">
        <label for="详细地址">详细地址</label>
        <input type="textarea" placeholder="请输入详细地址(5-120个字)" v-model="detail">
      </div>
      <div class="default">
        <label for="设置默认地址">设置默认地址</label>
        <mt-switch v-model="value"></mt-switch>
      </div>
      <div class="btn_wrap" @click="finish">
        <img src="../../../assets/images/person/myorder/add/btn@2x.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
import headAddress from "../../../components/TopHead";
import VDistpicker from "v-distpicker";
import services from "../../../../service/index.js";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      title: "新增地址",
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
      citys:[]
    };
  },

  components: {
    headAddress,
    VDistpicker
  },

  computed: {},

  mounted() {
    //   console.log(this.value)
  },

  methods: {
    choose() {
      this.show = !this.show;
    },

    //   onChangeProvince(a){
    //     var Province = a.value
    //     console.log(Province)
    //   },
    //   onChangeCity(a){
    //     var City = a.value
    //     console.log(City)
    //   },
    //   onChangeArea(a){
    //     var Area = a.value
    //     console.log(Area)
    //     this.show=false
    //   }
    onSelected(data) {
      //   alert(data.province + ' | ' + data.city + ' | ' + data.area)
      var citys = [];
      this.citys = data;
      //   console.log(this.citys)
      this.show = false;
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
      var is_default = is_defaults;
      var contact_name = this.username;
      var phone = this.phone;
      var address1 = JSON.stringify(this.citys.province.value).replace(
        /\"/g,
        ""
      );
      var address2 = JSON.stringify(this.citys.city.value).replace(/\"/g, "");
      var address3 = JSON.stringify(this.citys.area.value).replace(/\"/g, "");
      var address_l = address1 + address2 + address3;

      MessageBox.confirm("确定执行此操作?").then(action => {
        services
          .addAddress({
            id: this.id,
            token_sc: this.token,
            contact_name: this.username,
            phone: this.phone,
            address: address_l,
            is_default: is_defaults
          })
          .then(res => {
            // console.log(res);
            if(res.data.error_code==0){
               this.$router.go(-1)
            }
          });
      });
      // services.addAddress({
      //     id:this.id,
      //     token_sc : this.token,
      //     contact_name:this.username,
      //     phone:this.phone,
      //     address:address_l,
      //     is_default:is_defaults
      // })
      // .then(res=>{

      //     if(res.data.error_code==0){

      //     }
      // })

      // console.log("开关"+this.value,"地址"+JSON.stringify(this.citys.area.value),"姓名"+this.username,"手机"+this.phone,"备注"+this.detail)
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
      img {
        width: px2rem(750);
        height: px2rem(80);
      }
    }
  }
}
</style>
