<template>
  <div class="project-page">
    <!-- Projects Section -->
    <div class="section">
      <h2>Projects</h2>
      <q-card-section>
        <div class="card-container">
          <ProjectCard />
        </div>
      </q-card-section>
    </div>

    <!-- Interests Section -->
    <div class="section">
      <h2>Interests</h2>
      <q-card-section>
        <div class="card-container">
          <InterestCard />
        </div>
      </q-card-section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProjectCard from 'src/components/ProjectCard.vue';
import InterestCard from 'src/components/InterestCard.vue';
</script>

<style scoped>
.project-page {
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.section {
  margin-bottom: 24px;
  width: 100%;
}

h2 {
  font-family: 'Orbitron', sans-serif;
  margin-left: 16px;
  font-size: 3rem;
  color: blue;
  text-shadow: 0 0 15px rgba(0, 68, 255, 0.8);
}

.card-container {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
</style>
