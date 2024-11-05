<template>
  <q-card>
    <q-card-title class="text-h5 header" style="margin-top: 5px"
      >Work Experience</q-card-title
    >
    <q-card-section class="Work-sections">
      <div class="Work-section" v-for="(Work, index) in schools" :key="index">
        <div class="Work-icon">
          <img :src="Work.logo" alt="Work Logo" />
        </div>
        <div class="Work-info">
          <h3 class="Work-name">{{ Work.name }}</h3>
          <p class="title">{{ Work.title }}</p>
          <p class="dates">{{ Work.dates }}</p>
          <div class="additional-info" v-html="Work.additional"></div>
        </div>
      </div>
    </q-card-section>
    <q-card-actions align="center" style="margin-top: 10px">
      <a href="/src/assets/SheehanResume.pdf" download class="download-link">
        Resume
      </a>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
interface Work {
  logo: string;
  name: string;
  title: string;
  dates: string;
  additional: string;
}

const schools: Work[] = [
  {
    logo: '/src/assets/dod-logo.png',
    name: 'Department of Defense (DoD)',
    title: 'Big Data Software Engineer',
    dates: 'July 2023 - Present',
    additional:
      '<br>Developed and deployed a Web Application in K8s using Angular AG-Grid, Java Spring Boot, and Docker that  streamlines statistics for data analysts to query and filter MediaMetadata.<br>' +
      '<br>Produced a HDFS/Accumulo Parser that periodically scans files using HDFS Java API, grabs and edits certain data points, then tokenizes them into separate files to be referenced in Accumulo tables for other developers.<br>' +
      '<br>Created and managed a new Gitlab CI/CD pipeline for an ongoing team project that runs unit tests in JUnit 5and Mockito, and ensures PRs/MRs don’t affect expected results by using HDFS mini clusters.<br>' +
      '<br>Modernized old Bash and Python implementations to use up-to-date Java processes and APIs to relieveproblems during firefighting on tests and production systems.<br>',
  },
  {
    logo: '/src/assets/goldenspread-logo.png',
    name: 'Golden Spread Electric Coop.',
    title: 'Information Security Analyst',
    dates: 'July 2022 - December 2022',
    additional:
      '<br>Analyzed JavaScript malware for injections by creating Python web scrapers with Scrapy.<br>' +
      '<br>Created threat analysis visuals and managed vulnerabilities with AlienVault, Nucleus, and MS365 Defender to secure corporate network applications.<br>' +
      '<br>Used KQL queries to identify suspicious user events, detecting indicators of compromise across applications.<br>',
  },
  {
    logo: '/src/assets/collin2-logo.png',
    name: 'Collin College Preston Ridge',
    title: 'IT Student Assistant',
    dates: 'Aug 2019 - May 2021',
    additional:
      '<br>Managed a student database with Microsoft SQL Server and Access, registering 50+ students for IDs, events, and campus fitness center access.<br>',
  },
];
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.Work-sections {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.Work-section {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 17.5px;
  padding: 5px;
}

.Work-icon {
  flex-shrink: 0;
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.Work-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.Work-info {
  flex: 1;
}

.Work-name {
  margin: 0;
  margin-right: 12px;
  font-weight: bold;
  font-size: 1.5em;
}

.title {
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

.download-link {
  margin-bottom: 5px;
  display: inline-block;
  padding: 6px 12px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}

.download-link:hover {
  background-color: #0056b3;
}
</style>
