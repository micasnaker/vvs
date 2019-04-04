// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';
import store from './store/store'
import helper from '../lib/helper'
import { Tabbar, TabItem } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Search } from 'mint-ui';
import { Field } from 'mint-ui';
import { Header } from 'mint-ui';
import { Lazyload } from 'mint-ui';
import VDistpicker from 'v-distpicker'
import { Switch } from 'mint-ui';


import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(Lazyload);
Vue.component('v-distpicker', VDistpicker);

Vue.component(Header.name, Header);

Vue.component(Field.name, Field);

Vue.component(Search.name, Search);

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Switch.name, Switch);

Vue.use(iView);


// 移动端 hotcss 适配方案 
// 1、导入
import '../lib/hotcss/hotcss'
// 引入 mint-ui 的样式
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

import axios from 'axios'
// if(location.hostname === 'localhost'){
//   axios.defaults.baseURL = process.env.API_PATH_DEV
// }  else if(location.hostname === 'http://api.tumujinhua.com'){
//   axios.defaults.baseURL = process.env.API_PATH_PROD
// } else if(location.hostname === '192.168.0.112'){
//   axios.defaults.baseURL = process.env.API_PATH_DEV
// } else if(location.hostname === '114.55.116.174:81'){
//   axios.defaults.baseURL = process.env.API_PATH_DEV
// } else{
//   axios.defaults.baseURL = process.env.API_PATH_DEV
// }

if(location.hostname === 'localhost'){
  axios.defaults.baseURL = process.env.API_PATH_DEV
}  else if(location.hostname === 'http://api.tumujinhua.com'){
  axios.defaults.baseURL = process.env.API_PATH_PROD
} else if(location.hostname === '114.55.116.174:81'){
  axios.defaults.baseURL = process.env.API_PATH_DEV
} else{
  axios.defaults.baseURL = process.env.API_PATH_DEV
}

Vue.use(VeeValidate);

// router.beforeEach((to, from, next) => {
//   if(to.path != '/'){
//     // 校验用户是否已登录
//     if(helper.getTypes(store.getters.getLoginUser)==="Object"){
//       next();
//     }else{
//       next("/login");
//     }
//   }else{
//     next();
//   }
// })



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
