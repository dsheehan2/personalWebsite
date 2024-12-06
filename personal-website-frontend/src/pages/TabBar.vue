<template>
  <div>
    <div class="tabs-wrapper sticky-tabs">
      <q-tabs
        v-model="activeTab"
        align="center"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
      >
        <q-tab name="about" label="About Me" />
        <q-tab name="projects" label="Showcase" />
        <q-tab name="experiences" label="Experiences" />

        <q-btn
          flat
          round
          dense
          icon="bi-moon"
          @click="toggleDarkMode"
          class="dark-mode-toggle"
        />
      </q-tabs>
    </div>

    <div class="q-pa-md">
      <component v-bind:is="currentTabComponent" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { Dark } from 'quasar';
import AboutMePage from './AboutMePage.vue';
import ProjectsPage from './ProjectsPage.vue';
import ExperiencesPage from './ExperiencesPage.vue';

const tabs = {
  about: AboutMePage,
  projects: ProjectsPage,
  experiences: ExperiencesPage,
};

const activeTab = ref<keyof typeof tabs>('about');
const currentTabComponent = computed(() => tabs[activeTab.value]);

onMounted(() => {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'true') {
    Dark.set(true);
  } else {
    Dark.set(false);
  }
});

function toggleDarkMode(): void {
  Dark.toggle();
  localStorage.setItem('darkMode', Dark.isActive ? 'true' : 'false');
}
</script>

<style scoped>
.tabs-wrapper {
  display: flex;
  justify-content: center;
}

.sticky-tabs {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);
  z-index: 1;
}

.dark-mode-toggle {
  margin-left: 10px;
  color: primary;
  font-size: 12px;
}

.q-tab {
  font-weight: bold;
}
</style>
