<template>
  <q-card class="blog-card" flat bordered>
    <q-card-section>
      <div class="blog-card-header">
        <h2 class="blog-card-title">{{ title }}</h2>
        <p class="blog-card-date">{{ date }}</p>
      </div>
    </q-card-section>
    <q-card-section>
      <p class="blog-card-description">{{ description }}</p>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  date: string;
  description: string;
}>();
</script>

<style scoped>
.blog-card {
  max-width: 100%;
  width: 100%;
  margin: 10px 0;
}

.blog-card-header {
  margin-bottom: 10px;
}

.blog-card-title {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.blog-card-date {
  font-size: 0.9rem;
  color: #777;
}

.blog-card-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
}
</style>
