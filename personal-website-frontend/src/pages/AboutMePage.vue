<template>
  <div class="about-me-page">
    <div class="card-container">
      <BusinessCard style="margin-top: 20px" />
      <EducationCard class="card-space" />
      <ExperienceCard class="card-space" />
    </div>
    <div class="card-container">
      <AboutMeCard style="margin-top: 20px" />
      <VolunteerCard class="card-space" />
      <SkillCard class="card-space" />
      <HighlightsCard class="card-space" />
    </div>
  </div>
</template>

<script setup>
import BusinessCard from 'src/components/BusinessCard.vue';
import AboutMeCard from 'src/components/AboutMeCard.vue';
import EducationCard from 'src/components/EducationCard.vue';
import ExperienceCard from 'src/components/ExperienceCard.vue';
import VolunteerCard from 'src/components/VolunteerCard.vue';
import SkillCard from 'src/components/SkillCard.vue';
import HighlightsCard from 'src/components/HighlightsCard.vue';
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
  margin: 0 20px 20px 20px;
  box-sizing: border-box;
  flex: 1 0 auto;
}

.card-space {
  margin-top: 40px;
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
