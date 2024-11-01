<template>
  <div class="about-me-page">
    <!-- Use BusinessCard component here -->
    <BusinessCard />
  </div>
</template>

<script setup>
import BusinessCard from 'src/components/BusinessCard.vue'; // Adjust the path as needed
</script>

<style scoped>
.about-me-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
