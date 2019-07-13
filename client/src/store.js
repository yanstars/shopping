import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists1: [],
    lists2: [],
  },
  mutations: {
    addItem(state, value) {
      state.lists1.push(value)
    },
    // deleItem: {}
  },
  actions: {
  }
})
