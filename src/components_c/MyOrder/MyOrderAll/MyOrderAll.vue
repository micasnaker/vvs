<!--  -->
<template>
  <div>
    <MyorderList></MyorderList>
  </div>
</template>

<script>
import services from '../../../../service/index.js';
import MyorderList from '../MyorderList'
export default {
  data () {
    return {

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
        token_sc:this.token,
        id:this.id,
        status:3,
        page_size:4,
        page:1
      })
      .then(res=>{
        // console.log(res)
      })
  },

  methods: {}
}

</script>

<style lang="scss" scoped>

</style>
