<template>
  <q-card>
    <q-card-title class="text-h5 header" style="margin-top: 5px"
      >Volunteer Activities</q-card-title
    >
    <q-card-section class="Volunteer-sections">
      <div
        class="Volunteer-section"
        v-for="(Volunteer, index) in schools"
        :key="index"
      >
        <div class="Volunteer-icon">
          <img :src="Volunteer.logo" alt="Volunteer Logo" />
        </div>
        <div class="Volunteer-info">
          <h3 class="Volunteer-name">{{ Volunteer.name }}</h3>
          <p class="location">
            {{ Volunteer.location }}
          </p>
          <a
            class="Volunteer-link"
            v-if="Volunteer.link"
            :href="'https://www.youtube.com/watch?v=jgyEZ2DbkNg'"
            rel="noopener noreferrer"
          >
            See My Impact
          </a>
          <div class="additional-info" v-html="Volunteer.additional"></div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
interface Volunteer {
  logo: string;
  name: string;
  link?: boolean;
  location: string;
  additional: string;
}

const schools: Volunteer[] = [
  {
    logo: '/src/assets/stfrancis-logo.png',
    name: 'St. Francis Catholic Church',
    location: 'Frisco, Texas',
    additional:
      '<br>Served as a sponsor, supporting candidates through their faith journey and preparation for the Sacraments.<br>' +
      '<br>Volunteered in various church activities, assisting with community events, outreach programs, and parish initiatives.<br>',
  },
  {
    logo: '/src/assets/lostpaws-logo.png',
    name: 'Lost Paws Rescue of Texas',
    link: true,
    location: 'Dallas & Ft. Worth, Texas',
    additional:
      '<br>Successfully washed and cared for over 100 dogs, ensuring their cleanliness and comfort by thoroughly cleaning their cages and living areas.<br>' +
      '<br>Actively transported dogs to local malls, such as Stonbriar and Galleria in Frisco, Texas, to promote their adoption, resulting in 20 dogs finding new homes.<br>',
  },
];
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.Volunteer-sections {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.Volunteer-section {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 17.5px;
  padding: 5px;
}

.Volunteer-icon {
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.Volunteer-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.Volunteer-info {
  flex: 1;
}

.Volunteer-name {
  margin: 0;
  margin-right: 12px;
  font-weight: bold;
  font-size: 1.5em;
}

.Volunteer-link {
  display: inline-block;
  padding: 0;
  color: #007bff;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.85em;
  cursor: pointer;
  transition: color 0.3s;
}

.Volunteer-link:hover {
  color: #0056b3;
  text-decoration: none;
}

.location {
  margin: 0;
  font-size: 1em;
}

.link {
  margin: 0;
  font-size: 0.75em;
}

.additional-info {
  margin: 0;
  font-size: 0.75em;
  color: #666;
}
</style>
