import Vue from 'vue'
import Vuex from 'vuex'
import input from './modules/input'
import list from './modules/list'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    list
  }
})