<!--  -->
<template>
  <div class="Myaddress">
      <TopHeader :title=title></TopHeader>
      <div class="address" v-for="(item, index) in myAddress" :key="index">
        <div class="content">
          <p>{{item.contact_name}}</p>
          <p>{{item.phone}}</p>
          
        </div>
        <p class="address_wrap">{{item.address}}</p>
        <div class="handle">
          <div class="default">
          <input type="checkbox" v-model="item.is_default">
          <label for="check">默认地址</label>  
          </div>
          <div class="edit_del">
            <img @click="editAddress(item)" src="../../assets/images/address/edit@2x.png" alt="">
            <img @click="deleteAddress(item)" src="../../assets/images/address/del@2x.png" alt="">
          </div>
        </div>
      </div>
      
      <div class="add_address" @click="addAddress">
        <img src="../../assets/images/address/btn.png" alt="">
      </div>
  </div>
  
</template>

<script>
import TopHeader from '../../components/TopHead'
import services from '../../../service/index.js'
export default {
  data () {
    return {
    title:"收货地址",
    single:true,
    myAddress:[]
    };
  },

  components: {
      TopHeader
  },

  computed: {},

  mounted(){
    // 收货地址列表
    let token= sessionStorage.getItem('LoginToken');
        if(token){
        this.token = token;
        // console.log(token+'token_sc')
        }

    let id= sessionStorage.getItem('LoginUser');
        if(id){
        this.id = id;
        // console.log(id+'tid')
        }
    services.AddressList({
      token_sc:this.token,
      id:this.id
    })
    .then(res=>{
      this.myAddress = res.data.data;
    })
  },

  methods: {
    // 去添加地址
    addAddress(){
      this.$router.push("/addaddress");
    },

    // 去编辑地址
    editAddress(item){
      var edit_address = item
      // console.log(edit_address+"1")
      this.$router.push({name:'editAddress',params:{edit_address}});
    },
    
    // 去删除地址
    deleteAddress(item){
      var delete_address = item
      this.$router.push({name:'deleteAddress',params:{delete_address}});
    }
  }
}

</script>

<style lang="scss" scoped>
.Myaddress{
  height: 100%;
  .address:nth-child(2){
    padding-top: 20%;
  }
  .address{
  padding-bottom: 20%;
  height: 100%;
  width: 100%;
  z-index: 20;
  .content{
    display: flex;
    justify-content: space-between;
    padding: 0 px2rem(55);
    p{
      font-size: px2rem(24);
      font-family: PingFangSC-regular;
      line-height: px2rem(30);
      color: rgba(16,16,16,1);
    }
  }
  .address_wrap{
    font-size: px2rem(20);
    color: rgba(102,100,102,1);
    font-family: PingFangSC-regular;
    line-height: px2rem(50);
    height: px2rem(50);
    margin-top: px2rem(10);
    padding-left: px2rem(55);
  }
  .handle{
    border-top: px2rem(1) solid #ddd;
    width: 100%;
    height: px2rem(60);
    display: flex;
    justify-content: space-between;
    padding: 0 px2rem(45);
    margin-top: px2rem(20);
    .default{
      margin-top: px2rem(20);
      width: px2rem(130);
      height: px2rem(50);
      display: flex;
      justify-content: space-around;
      input{
        width: px2rem(30);
        height: px2rem(30);
      }
      label{
        font-size: px2rem(20);
        font-family: PingFangSC-regular;
        color: rgba(16,16,16,1);
      }
    }
    .edit_del{
      margin-top: px2rem(20);
      width: px2rem(160);
      display: flex;
      justify-content: space-around;
      img{
        width: px2rem(47);
        height: px2rem(23);
        margin: 0 auto;
      }
    }
  }
}

.add_address{
  z-index: 99;
  position: fixed;
  height: px2rem(98);
  width: 100%;
  bottom: 0;
  img{
    width: 100%;
    height: px2rem(98);
  }
}
}

</style>
