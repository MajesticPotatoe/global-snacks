import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './pathify'

// Imports of individual modules
import appSnackbar from '@/store/app-snackbar'

Vue.use(Vuex)

const plugins = [
  pathify.plugin,
]

const modules = {
  appSnackbar,
}

export default new Vuex.Store({
  plugins,
  modules,
})
