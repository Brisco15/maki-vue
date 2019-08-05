import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart_items: []

  },
  mutations: {
    pushToCard(state, item){
      state.cart_items.push(item)
    }

  },
  actions: {

  }
})