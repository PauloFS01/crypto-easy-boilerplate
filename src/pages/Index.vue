<template>
  <div class="wrapper">
    <c-list v-if="showCards" :tickers="tickers" :exchangeNames="exchangeNamesArray"></c-list>
    <errors v-else @reload="reloadData"></errors>
    <q-inner-loading :visible="spinnerVisible">
      <q-spinner-gears size="50px" color="faded"></q-spinner-gears>
    </q-inner-loading>
  </div>
</template>
<script>
import { searchGetters, searchActions } from '../store/helpers'
import helpers from '../utils/helpers'
import CList from '../components/cards/CardList'
import Errors from '../components/errors/Errors'
export default {
  name: 'PageIndex',
  components: {
    CList,
    Errors
  },
  data () {
    return {
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
      let result = await this.getTickers()
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
      helpers.updatActions(this.exchangesLastUpate, () => this.initializer())
    },
    spinnerTogle () {
      this.spinnerVisible = !this.spinnerVisible
    },
    lastUpdate () {
      this.updateExchangesLastUpate(new Date())
    },
    reloadData () {
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
</style>
