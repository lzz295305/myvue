import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0,
    num:1
  },
  mutations:{
    increment (store,num){
      state.count++
      state.num = num;
    }
  },
  actions:{
    increment({commit},obj){
     commit('increment'.obj)
    }
  }
})
