<template>
  <div class="card">
    <h2>{{ complaints.business_name }}</h2>
    <!-- <h2>{{ complaint.complaint_type }}</h2>
    <h2>{{ complaint.business_city }}</h2> -->
    <h3>{{ id }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  complaints: Object,
  id: Number
})
</script>

<style scoped></style>
