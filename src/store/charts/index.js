import DataService from '../../services/DataService'
// import Model from '../../models/blockChain1Mount.json'
// import ModelCDK from '../../models/coindeskChart1week.json'
import ObjectHelper from '../../helpers/objectToArray'
export default {
  state: {
    blockchainChart: {
      origin: 'Blockchain',
      period: '1-mount',
      url: 'https://api.blockchain.info/charts/market-price?timespan=1months&rollingAverage=8hours&format=json',
      values: []
    },
    coindeskchart: {
      origin: 'Coindesk',
      period: '1-week',
      url: 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05',
      values: []
    }
  },
  mutations: {
    SET_BLOCKCHAIN (state, payload) {
      state.blockchainChart.values = payload
    },
    SET_COINDESK (state, payload) {
      state.coindeskchart.values = payload
    }
  },
  actions: {
    async blockchainQueryChart (store) {
      try {
        let result = await DataService.getData(store.state.blockchainChart.url)
        // let result = await Model
        store.commit('SET_BLOCKCHAIN', result.data.values)
        return true
      } catch (error) {
        return false
      }
    },
    async coindeskQueryChart (store) {
      try {
        let preResult = await DataService.getDataCDK()
        // let preResult = await ModelCDK
        let result = await ObjectHelper(preResult.data.bpi)
        store.commit('SET_COINDESK', result)
        return true
      } catch (error) {
        return false
      }
    }
  }
}
