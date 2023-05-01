<template>
  <Bar v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartData" />
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

/* const url = 'https://data.cityofnewyork.us/resource/nre2-6m2s.json' */

export default {
  name: 'BarChart',
  components: { Bar },
  computed: {
    myStyles() {
      return {
        height: `${1000}px`,
        position: 'relative',
        width: `${1000}px`,
        position: 'relative'
      }
    }
  },
  data() {
    return {
      loaded: false,
      chartData: null,
      chartOptions: null
    }
  },

  async mounted() {
    const wait = await fetch('https://data.cityofnewyork.us/resource/nre2-6m2s.json')
    const data = await wait.json()

    const states = data.map((e) => e.business_state)
    console.log(states)
    const stateSort = states.sort()
    let individual = [...new Set(states)]
    let label = individual.sort()
    console.log(label)
    const stateData = []

    let eachCount = []
    let state, noOfCount

    for (let i = 0; i < stateSort.length; i++) {
      state = stateSort[i]
      //state = NY
      noOfCount = eachCount[state]
      //noOfCount=noOfCountsOfEachCharacter[NY]
      eachCount[state] = noOfCount ? noOfCount + 1 : 1
      //if noOfCountsOfEachCharacter[NY] = noOfCount then noOfCount + 1, else 1
    }

    for (state in eachCount) {
      stateData.push(eachCount[state])
    }

    console.log(stateData)
    ;(this.chartData = {
      labels: label,
      datasets: [
        {
          label: 'Complaints in each state',
          backgroundColor: ['#E6F7FF'],
          data: stateData
        }
      ]
    }),
      (this.chartOptions = {
        responsive: true
      })
    this.loaded = true
  }
}
</script>
