import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        LoginUser:sessionStorage.getItem('LoginUser') ? JSON.parse(sessionStorage.getItem('LoginUser') ):null,
    },
    mutations:{
        initUser(state, payLoad){
            state.LoginUser = payLoad;
        }
    },
    actions:{},
    getters:{
        getLoginUser(state){
            return state.LoginUser;
        }
    }
})

