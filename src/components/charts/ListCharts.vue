<template>
  <div>
    <div v-for="(load, index) in chartLoader" :key="index" >
        <ChartContent :datas="load.values" chartType="Bar" :origin="load.origin"/>
    </div>
  </div>
</template>
<script>
import ChartContent from './ChartContenType'
export default {
  components: {
    ChartContent
  },
  props: {
    chartLoader: {
      type: Array
    }
  }
  /*
  computed: {
    responseLoader () {
      let array = []
      array.push(this.chartLoader.values)
      return array
    }
  } */
}
</script>
