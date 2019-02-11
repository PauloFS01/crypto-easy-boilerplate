// import blockchainTickers from '../../models/blockchainTickers.json'
import DataService from '../../services/DataService'
export default {
  state: {
    blockchainTickers: {
      origin: 'Blockchain',
      period: 'Not-period',
      url: 'https://blockchain.info/pt/ticker',
      values: {}
    }
  },
  mutations: {
    SET_BLOCKCHAINTICKERS (state, payload) {
      state.blockchainTickers.values = payload
    }
  },
  actions: {
    async getBlockchainTickers (store) {
      try {
        let result = await DataService.getData(store.state.blockchainTickers.url)
        // let result = await blockchainTickers
        store.commit('SET_BLOCKCHAINTICKERS', result.data)
        return true
      } catch (error) {
        return false
      }
    }
  }
}
