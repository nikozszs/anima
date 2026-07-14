import { createStore, createLogger, useStore as baseUseStore, Store } from 'vuex'

const store = createStore({
  state() {
    return {
    }
  },
  mutations: {
    // setMessage(state, message) {
    //   state.message = message
    // },
    // clearMessage(state) {
    //   state.message = null
    // },
    // openSidebar(state) {
    //   state.sidebar = true
    // },
    // closeSidebar(state) {
    //   state.sidebar = false
    // }
  },
  actions: {
    // setMessage({commit}, message) {
    //   commit('setMessage', message)
    //   setTimeout(() => {
    //     commit('clearMessage')
    //   }, 5000);
    // }
  },
  getters: {
  },
  modules: {
  }
})

export default store