import { createStore, createLogger, useStore as baseUseStore, Store } from 'vuex'
import form from './modules/form'

const store = createStore({
  state() {
    return {
    }
  },
  mutations: {

  },
  actions: {
  },
  getters: {
  },
  modules: {
    form
  }
})



export default store