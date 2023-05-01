<template>
  <div>
    <Doughnut id="my-chart-id" v-if="loaded" :options="chartOptions" :data="chartData" />
  </div>
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
      chartData: null,
      chartOptions: null,
      loaded: false
    }
  },

  async mounted() {
    const wait = await fetch('https://data.cityofnewyork.us/resource/nre2-6m2s.json')
    const data = await wait.json()
    const nos = data.filter((e) => e.satisfaction === 'No').length
    const yes = data.filter((e) => e.satisfaction === 'Yes').length
    let x = [nos, yes]
    this.chartData = {
      labels: ['yes', 'no'],
      datasets: [
        {
          backgroundColor: ['#ff94c1', '#99e8b7'],
          data: x
        }
      ]
    }
    this.chartOptions = {
      responsive: true
    }
    this.loaded = true
  }
}
</script>

<style scoped>
div {
  width: 700px;
  height: 700px;
  margin: auto;
}
</style>
