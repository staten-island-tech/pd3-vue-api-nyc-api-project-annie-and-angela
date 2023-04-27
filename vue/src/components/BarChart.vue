<template>
  <Doughnut id="my-chart-id" v-if="loaded" :options="chartOptions" :data="chartData" />
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

  mounted: function () {
    async function satisfData() {
      const wait = await fetch('https://data.cityofnewyork.us/resource/nre2-6m2s.json')
      const data = await wait.json()
      const dataArray = []
      dataArray.push(data)
      console.log(dataArray)
      const nos = dataArray.filter((e) => e.satisfaction === 'No').length
      console.log(nos)
    }
    satisfData()

    let x = ['3', '4']
    this.chartData = {
      labels: ['yes', 'no'],
      datasets: [{ backgroundColor: ['red', 'green'], data: x }]
    }
    this.chartOptions = {
      responsive: true
    }
    this.loaded = true
  }
}
</script>
