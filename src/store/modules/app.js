const app = {
  state: {
    isShowBottomNav: true
  },
  mutations: {
    TOGGLE_NAV: state => {
      state.isShowBottomNav = !state.isShowBottomNav
    },
    TOGGLE_NAV_INIT: state => {
      state.isShowBottomNav = true
    }
  },
  actions: {
    toggleNav ({ commit }) {
      commit('TOGGLE_NAV')
    },
    toggleNavInit ({ commit }) {
      commit('TOGGLE_NAV_INIT')
    }
  }
}

export default app
