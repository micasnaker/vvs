<!-- 登录组件 -->
<template>
  <div class="login">
      <h1></h1>
      <div class="top_hat"></div>
      <div class="login_box">
          <!-- logo -->
          <div class="logo_wrap">
          <div class="logo_box"></div>
          </div>
          <!-- 登录的表单 -->
          <div class="input_group" :class="{active:act_index===1,error:errors.has('cno')}">
              <div class="input_wrap">
                  <label class="lab" for="cm_code"><img src="../assets/images/login/user.png" alt=""></label>
              <!-- 这里使用VeeValidate 进行表单验证 -->
              <input name="cno" placeholder="用户名" value="用户名" v-validate="{required:true,max:12,min:4}" @focus="act_index=1" type="number" id="cm_code" v-model="phone">
              </div>
          </div>

          <div class="input_group" :class="{active:act_index===3,error:errors.has('psd')}">
              <div class="input_wrap">
                  <label class="lab" for="Passwd"><img src="../assets/images/login/psd.png" alt=""></label>
              <input name="psd" placeholder="输入密码" value="输入密码" v-validate="{required:true,max:12,min:2}" @focus="act_index=3" type="password" id="Passwd" v-model="pass">
              </div>
          </div>
          <div class="ck_row">
              <div class="ckbox_wrap" @click="remembSet" :class="{active:rememb}">
                  <i class="iconfont" :class="{'icon-check-square':rememb,'icon-border':!rememb}"></i>
                  <span>记住密码</span>
              </div>
              <div @click="autoLoginSet" class="ckbox_wrap" :class="{active:autoLogin}">
                  <!-- <i class="iconfont"></i> -->
                  <i class="iconfont" :class="{'icon-check-square':autoLogin,'icon-border':!autoLogin}"></i>
                  <span style="text-decoration:underline">忘记密码?</span>
              </div>
          </div>
      </div>
      <div class="btn_wrap" @click="loginBtnClick">
          <img src="../assets/images/login/btn2x.png" alt="">
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import '../assets/font/iconfont.css';
import { Indicator, Toast } from 'mint-ui';
import {mapMutations} from 'vuex';
import services from '../../service/index.js'
export default {
  data () {
    return {
        act_index:1,
        phone:"",
        // PNO:"",
        pass:"",
        // tid:"",
        id:"",
        rememb:false,
        autoLogin:false,
    };
  },

  created(){
    // services.getGoodsInfo({
    //         goods_id:1,
    //     })
    //     .then(res=>{
    //         console.log(res.data);
    //     })
  },
    mounted() {
        let data= JSON.parse(localStorage.getItem("Login_data"));
        if(data){
        this.phone = data.phone;
        this.pass = data.pass;
        // this.tid = data.tid;
        this.id = data.id;
        this.autoLogin = data.autoLogin;
        this.rememb = data.rememb;
        }
        // 强制执行页面  让页面挂载完了之后 开始校验
        this.$validator.validate();
        if(this.autoLogin){
            // 如果自动登录 autoLogin 为 true  那么就调用 登录
            this.loginBtnClick();
        }
    },

  methods:{
     // 映射  这里就是讲 initUser 方法映射给了这个methods 实例 故此下面的 存放用户信息到vuex可以直接调用
    //  this.initUser('要传的对象')
      ...mapMutations(["initUser"]),
      remembSet(){
          this.rememb = !this.rememb
          this.rememb || (this.autoLogin = false)
      },
      autoLoginSet(){
        // 设置当前autoLogin为true或者false
        this.autoLogin = !this.autoLogin;
        // 另外设置 rememb的值
        this.autoLogin && (this.rememb = true)
      },
      loginBtnClick(){
        // 判断当前是否校验全部通过
        // 通过this.errors 拿到表演校验信息
        // this.errors.any();   // boolean 如果有错误 返回true  否则false 
        // this.errors.any() 表达的失败返回函数  如果整个为true 那么就是确实出错，返回的应该是错误 否则是 正确
        if(this.errors.any()){
        // console.log("有错误");            
            return;
        }else{
        // console.log("没有错误");
        // 弹出等待的消息遮罩层弹窗 防止二次点击
        Indicator.open('正在登陆...');
        // 没有错误的时候 发送请求, axios
        // setTimeout(()=>{
        //     Indicator.close();
        // },2000)
        services.login({
            phone:this.phone,
            pass:this.pass,
            id:this.id,
        })
        .then(res=>{
            // console.log(res.data.data);
            if(res.data.error_code==0){
                // 登录成功

                // 记住用户名密码  JSON.stringify()对象转成字符串
                localStorage.setItem("Login_data",JSON.stringify({
                    rememb:this.rememb,
                    autoLogin:this.autoLogin,
                    phone:this.rememb ? this.phone : "",
                    pass:this.rememb ? this.pass : ""
                })
                );
                // 把当前登录的用户信息存放到 sessionStoreage里面一份
                // sessionStorage.setItem('LoginUser',JSON.stringify(res.data.data.tid));
                sessionStorage.setItem('LoginUser',JSON.stringify(res.data.data.id));
                sessionStorage.setItem('LoginToken',res.data.data.token_sc);
                sessionStorage.setItem('LoginName',JSON.stringify(res.data.data.user_name));

                // 把当前的登录的用户信息放到 vuex 
                // this.$store.commit('initUser',res.data.user)
                this.initUser(res.data.data.user_name);

                // 跳转到Home页面
                this.$router.push("/home");
            }else{
                // 登录失败，用户密码不正确
                 Toast({
                message:"登录失败，用户密码不正确",
                duration:2000
            });
            }
            Indicator.close();
        })
        .catch(e=>{
            // console.log("登陆失败！",e);
            // 登录异常失败！
            Toast({
                message:"登录异常失败",
                duration:2000
            });
            Indicator.close();
        });
        }
      }
  }
}

