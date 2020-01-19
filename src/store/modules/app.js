const app = {
  state: {
    isShowBottomNav: true,
    token: sessionStorage.getItem('token'),
    conversation: [],
    newMessage: {},
    conversationType: Number, // 会话类型
    userGroupId: Number // 会话目标id
  },
  getters: {
    getConversations: state => {
      return state.conversation
    },
    getNewMessage: state => {
      return state.newMessage
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      sessionStorage.setItem('token', token)
    },
    deleteToken (state) {
      state.token = ''
      sessionStorage.removeItem('token')
    },
    TOGGLE_NAV: state => {
      state.isShowBottomNav = !state.isShowBottomNav
    },
    TOGGLE_NAV_INIT: state => {
      state.isShowBottomNav = true
    },
    appendMessage (state, payload) {
     // let new_message = message
     // let wait_message = {}
      state.newMessage = payload.message
    },
    updateConversation (state, payload) {
      if (state.conversation.length > 0) {
        // 删除新消息会话
        state.conversation.forEach(function (item, index) {
          if (item.id === payload.conversation.id) {
            state.conversation.splice(index, 1)
          }
        })
      }
      // 新消息插入到第一个元素
      state.conversation.unshift(payload.conversation)
    },
    setConversation (state, payload) {
      state.conversation = payload.conversation
    },
    targetConversation (state, payload) {
      state.conversationType = payload.conversationType
      state.userGroupId = payload.userGroupId
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    deleteToken ({ commit }) {
      commit('deleteToken')
    },
    toggleNav ({ commit }) {
      commit('TOGGLE_NAV')
    },
    toggleNavInit ({ commit }) {
      commit('TOGGLE_NAV_INIT')
    },
    appendMessage ({ commit }, payload) {
      commit('appendMessage', payload)
    },
    updateConversation ({ commit }, payload) {
      commit('updateConversation', payload)
    },
    setConversation ({ commit }, payload) {
      commit('setConversation', payload)
    },
    targetConversation ({ commit }, payload) {
      commit('targetConversation', payload)
    }
  }
}

export default app
