// import compareModel from '../../models/cryptoCompare.json'
import DataService from '../../services/DataService'
export default {
  state: {
    cryptocompare: {
      origin: 'Cryptocompare',
      period: 'Not-period',
      url: 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,LTC,BCH,ETH,XRP,EOS,QTUM,XLM,ETC,XMR,BTG,TRX,BNB,NEO,GAS,ONT,ZEC,IOT,GVT,DGD',
      values: []
    }
  },
  mutations: {
    SET_CRYPTOCOMPARE (state, payload) {
      state.cryptocompare.values = payload
    }
  },
  actions: {
    async getCryptoCompare (store) {
      try {
        let result = await DataService.getData(store.state.cryptocompare.url)
        // let result = await compareModel
        store.commit('SET_CRYPTOCOMPARE', result.data)
        return true
      } catch (error) {
        return false
      }
    }
  }
}
