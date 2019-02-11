// import tickersModel from '../../models/bitValorModel.json'
import DataService from '../../services/DataService'
export default {
  state: {
    tickers: {
      origin: 'bitValorOrders',
      period: 'All-period',
      url: 'https://api.bitvalor.com/v1/ticker.json',
      values: {}
    }
  },
  mutations: {
    SET_TICKERS (state, payload) {
      state.tickers.values = payload
    }
  },
  actions: {
    async getTickers (store) {
      try {
        let result = await DataService.getData(store.state.tickers.url)
        // let result = await tickersModel
        store.commit('SET_TICKERS', result.data)
        return true
      } catch (error) {
        return false
      }
    }
  }
}
