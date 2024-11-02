<template>
  <div class="about-me-page">
    <div class="card-container">
      <BusinessCard />
      <EducationCard style="margin-top: 20px" />
    </div>
    <div class="card-container">
      <AboutMeCard />
    </div>
    <div class="card-container">
      <ExperienceCard />
    </div>
  </div>
</template>

<script setup>
import BusinessCard from 'src/components/BusinessCard.vue';
import AboutMeCard from 'src/components/AboutMeCard.vue';
import EducationCard from 'src/components/EducationCard.vue';
import ExperienceCard from 'src/components/ExperienceCard.vue';
</script>

<style scoped>
.about-me-page {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.card-container {
  display: flex;
  flex-direction: column;
  width: calc(50% - 20px);
  max-width: 500px;
  margin: 20px;
  box-sizing: border-box;
  flex: 1 0 auto;
}

@media (max-width: 1000px) {
  .about-me-page {
    flex-direction: column;
    height: auto;
  }

  .card-container {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
