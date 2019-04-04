import axios from 'axios';

// 登录完成后的所有的请求必须在请求的headers中添加token
// Add a request interceptor
let  axiosIns = axios.interceptors.request.use
(function (config) {
    let loginToken = sessionStorage.getItem("LoginToken");
    if(loginToken){
        config.headers.Authorization = "Bearer" + loginToken;
    }
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default {
    login(data){
       return axios.post('/members/login',data);
    },

    logOut(){
        // 当我们退出登录的时候 取消全局注册的钩子(注入与依赖)
        axios.interceptors.reject.eject(axiosIns)
    },

    // 
    getUserProgress(){
       return axios.get('/api/getUserProgress');
    },

    // 首页banner
    getBanners(data){
      return axios.post('/homepage/banners',data);
    },

    // 首页显示的六个一级分类
    getGrids(){
      return axios.post('/homepage/cats');
    },

    // 首页商品
    getShops(data){
      return axios.post('/homepage/goods',data);
    },

    // 用户信息
    getPerson(data){
      return axios.post('/members/info',data);
    },

    // 猜你喜欢商品列表
    getShopCartLike(data){
      return axios.post('/goods/guess_like',data)
    },

    // 购物车列表
    getShopCartList(data){
      return axios.post('/shopping_cart/list',data)
    },

    // 商品详情
    getShopGoodsInfo(data){
      return axios.post('/goods/info',data)
    },

    // 添加商品至购物车
    addShopToCart(data){
      return axios.post('/shopping_cart/add',data)
    },

    // 清空购物车商品
    removeShopCart(data){
      return axios.post('/shopping_cart/remove',data)
    },

    // 订单列表
    orderList(data){
      return axios.post('/orders/list',data)
    },

    // 收货地址
    AddressList(data){
      return axios.post('/address/list',data)
    },

    // 新增收货地址
    addAddress(data){
      return axios.post('/address/add',data)
    },

    // 编辑收货地址
    editAddress(data){
      return axios.post('/address/update',data)
    },

    // 删除收货地址
    deleteAddress(data){
      return axios.post('/address/remove',data)
    },

    // 用户下单
    userPlaceOrder(data){
      return axios.post('/orders/place',data)
    },

    // 退出登录
    LoginOut(data){
      return axios.post('/members/logout',data)
    },

    // 商品分类列表
    getCatsList(data){
      return axios.post('/cats/list',data)
    },

    // 获取搜索页商品列表
    getSearchShopList(data){
      return axios.post('/search/list',data)
    }

}