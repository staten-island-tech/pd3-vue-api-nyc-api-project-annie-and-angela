<template>
  <div></div>
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
  comonents: { Bar },

  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      chartOptions: {
        reponsive: true
      }
      /*  labels: [],
      datasets: [
        {
          label: 'Complaint Types',
          data: [],
          backgroundColor: [],
          hoverOffset: 4
        }
      ] */
    }
  }
}
</script>

<style lang="scss" scoped></style>
