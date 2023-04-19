<template>
  <h1 class="Title">Consumer Services Mediated Complaints</h1>
  <div class="container">
    <ComplaintCard
      v-for="(client, index) in complaints"
      :key="client.business_name"
      :id="index + 1"
      :complaints="client"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ComplaintCard from '../components/ComplaintCard.vue'

const complaints = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/nre2-6m2s.json')
  let data = await res.json()
  complaints.value = await data
  //console.log(JSON.stringify(data))
}
onMounted(() => {
  getData()
  //console.log(getData())
})
</script>

<style scoped>
.Title {
  font-size: 50px;
  text-align: center;
  margin: 2rem 0rem 2rem 0rem;
}
.container {
  width: 90vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
</style>