</script>

<style lang="scss" scoped>
// @import "../../lib/hotcss/px2rem.scss";
h1 {
    text-align:center;
    font-size:px2rem(36);
    height:px2rem(36);
    padding:px2rem(148-36-44) 0 px2rem(44) 0;
    line-height:px2rem(36);
}

 @mixin login_wrap(){
        width:px2rem(414);
        // background-color: #fff;
        margin:0 auto;
        border-radius:px2rem(20);
 }

.login{
    // background-color: #2ade69;
    height:100%;
    width: 100%;
    background-image: url('../../static/backgroundImg.png');
    background-size: 100% 100%;
    .login_box{
        @include login_wrap();
        height:px2rem(836);
        .logo_wrap{
            padding:px2rem(80) 0;
            .logo_box{
            width:px2rem(210);
            height:px2rem(210);
            // 上下 80 左右auto 居中
            margin:0 auto;
            background:url('../assets/images/login/loginLogo.png');
            // cover 铺满
            background-size:cover;
        }
        }
        @mixin rowStyle(){
            padding:0 px2rem(36);
            color:$text-color;
            width:px2rem(401);
        }
        .input_group{
            height: px2rem(90);
            border:2px solid black;
            border-radius:px2rem(45);
            font-size:$text-size-mid;
            padding:0 px2rem(36);
            color:$text-color;
            width:px2rem(390);
            margin:0 auto px2rem(30);
            background-color: #DCDCDC;
            .input_wrap{
                margin-top: px2rem(20);
                height: px2rem(80);
                .lab{
                height: px2rem(40);
                width: px2rem(50)
            }
                input{
                    border:0 none;
                    font-size:$text-size-mid;
                    width:px2rem(250);
                    padding-left:1.1em;
                    background-color: #DCDCDC;
                    height: px2rem(46);
                    // padding-top: px2rem(20);
                }
            }
            
        }
        // .input_group.active{
        //     color:$act-color;
        //     border:2px solid $act-color;
        // }
        .input_group.error{
            color:red;
            border:2px solid red;
        }
        .ck_row{
            padding:0 px2rem(36);
            color:$text-color;
            width:100%;
            font-size: $text-size;
            display: flex;
            justify-content: space-around;
            .ckbox_wrap{
                padding-top: px2rem(8);
                padding-left: px2rem(20);
                i::before{
                    display: inline-block;
                    height: px2rem(30);
                    width: px2rem(30);
                    font-size: px2rem(30);
                }
                span{
                    color: #fff;
                }
            }
            .ckbox_wrap.active{
                color:#ff5252;
            }
        }
    }
    .btn_wrap{
        width:100%;
        height: px2rem(120);
        text-align: center;
        margin-top: px2rem(10);
    }
}
</style>

<!--如果想在 vue中设置全局样式，可以在这里再加一个 style-->
<style lang="scss">
html,
body,
#app {
    height: 100%;
}
</style>
