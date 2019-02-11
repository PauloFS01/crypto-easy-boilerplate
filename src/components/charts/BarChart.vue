<script>
import { Bar } from 'vue-chartjs'
export default {
  props: {
    chartDatas: {
      type: Array
    },
    chartLabels: {
      type: Array
    }
  },
  data () {
    return {
      chartRender: {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'Bitcoin by',
            borderWidth: 0.3,
            data: this.chartDatas,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ]
          }
        ]
      },
      options: {
        type: Object,
        default: null
      }
    }
  },
  extends: Bar,
  mounted () {
    this.renderChart(this.chartRender, this.options)
  }
}
</script>
