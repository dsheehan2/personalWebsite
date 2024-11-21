<template>
  <q-card class="scrollable-card" flat bordered>
    <q-card-title class="text-h5 header" style="margin-top: 5px"
      >Achievements</q-card-title
    >

    <q-card-section
      v-for="(achievement, index) in achievements"
      :key="index"
      style="margin: 0px"
    >
      <div class="ach-title">{{ achievement.title }}</div>
      <a
        v-if="achievement.link"
        :href="achievement.link"
        class="externalLink"
        target="_blank"
        rel="noopener noreferrer"
        >View on GitHub</a
      >
      <div class="ach-body">{{ achievement.description }}</div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
interface Achievement {
  title: string;
  description: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: 'Graduated with Summa Cum Laude',
    description:
      'Graduated with honors, recognizing academic excellence and exceptional performance in coursework.',
  },
  {
    title: '150 Credit Hours of Volunteer Work',
    description:
      'Completed 150 credit hours of volunteer work, demonstrating a commitment to community service and personal development.',
  },
  {
    title: 'Project Leader for Capstone Project: Raider Rides',
    description:
      'Led a team to develop Raider Rides, managing deliverables and ensuring successful completion of a comprehensive project.',
    link: 'https://github.com/dsheehan2/RaiderRides---Driver',
  },
  {
    title: 'Award for Developing Analyst Application',
    description:
      "Received a monetary award for developing a new application designed to enhance analysts' efficiency and productivity.",
    link: 'https://github.com/NationalSecurityAgency/datawave-dictionary-service/tree/main/service/src/main/frontend',
  },
  {
    title: 'Undergraduate Research on Decentralized Applications (DApps)',
    description:
      'Authored an in-depth research paper on DApps, exploring blockchain and smart contracts, contributing valuable insights to emerging technologies.',
    link: 'https://github.com/dsheehan2/DecentralizedIndentifier/blob/main/CS4000-013%20DID%20Report%20-%20Dylan%20Sheehan.pdf',
  },
  {
    title: 'Bloom Filter Research Algorithm Project',
    description:
      'Optimized Bloom Filter algorithms for large-scale data analysis, enhancing performance and accuracy in data processing.',
    link: 'https://github.com/dsheehan2/bloomFilterResearch/blob/main/BloomFilterProject_Sheehan-Final.ipynb',
  },
];
</script>

<style scoped>
.ach-title {
  margin: 0;
  font-size: 1em;
}

.ach-body {
  margin: 0;
  font-size: 0.75em;
  color: #666;
}

.header {
  display: flex;
  justify-content: center;
}

.externalLink {
  display: inline-block;
  margin-bottom: 3px;
  padding: 0;
  color: #007bff;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.85em;
  cursor: pointer;
  transition: color 0.3s;
}

.externalLink:hover {
  color: #0056b3;
  text-decoration: none;
}

.scrollable-card {
  max-height: 400px;
  overflow-y: auto;
}
</style>
