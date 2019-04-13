import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import Home from '@/components/Home'
// import Vip from '@/components_c/Vip'
// import ShopCar from '@/components_c/ShopCar'
// import Person from '@/components_c/Person'
import personSet from '@/components_c/personSet/personSet'
import Search from '@/components_c/SearchMenu/SearchMenu'
import SearchShop from '@/components_c/shopCartList/SearchShop/SearchShop'
import SearchShops from '@/components_c/shopCartList/SearchShops/SearchShops'
import GoodsInfo from '@/components/goodsInfo/goodsInfo'
import ShopIntro from '@/components/goodsInfo/ShopIntro/ShopIntro'
import ShopParame from '@/components/goodsInfo/ShopParame/ShopParame'
import ShopNotice from '@/components/goodsInfo/ShopNotice/ShopNotice'
import myAddress from '@/components_c/myAddress/myAddress'
import addAddress from '@/components_c/myAddress/addAddress/addAddress'
import editAddress from '@/components_c/myAddress/editAddress/editAddress'
import deleteAddress from '@/components_c/myAddress/deleteAddress/deleteAddress'
import myCustomer from '@/components_c/myCustomer/myCustomer'
import myOrder from '@/components_c/myOrder/myOrder'
import MyOrderAll from '@/components_c/myOrder/MyOrderAll/MyOrderAll'
import checkLogistics from '@/components_c/myOrder/checkLogistics'
import MyOrderConfirm from '@/components_c/myOrder/MyOrderConfirm/MyOrderConfirm'
import MyOrderShipped from '@/components_c/myOrder/MyOrderShipped/MyOrderShipped'
import MyOrderFinish from '@/components_c/myOrder/MyOrderFinish/MyOrderFinish'
import MyOrderRepeal from '@/components_c/myOrder/MyOrderRepeal/MyOrderRepeal'
import closeShop from '@/components_c/shopCartList/closeShop'
import paymentSu from '@/components_c/shopCartList/paymentSu'
import ShopSearch from '@/components_c/SearchMenu/Shopsearch'
import { resolve } from 'path';

// // 路由懒加载
// const Home = () => import('@/components/Home')
// const Vip = () => import('@/components_c/Vip')
// const ShopCar = () => import('@/components_c/ShopCar')
// const Person = () => import('@/components_c/Person')


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/Home'],resolve),
      redirect:'/home',
      meta: {
        showFooter: true, // 带了meta 下的 showFooter 为true 的 才会显示底部tabbar
        keepAlive: false 
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/Home'],resolve),
      meta: {
        showFooter: true,
        keepAlive: true 
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/vip',
      name: 'Vip',
      component: resolve => require(['@/components_c/Vip'],resolve),
      meta: {
        showFooter: true,
        keepAlive: true 
      }
    },
    {
      path:'/shopcar',
      name:"ShopCar",
      component:resolve => require(['@/components_c/ShopCar'],resolve),
      meta: {
        showFooter: true,
        keepAlive: false 
      }
    },
    {
      path:'/person',
      name:"Person",
      component:resolve => require(['@/components_c/Person'],resolve),
      meta: {
        showFooter: true,
        keepAlive: true 
      }
    },
    {
      path:'/search',
      name:"Search",
      component:Search,
      meta: {
        showFooter: true,
        keepAlive: false
      },
      children:[
        {
          path:'/search/shop',
          name:'SearchShop',
          component:SearchShop,
          meta: {
          keepAlive: false,
          showFooter: true 
          },
        },
        {
          path:'/search/shops',
          name:'SearchShops',
          component:SearchShops,
          meta: {
          keepAlive: false,
          showFooter: true 
          },
        }
      ]
    },
    {
      path:'/goods',
      name:"GoodsInfo",
      component:GoodsInfo,
      redirect: '/goods/shopintro',
      meta:{
        keepAlive: true
      },
      children:[
        {
          path:'/goods/shopintro',
          component: ShopIntro,
          name: "ShopIntro",
        },
        {
          path:'/goods/shopparame',
          component: ShopParame,
          name: "ShopParame"
        },
        {
          path:'/goods/shopnotice',
          component: ShopNotice,
          name: "ShopNotice"
        },
        {
          path: '/goods',
          redirect: '/goods/shopintro'
        }
      ]
    },
    {
      path:'/myaddress',
      name:"myAddress",
      component:myAddress,
      meta: {
        showFooter: false,
        keepAlive: false 
      }
    },
    {
      path:'/addaddress',
      name:"addAddress",
      component:addAddress,
      meta: {
        showFooter: false,
        keepAlive: false 
      }
    },
    {
      path:'/deleteaddress',
      name:"deleteAddress",
      component:deleteAddress,
      meta: {
        showFooter: false,
        keepAlive: false 
      }
    },
    {
      path:'/editaddress',
      name:"editAddress",
      component:editAddress,
      meta: {
        showFooter: false,
        keepAlive: false 
      }
    },
    {
      path:'/mycustomer',
      name:"myCustomer",
      component:myCustomer,
      meta:{
        showFooter:false,
        keepAlive:true
      }
    },
    {
      path:'/myorder',
      name:"myOrder",
      component:myOrder,
      meta:{
        showFooter:false,
        keepAlive:true
      },
      children:[
        {
          path:'/myorder/all',
          component: MyOrderAll,
          name: "MyOrderAll"
        },
        {
          path:'/myorder/confirm',
          component: MyOrderConfirm,
          name: "MyOrderConfirm"
        },
        {
          path:'/myorder/shipped',
          component: MyOrderShipped,
          name: "MyOrderShipped"
        },
        {
          path:'/myorder/finish',
          component: MyOrderFinish,
          name: "MyOrderFinish"
        },
        {
          path:'/myorder/repeal',
          component: MyOrderRepeal,
          name: "MyOrderRepeal"
        },
        {
          path: '/myorder',
          redirect: '/myorder/all'
        }
      ]
    },
    {
      path:'/closeshop',
      name:"closeShop",
      component:closeShop,
      meta:{
        showFooter:false,
        keepAlive:false
      }
    },
    {
      path:'/checklogistics',
      name:"checkLogistics",
      component:checkLogistics,
      meta:{
        showFooter:false,
        keepAlive:false
      }
    },
    {
      path:'/personset',
      name:"personSet",
      component:personSet,
      meta:{
        showFooter:false,
        keepAlive:false,
      }
    },
    {
      path:'/paymentsu',
      name:"paymentSu",
      component:paymentSu,
      meta:{
        showFooter:false,
        keepAlive:false
      }
    },
    {
      path:'/shopsearch',
      name:"ShopSearch",
      component:ShopSearch,
      meta:{
        showFooter:false,
        keepAlive:false
      }
    }
  ]
})
