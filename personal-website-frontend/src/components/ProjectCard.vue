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

      <!-- GitHub Link -->
      <div v-if="project.github">
        <q-btn
          label="View on GitHub"
          color="primary"
          :href="project.github"
          target="_blank"
          size="sm"
          style="margin-bottom: 10px"
        />
      </div>

      <!-- Demo Link (Optional) -->
      <div v-if="project.demo">
        <q-btn
          label="View Demo"
          color="secondary"
          :href="project.demo"
          target="_blank"
          size="sm"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const projects = ref([
  {
    name: 'Movie Booking System',
    description:
      'A Movie Booking System developed in just one day using Java, designed for both users and admins. It allows users to browse and purchase tickets, rate movies, while providing admins the ability to manage movie listings and oversee the entire booking process.',
    github: 'https://github.com/dsheehan2/MBS',
    demo: 'https://youtu.be/KZHy4JJ7GWM',
  },
  {
    name: 'TTU Raider Rides & Eats',
    description:
      'Senior Capstone Project that develops an Uber-like app tailored for the school, enabling students to request rides from peers commuting to campus. The app uses directional movement to locate users, allowing drivers to complete drop-offs efficiently. Additionally, the project includes an Uber Eats feature specifically for Texas Tech University, integrating the use of dining bucks to order from a variety of campus dining options and have them delivered.',
    github: 'https://github.com/dsheehan2/RaiderRides---Driver',
    demo: 'https://drive.google.com/file/d/1p07xNhBCl5-2TIS7BVMZFNS2tAbNEc8m/view',
  },
  {
    name: 'DFA Calculator Compiler',
    description:
      'Calculator Compiler that follows a DFA (Deterministic Finite Automaton) in which a scanner will read user input and determine tokens to be parsed and categorize them for the compiler to use and understand each input.',
    github: 'https://github.com/dsheehan2/CalculatorCompiler',
    demo: '',
  },
]);
</script>

<style scoped>
.project-card {
  width: 350px;
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
  /* Removed max-height to allow the description to extend fully */
  overflow: visible; /* Ensure the text isn't clipped */
}

q-btn {
  margin-top: 8px;
}
</style>
