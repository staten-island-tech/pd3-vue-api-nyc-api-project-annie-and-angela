<template>
  <Bar id="my-chart-id" :options="chartOptions" v-if="loaded" :data="chartData" />
</template>

<script>
{
  /* <script setup>
// import { ref, onMounted } from 'vue'
// const complaints = ref('')
// async function getData() {
//   let res = await fetch('https://data.cityofnewyork.us/resource/nre2-6m2s.json')
//   let data = await res.json()
//   complaints.value = await data
//   //console.log(JSON.stringify(data))
// }

// onMounted(() => {
//   getData()
// }) */
}

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

  mounted: function () {
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
  },
  this.chartOptions: {
    responsive: true
  },
  loaded: true
}
</script>

<!-- name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
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

      chartOptions: {
        responsive: true
      }
    }
  }
}
</script> -->
