import { mapActions, mapState } from 'vuex'

export const searchGetters = {
  ...mapState({
    lastRequisition: state => state.time.lastRequisition,
    ordersUpdate: state => state.time.ordersUpdate,
    compareLastUpate: state => state.time.compareLastUpate,
    exchangesLastUpate: state => state.time.exchangesLastUpate,
    blochainTickerUpdate: state => state.time.blochainTickerUpdate,
    chartUpdate: state => state.time.chartUpdate,
    blockchainChart: state => state.charts.blockchainChart,
    coindeskchart: state => state.charts.coindeskchart,
    exchangesNames: state => state.selects.exchangesNames,
    exchangeNamesArray: state => state.selects.exchangesNamesArray,
    ordersBookUtil: state => state.selects.ordersBookUtil,
    ordersBookTip: state => state.selects.ordersBookTip,
    cryptoNames: state => state.selects.cryptoNames,
    orderbook: state => state.orders.ordersBook,
    blockchainTickers: state => state.global.blockchainTickers,
    tickers: state => state.ticker.tickers.values,
    cryptocompare: state => state.compare.cryptocompare
  })
}

export const searchActions = mapActions([
  'blockchainQueryChart',
  'coindeskQueryChart',
  'getCryptoCompare',
  'getOrdersBook',
  'getBlockchainTickers',
  'updateLastRequisition',
  'getTickers',
  'updateExchangesLastUpate',
  'updateCompareLastUpate',
  'updateChartUpdate',
  'updateOrderstUpdate',
  'updateBlockchainTickersUpdete'
])
