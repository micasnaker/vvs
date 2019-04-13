<!--  -->
<template>
  <div class="personSet">
    <TopHead :title="title"></TopHead>
    <div class="content">
      <div class="label">
        <span>个人资料</span>
        <img src="../../assets/images/person/right2x.png" alt>
        <p>去填写</p>
      </div>
      <div class="loginOut">
        <img src="../../assets/images/person/set/loginOut2x.png" alt @click="loginOut">
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from "../../components/TopHead";
import services from "../../../service/index.js";
import { MessageBox } from "mint-ui";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      title: "设置"
    };
  },

  components: {
    TopHead
  },

  computed: {},

  mounted() {},

  methods: {
    loginOut() {
      let token = sessionStorage.getItem("LoginToken");
      if (token) {
        this.token = token;
        // console.log(token+'token_sc')
      }

      let id = sessionStorage.getItem("LoginUser");
      if (id) {
        this.id = id;
        // console.log(id+'aid')
      }
      MessageBox.confirm("确定退出登录?").then(action => {
        services
          .LoginOut({
            id: this.id,
            token_sc: this.token
          })
          .then(res => {
            // console.log(this.token_sc)
            if (res.data.error_code == 0) {
              sessionStorage.removeItem("LoginToken");
              sessionStorage.removeItem("LoginUser");
              sessionStorage.removeItem("LoginName");
              Toast('退出登录成功');
              this.$router.push("/home");
            } else {
              console.log("退出登录失败");
            }
            // console.log(JSON.stringify(res)+"退出登录")
            console.log("退出登录成功");
          });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  line-height: px2rem(120);
  padding-top: 15%;
  .label {
    width: 100%;
    height: px2rem(120);
    // border-bottom: px2rem(1) solid #DCDCDC;
    float: left;
    background-color: #fff;
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
  .loginOut {
    margin-top: px2rem(400);
    text-align: center;
    img {
      width: px2rem(480);
      height: px2rem(54);
    }
  }
}
</style>
