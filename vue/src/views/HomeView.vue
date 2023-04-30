<template>
  <h1 class="Title">Consumer Services Mediated Complaints</h1>

  <div class="SearchBar">
    <label for="search">Search By Business Name:</label>
    <input v-model="userInput" type="search" id="search" data-search placeholder="Type here" />
    <p>{{ userInput }}</p>
  </div>

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
}
onMounted(() => {
  getData()
  //console.log(getData())
})
</script>

<script>
export default {
  data() {
    return {
      userInput: ''
      //filter the data's Buisness name with the user input
      //if nothing shows up, then show error
      /* const: userInput = userInput.value,
data.filter((e) => e.business_name === userInput) */

      /* searchInput.addEventListener('input', (e) => {
  const value = e.target.value
  console.log(value)
}) */
    }
  }
}
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
.SearchBar {
  text-align: center;
  font-size: 30px;
}

#search {
  font-size: 30px;
}
</style>
