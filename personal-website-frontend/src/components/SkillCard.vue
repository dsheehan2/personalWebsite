<template>
  <q-card>
    <q-card-section class="text-h5 text-center">
      Active Tech Stack
    </q-card-section>

    <q-card-section class="skills-logos">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-container"
      >
        <q-img :src="skill.logo" :alt="skill.name" class="skill-logo" />
        <q-tooltip
          anchor="bottom middle"
          self="top middle"
          transition-show="scale"
          transition-hide="scale"
        >
          {{ skill.name }}
        </q-tooltip>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
const skills = [
  { name: 'Java', logo: '/src/assets/java-logo.png' },
  { name: 'TypeScript', logo: '/src/assets/typescript-logo.png' },
  { name: 'Bash', logo: '/src/assets/bash-logo.png' },
  { name: 'Vue.js', logo: '/src/assets/vue-logo.png' },
  { name: 'Spring Boot', logo: '/src/assets/spring-boot-logo.png' },
  { name: 'Docker', logo: '/src/assets/docker-logo.png' },
  { name: 'Kubernetes', logo: '/src/assets/kubernetes-logo.png' },
  { name: 'Accumulo', logo: '/src/assets/accumulo-logo.png' },
  { name: 'MongoDB', logo: '/src/assets/mongo-db-logo.png' },
  { name: 'PostgreSQL', logo: '/src/assets/postgre-sql-logo.png' },
  { name: 'Hadoop', logo: '/src/assets/hadoop-logo.png' },
  { name: 'Gitlab CI/CD', logo: '/src/assets/cicd-logo.png' },
];
</script>

<style scoped>
.skills-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 10px;
}

.skill-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60px;
  height: 60px;
}

.skill-logo {
  border-radius: 5px;
  transition: transform 0.2s;
  width: 90%;
  height: auto;
  padding: 5px;
  object-fit: contain;
}
.skill-logo:hover {
  transform: scale(1.1);
}
</style>
