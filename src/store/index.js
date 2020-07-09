import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false,
    isActive: true,
    isShow: 1
  },
  mutations: {
    collapse () {
      this.state.collapsed = !this.state.collapsed
    },
    collapseToTrue () {
      this.state.collapsed = true
    },
    collapseToFalse () {
      this.state.collapsed = false
    },
    isActiveToTrue () {
      this.state.isActive = true
    },
    isActiveToFalse () {
      this.state.isActive = false
    },
    isShowModify (show) {
      this.state.isShow = show
    }
  },
  actions: {
  },
  modules: {
  }
})
