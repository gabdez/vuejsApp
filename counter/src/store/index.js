import Vue from 'vue'
import Vuex from 'vuex'

import example from './moduleExample'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function () {
  const Store = new Vuex.Store({
    modules: {
      example
    }
  })

  return Store
}
