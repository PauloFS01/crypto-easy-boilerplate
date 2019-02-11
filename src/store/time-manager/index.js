export default {
  state: {
    exchangesLastUpate: '',
    compareLastUpate: '',
    chartUpdate: '',
    ordersUpdate: '',
    blochainTickerUpdate: ''
  },
  mutations: {
    SET_EXCHARGESLASTUPDATE (state, payload) {
      state.exchangesLastUpate = payload
    },
    SET_COMPARELASTUPDATE (state, payload) {
      state.compareLastUpate = payload
    },
    SET_CHARTS (state, payload) {
      state.chartUpdate = payload
    },
    SET_ORDERS (state, payload) {
      state.ordersUpdate = payload
    },
    SET_BLOCKCHAINTICKERSUPDATE (state, payload) {
      state.blochainTickerUpdate = payload
    }
  },
  actions: {
    updateLastRequisition (store, time) {
      store.commit('SET_TIME', time)
    },
    updateExchangesLastUpate (store, time) {
      store.commit('SET_EXCHARGESLASTUPDATE', time)
    },
    updateCompareLastUpate (store, time) {
      store.commit('SET_COMPARELASTUPDATE', time)
    },
    updateChartUpdate (store, time) {
      store.commit('SET_CHARTS', time)
    },
    updateOrderstUpdate (store, time) {
      store.commit('SET_ORDERS', time)
    },
    updateBlockchainTickersUpdete (store, time) {
      store.commit('SET_BLOCKCHAINTICKERSUPDATE', time)
    }
  }
}
