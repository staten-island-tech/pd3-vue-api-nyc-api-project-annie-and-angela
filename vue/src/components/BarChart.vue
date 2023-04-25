<template>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'satisfactionChart',
  components: { Doughnut },
  data() {
    return {
      yesArray: this.dataArray.filter((client) => client.satisfaction === 'yes'),
      chartData: {
        labels: ['yes', 'no'],
        datasets: [{ backgroundColor: ['red', 'green'], data: [yesArray.length] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },

  props: {
    dataArray: Array
  }
}
</script>
