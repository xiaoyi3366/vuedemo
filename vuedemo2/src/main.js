import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state:{
      count: 0
  },
  mutations:{
    increment(state){
      state.count++
    }
  },
  actions:{
    increment({state}){//有state数据，不是state,类似this.store实例
      setTimeout(()=>{
        state.count++
      },3000)
    }
  },
  getters:{//getter起到缓存的作用
    doubleCount(state){
      return state.count *2
    }
  }
})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
