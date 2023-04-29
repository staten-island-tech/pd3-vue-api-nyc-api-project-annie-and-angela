<template>
  <div class="container">
    <Bar id="my-chart-id" v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
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
      chartData: null,
      chartOptions: null,
      loaded: false
    }
  },

  Mounted: function () {
    async function DATA() {
      this.chartData = {
        labels: [
          'AL',
          'AK',
          'AZ',
          'AR',
          'CA',
          'CO',
          'CT',
          'DE',
          'FL',
          'GA',
          'HI',
          'ID',
          'IL',
          'IN',
          'IA',
          'KS',
          'KY',
          'LA',
          'ME',
          'MD',
          'MA',
          'MI',
          'MN',
          'MS',
          'MO',
          'MT',
          'NE',
          'NV',
          'NH',
          'NT',
          'NM',
          'NY',
          'NC',
          'ND',
          'OK',
          'OR',
          'PA',
          'RI',
          'SC',
          'SD',
          'TN',
          'TX',
          'UT',
          'VT',
          'VA',
          'WA',
          'WV',
          'WI',
          'WY',
          'N/A'
        ],
        datasets: [
          {
            label: 'COMPLAINT CASES',
            backgroundColor: ['#E6F7FF'],
            data: this.business_state
          }
        ]
      }
      this.chartOptions = {
        responsive: true
      }
      this.loaded = true
    }
    DATA()
  }
}
/* onMounted(() => {
  getData()
  //console.log(getData())
}), */
</script>

<!-- <template>
  <div class="container">
    <Bar id="my-chart-id" v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
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
      chartData: null,
      chartOptions: null,
      loaded: false
    }
  },

  Mounted: function () {
    async function DATA() {
      const wait = await fetch('https://data.cityofnewyork.us/resource/nre2-6m2s.json')
      const data = await wait.json()
      const dataArray = []
      dataArray.push(data)
      console.log(dataArray)
      const text = dataArray.filter((e) => e.satisfaction === 'No').length
      console.log(text)
    }
    DATA()

    let x = ['3', '5', '6']
    this.chartData = {
      labels: [
        'AL',
        'AK',
        'AZ',
        'AR',
        'CA',
        'CO',
        'CT',
        'DE',
        'FL',
        'GA',
        'HI',
        'ID',
        'IL',
        'IN',
        'IA',
        'KS',
        'KY',
        'LA',
        'ME',
        'MD',
        'MA',
        'MI',
        'MN',
        'MS',
        'MO',
        'MT',
        'NE',
        'NV',
        'NH',
        'NT',
        'NM',
        'NY',
        'NC',
        'ND',
        'OK',
        'OR',
        'PA',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VT',
        'VA',
        'WA',
        'WV',
        'WI',
        'WY',
        'N/A'
      ],
      datasets: [
        {
          label: 'COMPLAINT CASES',
          backgroundColor: ['#E6F7FF'],
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
 -->
