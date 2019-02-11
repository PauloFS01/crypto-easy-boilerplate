import Vue from 'vue'
import Vuex from 'vuex'

import charts from './charts/index'
import selects from './module-utils/index'
import compare from './compare/index'
import orders from './orders/index'
import global from './globalPrices/index'
import time from './time-manager/index'
import ticker from './exchanges/index'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      charts,
      selects,
      compare,
      orders,
      global,
      time,
      ticker
    }
  })

  return Store
}
