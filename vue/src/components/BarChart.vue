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
  data() {
    return {
      loaded: false,
      chartData: null,
      chartOptions: null
    }
  },

  mounted: function () {
    /* async function DATA() {
      const dataArray = ['HELLO']
      console.log(dataArray)
    }
    DATA() */

    let x = ['3', '4', '5']
    ;(this.chartData = {
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
    }),
      (this.chartOptions = {
        responsive: true
      })
    this.loaded = true
  }
}
</script>
