<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'Alabama''Alaska''Arizona' 'Arkansas''California''Colorado'    'Connecticut''Delaware''Florida''Georgia''Hawaii''Idaho''Illinois''Indiana''Iowa' 'Kansas''Kentucky''Louisiana''Maine''Maryland''Massachusetts''Michigan''Minnesota''Mississippi''Missouri''Montana''Nebraska''Nevada''New Hampshire''New Jersey''New Mexico''New York''North Carolina''North Dakota''Ohio''Oklahoma''Oregon''Pennsylvania''Rhode Island''South Carolina''South Dakota''Tennessee''Texas''Utah''Vermont''Virginia''Washington''West Virginia''Wisconsin''Wyoming'],
        datasets: [{ data: [40, 20, 12] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
