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
      chartData: {
        labels: ['yes', 'no'],
        datasets: [{ backgroundColor: ['red', 'green'], data: [40, 12] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
