<script>
import { Line } from 'vue-chartjs'
export default {
  props: {
    chartDatas: {
      type: Array
    },
    chartLabels: {
      type: Array
    }
  },
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.chartLabels,
      datasets: [
        {
          borderWidth: 1.5,
          pointStyle: 'line',
          label: 'Bitcoin by',
          backgroundColor: 'transparent',
          borderColor: '#ff6d00',
          data: this.chartDatas
        }
      ]
    })
  }
}
</script>
