// import ordersModel from '../../models/bitValorOrders.json'
import DataService from '../../services/DataService'
export default {
  state: {
    ordersBook: {
      origin: 'Cryptocompare',
      period: 'Not-period',
      url: 'https://api.bitvalor.com/v1/order_book_stats.json',
      values: {}
    }
  },
  mutations: {
    SET_ORDERSBOOK (state, payload) {
      state.ordersBook.values = payload
    }
  },
  actions: {
    async getOrdersBook (store) {
      try {
        let result = await DataService.getData(store.state.ordersBook.url)
        // let result = await ordersModel
        store.commit('SET_ORDERSBOOK', result.data)
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
}
