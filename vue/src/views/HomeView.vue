<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const complaints = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/nre2-6m2s.json')
  let data = await res.json()
  complaints.value = data
  const dataArray = []
  dataArray.push(data)
  console.log(dataArray)
}

onMounted(() => {
  getData()
})
</script>

<style scoped></style>
