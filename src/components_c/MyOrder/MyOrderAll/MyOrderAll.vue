<!--  -->
<template>
  <div>
    <MyorderList :allOrderList=allOrderList></MyorderList>
  </div>
</template>

<script>
import services from '../../../../service/index.js';
import MyorderList from '../MyorderList'
export default {
  data () {
    return {
      allOrderList:[]
    };
  },

  components: {
    MyorderList
  },

  computed: {},

  mounted(){
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
    services.orderList({
        id:this.id,
        token_sc:this.token,
        status:0,
        page_size:1,
        page:1
    })
    .then(res=>{
      this.allOrderList = res.data.data
      // console.log(this.allOrderList)
    })
  },

  methods: {}
}

</script>

<style lang="scss" scoped>

</style>
