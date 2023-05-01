<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/chart1">BarChart</RouterLink>
      <RouterLink to="/chart2">PieChart</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
