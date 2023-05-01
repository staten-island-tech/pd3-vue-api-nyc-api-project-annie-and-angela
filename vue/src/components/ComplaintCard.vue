<template>
  <div class="Parent">
    <div class="card">
      <h3>{{ id }}</h3>
      <h2>Name: {{ complaints.business_name }}</h2>
      <h2>Type: {{ complaints.complaint_type }}</h2>
      <h2>City: {{ complaints.business_city }}</h2>
      <h2>Satisfaction: {{ complaints.satisfaction }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  complaints: Object,
  id: Number
})
</script>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  font-size: 16px;
  width: 32rem;
  height: 16rem;
  background-color: aliceblue;
  margin: 2rem 1rem 0rem 1rem;
  padding: 1rem;
  text-align: center;
}
</style>
