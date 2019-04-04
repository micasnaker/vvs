<!--  -->
<template>
  <div>
      <personContainer :persons=persons></personContainer>
  </div>
</template>

<script>
import personContainer from '../components_c/personContainer/personContainer'
import services from '../../service/index.js'
import store from '../store/store.js'
export default {
  data () {
    return {
      persons:[],
    };
  },

  components: {
    personContainer
  },

  computed: {},

  created() {
    // let id= sessionStorage.getItem('LoginUser');
    // if(!id){

    // }
  },

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

     services.getPerson({
       token_sc:this.token,
       id:this.id,
     })
    .then(res=>{
        this.persons = res.data.data;
        // console.log(JSON.stringify(res)+"用户信息")
    })
  },

  methods: {
    
  }
}

</script>

<style>



</style>