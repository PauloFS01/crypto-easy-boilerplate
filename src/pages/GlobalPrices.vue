<template>
  <div class="wrapper">
    <q-card v-if="showCards" inline class="card-orders">
      <q-card-title>
        <h4 >Prices - Globalmente</h4>
      </q-card-title>
      <list-prices :tickers="blockchainTickers.values" :inconPaths="inconPath"></list-prices>
    </q-card>
    <errors v-else @reload="reloadData"></errors>
    <q-inner-loading :visible="spinnerVisible">
      <q-spinner-gears size="50px" color="faded"></q-spinner-gears>
    </q-inner-loading>
  </div>
</template>
<script>
import { searchGetters, searchActions } from '../store/helpers'
import helpers from '../utils/helpers'
import Errors from '../components/errors/Errors'
import ListPrices from '../components/lists/ListPrices'
export default {
  components: {
    ListPrices,
    Errors
  },
  data () {
    return {
      inconPath: 'assets/flags/',
      spinnerVisible: false,
      showCards: true
    }
  },
  computed: {
    ...searchGetters
  },
  methods: {
    ...searchActions,
    async initializer () {
      this.spinnerTogle()
      let result = await this.getBlockchainTickers()
      if (result) {
        this.lastUpdate()
        this.spinnerTogle()
      } else {
        console.log('error')
        this.showCards = false
        this.spinnerTogle()
      }
    },
    update () {
      helpers.updatActions(this.blochainTickerUpdate, () => this.initializer())
    },
    spinnerTogle () {
      this.spinnerVisible = !this.spinnerVisible
    },
    lastUpdate () {
      this.updateBlockchainTickersUpdete(new Date())
    },
    reloadData () {
      this.spinnerVisible = true
      this.update()
    }
  },
  created () {
    this.update()
    setInterval(() => this.update(), 300000)
  }
}
</script>
<style scoped>
  .card-orders {
    width: 100%;
  }
</style>
