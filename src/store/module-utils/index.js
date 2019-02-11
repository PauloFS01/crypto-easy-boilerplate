export default {
  state: {
    exchangesNames: {
      ARN: 'Arena Bitcoin',
      B2U: 'BitcoinToYou',
      BAS: 'Basebit',
      BIV: 'Bitinvest',
      BSQ: 'Bitsquare',
      BTD: 'BitcoinTrade',
      CAM: 'BitCambio',
      FLW: 'flowBTC',
      FOX: 'FoxBit',
      LOC: 'LocalBitcoins',
      MBT: 'Mercado Bitcoin',
      NEG: 'Negocie Coins',
      PAX: 'Paxful',
      WAL: 'Walltime',
      BZX: 'Braziliex',
      total: 'Total'
    },
    cryptoNames: {
      USD: 'USD',
      LTC: 'Litecoin',
      BCH: 'Bitcoin Cash',
      ETH: 'Ethereum',
      XRP: 'Ripple',
      EOS: 'EOS',
      QTUM: 'Qtum',
      XLM: 'Stellar',
      ETC: 'Ethereum Classic',
      XMR: 'Monero',
      BTG: 'Bitcoin Gold',
      TRX: 'Tronix',
      BNB: 'Binance',
      NEO: 'NEO',
      GAS: 'GAS',
      ONT: 'Ontology',
      ZEC: 'ZCash',
      IOT: 'IOTA',
      GVT: 'Genesis Vision',
      DGD: 'Digix DAO'
    },
    exchangesNamesArray: [
      { value: 'all', label: 'All' },
      { value: 'BZX', label: 'Braziliex' },
      { value: 'MBT', label: 'Mercado Bitcoin' },
      { value: 'BTD', label: 'BitcoinTrade' },
      { value: 'B2U', label: 'BitcoinToYou' },
      { value: 'WAL', label: 'Walltime' },
      { value: 'CAM', label: 'BitCambio' }
    ],
    ordersBookTip: {
      bid: 'melhor (mais alta) oferta de compra',
      ask: 'melhor (mais baixa) oferta de venda',
      bid_vol: 'total em BTC de ofertas de compra',
      bid_money: 'total em Reais de ofertas de compra',
      bid_count: 'número de ofertas de compra',
      ask_vol: 'total em BTC de ofertas de venda',
      ask_money: 'total em Reais de ofertas de venda',
      ask_count: 'número de ofertas de venda'
    },
    ordersBookUtil: {
      bid: 'Compra',
      ask: 'Venda',
      bid_vol: 'VOlume/BTC',
      bid_money: 'Total Compra',
      bid_count: 'QTD',
      ask_vol: 'QTD/BTC',
      ask_money: 'Total Venda',
      ask_count: 'QTD vendas'
    }
  },
  mutations: {},
  actions: {},
  getters: {}
}
