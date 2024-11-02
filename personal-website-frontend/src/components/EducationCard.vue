<template>
  <q-card>
    <q-card-title class="text-h5 header" style="margin-top: 5px"
      >Education Background</q-card-title
    >
    <q-card-section class="school-sections">
      <div
        class="school-section"
        v-for="(school, index) in schools"
        :key="index"
      >
        <div class="school-icon">
          <img :src="school.logo" alt="School Logo" />
        </div>
        <div class="school-info">
          <h3 class="school-name">{{ school.name }}</h3>
          <p class="degree">{{ school.degree }}</p>
          <p class="dates">{{ school.dates }}</p>
          <div class="additional-info" v-html="school.additional"></div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
interface School {
  logo: string;
  name: string;
  degree: string;
  dates: string;
  additional: string;
}

const schools: School[] = [
  {
    logo: '/src/assets/hopkins-logo.png',
    name: 'Johns Hopkins University',
    degree: 'M.S. Computer Science and Cybersecurity',
    dates: 'January 2024 - Present',
    additional: '',
  },
  {
    logo: '/src/assets/texastech-logo.png',
    name: 'Texas Tech University',
    degree: 'B.S. Computer Science and Mathematics',
    dates: 'Aug 2021 - May 2023',
    additional:
      "<br>RaiderHacks <br> Google Student Developer Club <br> Phi Kappa Phi Honor's Society",
  },
  {
    logo: '/src/assets/collin-logo.png',
    name: 'Collin College',
    degree: 'A.S. Computer Information Technology',
    dates: 'Aug 2019 - May 2021',
    additional: "<br>Phi Theta Kappa Honor's Society",
  },
];
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.school-sections {
  display: flex;
  flex-direction: column;
  max-height: 478px;
  overflow-y: auto;
}

.school-section {
  display: flex;
  align-items: center;
  margin-bottom: 17.5px;
  padding: 5px;
}

.school-icon {
  margin-right: 20px;
  width: 70px;
  height: 70px;
}

.school-icon img {
  max-width: 100%;
  max-height: 100%;
}

.school-info {
  margin-left: 10px;
}

.school-name {
  margin: 0;
  margin-right: 12px;
  font-weight: bold;
  font-size: 1.5em;
}

.degree {
  margin: 0;
  font-size: 1em;
}

.dates {
  margin: 0;
  font-size: 0.75em;
}

.additional-info {
  margin: 0;
  font-size: 0.75em;
  color: #666;
}
</style>
