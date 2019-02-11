<template>
  <div class="wrapper">
    <list-charts v-if="showCards" :chartLoader="mountArray"/>
    <errors v-else @reload="reloadData"></errors>
    <q-inner-loading :visible="spinnerVisible">
      <q-spinner-gears size="50px" color="faded"></q-spinner-gears>
    </q-inner-loading>
  </div>
</template>
<script>
import { searchGetters, searchActions } from '../store/helpers'
import helpers from '../utils/helpers'
import ListCharts from '../components/charts/ListCharts'
import Errors from '../components/errors/Errors'
export default {
  components: {
    ListCharts,
    Errors
  },
  data () {
    return {
      coindeskQuery: '',
      testVar: '',
      showCards: true,
      spinnerVisible: false
    }
  },
  methods: {
    ...searchActions,
    async initializer () {
      this.spinnerTogle()
      let resultBKC = await this.blockchainQueryChart()
      let resultCDK = await this.coindeskQueryChart()
      if (resultBKC && resultCDK) {
        this.lastUpdate()
        this.spinnerTogle()
      } else {
        this.showCards = false
        this.spinnerTogle()
      }
    },
    update () {
      helpers.updatActions(this.chartUpdate, () => this.initializer())
    },
    spinnerTogle () {
      this.spinnerVisible = !this.spinnerVisible
    },
    lastUpdate () {
      this.updateChartUpdate(new Date())
    },
    reloadData () {
      this.update()
    }
  },
  computed: {
    ...searchGetters,
    mountArray () {
      let array = []
      array.push(this.blockchainChart)
      array.push(this.coindeskchart)
      return array
    }
  },
  created () {
    this.update()
    setInterval(() => this.update(), 300000)
  }
}
</script>
<style scoped>
  .wrapper {
    padding-top: 1rem;
    width: 90%;
    margin: auto;
  }
</style>
