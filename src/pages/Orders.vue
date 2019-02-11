<template>
  <div class="wrapper">
    <q-card v-if="showCards" inline class="card-orders">
      <q-card-title>
        <h4 >Orders Books - Estatisticas</h4>
      </q-card-title>
      <list-custom :listData="orderbook.values"
                   :acronymsDesc="ordersBookUtil"
                   :acronymsName="exchangesNames"
                   :avatarPath="avatarPath"
                   :tipsList="ordersBookTip"/>
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
import ListCustom from '../components/lists/ListOrders'
import Errors from '../components/errors/Errors'
export default {
  components: {
    ListCustom,
    Errors
  },
  data () {
    return {
      avatarPath: 'assets/exchanges/',
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
      let result = await this.getOrdersBook()
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
      helpers.updatActions(this.ordersUpdate, () => this.initializer())
    },
    spinnerTogle () {
      this.spinnerVisible = !this.spinnerVisible
    },
    lastUpdate () {
      this.updateOrderstUpdate(new Date())
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
  .card-orders {
    width: 100%;
  }
</style>
