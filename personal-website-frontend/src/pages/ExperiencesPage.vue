<template>
  <div class="experiences-page">
    <div class="card-list">
      <BlogCard
        v-for="(card, index) in filterCards(cards)"
        :key="index"
        :title="card.title"
        :date="card.date"
        :dateNum="card.dateNum"
        :description="card.description"
        :rating="card.rating"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BlogCard from 'src/components/BlogCard.vue';

interface Card {
  title: string;
  date: string;
  dateNum: number;
  description: string;
  rating: number;
}

const cards: Card[] = [
  {
    title: 'Sample Card 1',
    date: 'November 4, 2024',
    dateNum: 20241104,
    description: 'Insert Your Description here.',
    rating: 4.5,
  },
  {
    title: 'Sample Card 2',
    date: 'October 6, 2024',
    dateNum: 20241006,
    description: 'Insert Your Description here.',
    rating: 3.0,
  },
  {
    title: 'Sample Card 3',
    date: 'January 21, 2024',
    dateNum: 20240121,
    description: 'Insert Your Description here.',
    rating: 1.0,
  },
];

function filterCards(arr: Card[]): Card[] {
  return arr.sort((a, b) => b.dateNum - a.dateNum);
}
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
