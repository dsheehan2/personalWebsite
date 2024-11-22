<template>
  <div class="experiences-page">
    <div class="card-list">
      <BlogCard
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :date="card.date"
        :description="card.description"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BlogCard from 'src/components/BlogCard.vue';

const cards = [
  {
    title: 'Sample Card 1',
    date: 'November 2024',
    description: 'insert Your Description here',
  },
  {
    title: 'Sample Card 2',
    date: 'October 2024',
    description: 'Insert Your Description here.',
  },
];
</script>

<style scoped>
.experiences-page {
  display: flex;
  justify-content: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 20px;
  align-items: center;
}
</style>
