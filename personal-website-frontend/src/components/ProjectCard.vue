<template>
  <q-card
    class="project-card"
    v-for="(project, index) in projects"
    :key="index"
    flat
    bordered
  >
    <q-card-section>
      <h3 class="title">{{ project.name }}</h3>
      <p class="description">{{ project.description }}</p>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const projects = ref([
  {
    name: 'Project 1',
    description:
      'This is a description of Project 1, showcasing its main features and functionality.',
  },
  {
    name: 'Project 2',
    description:
      'This is a description of Project 2, showcasing its main features and functionality.',
  },
  {
    name: 'Project 3',
    description:
      'This is a description of Project 3, showcasing its main features and functionality.',
  },
]);
</script>

<style scoped>
.project-card {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  margin: 8px;
}

.title {
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
}

.description {
  font-size: 12px;
  color: #555;
  margin-top: 5px;
  max-height: 100px;
  overflow: auto;
}
</style>
