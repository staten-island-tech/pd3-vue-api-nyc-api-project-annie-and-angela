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
  props: {
    label: {
      type: Arry
    },
    chartData: {
      type: Array
    }
  },
  name: 'BarChart',
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
        datasets: [
          {
            label: 'COMPLAINT CASES',
            backgroundColor: ['#E6F7FF'],
            data: this.business_state
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
