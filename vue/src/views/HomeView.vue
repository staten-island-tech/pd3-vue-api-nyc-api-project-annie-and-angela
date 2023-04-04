<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const complaints = ref('')
async function getdata() {
  let res = await fetch('https://data.cityofnewyork.us/resource/nre2-6m2s.json')
  let Data = res.json
  complaints.value = Data.results
}
onMounted(() => {
  getdata()
})
</script>

<style scoped></style>
