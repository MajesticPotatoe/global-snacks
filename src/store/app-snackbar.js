import { make } from 'vuex-pathify'

const state = {
  snackbar: {
    show: false,
    text: 'Message',
    color: 'success',
    timeout: 2000
  }
}

const mutations = make.mutations(state)
const actions = make.actions(state)

export default {
  namespaced: true,
  actions,
  state,
  mutations
}
