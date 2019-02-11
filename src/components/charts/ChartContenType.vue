<template>
  <div class="wrapper">
    <div class="chart-body">
      <div class="chart-title">
        {{ origin }}
      </div>
      <div class="chart-content">
        <div v-if="changeTypeChart">
          <bar-chart v-if="showCharts" :chartDatas="mapValues" :chartLabels="mapDates"/>
        </div>
        <div v-else>
          <line-chart v-if="showCharts" :chartDatas="mapValues" :chartLabels="mapDates"/>
        </div>
      </div>
      <q-card-separator />
      <div class="chart-footer">
       <q-btn @click="toggleToLine" flat>Linhas</q-btn>
       <q-btn @click="toggleToBar" flat>Barras</q-btn>
      </div>
      <q-card-separator />
    </div>
  </div>
</template>
<script>
import BarChart from './BarChart'
import LineChart from './LineChart'
export default {
  components: {
    BarChart,
    LineChart
  },
  props: {
    datas: {
      type: Array
    },
    origin: {
      type: String
    }
  },
  data () {
    return {
      toogleChart: 'Bar'
    }
  },
  computed: {
    changeTypeChart () {
      return this.toogleChart === 'Bar'
    },
    mapDates () {
      let arrayDates = []
      if (this.origin === 'Coindesk') {
        arrayDates = this.datas.map(data => {
          let date = new Date(data.x).getDate() + 1
          return date
        })
      } else {
        arrayDates = this.datas.map(data => {
          let date = new Date(data.x * 1000).getDate()
          return date
        })
      }
      return arrayDates
    },
    mapValues () {
      let arrayValues = this.datas.map(value => value.y)
      return arrayValues
    },
    showCharts () {
      return this.mapDates.length > 0 || false
    }
  },
  methods: {
    toggleToLine () {
      this.toogleChart = 'Line'
    },
    toggleToBar () {
      this.toogleChart = 'Bar'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~variables'
.chart-body
  margin-bottom: 1em

.chart-title
  height $flex-gutter-lg;
  padding .5em;
  background-color $green-2;

</style>
