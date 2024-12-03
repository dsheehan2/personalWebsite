<template>
  <div class="experiences-page">
    <div class="card-list">
      <BlogCard
        v-for="(card, index) in filterCards(cards)"
        :key="index"
        :title="card.title"
        :date="card.date"
        :link="card.link"
        :description="card.description"
        :rating="card.rating"
        :images="card.images"
        :city="card.city"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BlogCard from 'src/components/BlogCard.vue';

interface Card {
  title: string;
  city: string;
  date: string;
  dateNum: number;
  link?: string;
  description: string;
  rating: number;
  images: string[];
}

const cards: Card[] = [
  {
    title: 'Natural Bridge Caverns',
    city: 'San Antonio, Texas',
    link: 'https://naturalbridgecaverns.com/',
    date: 'August 23, 2024',
    dateNum: 20240823,
    description:
      "Had an amazing time with my cousins at the Natural Bridge Caverns! We explored incredible stalagmites and stalactites, learned about the cave's unique structures, and saw a colony of bats. We also experienced natural springs flowing through the cavern, all beneath the stunning natural bridge. It was an unforgettable adventure!",
    rating: -1,
    images: [
      'src/assets/IMG_1246.png',
      'src/assets/IMG_1255.png',
      'src/assets/IMG_1270.png',
      'src/assets/IMG_1281.png',
    ],
  },
  {
    title: 'Johnson Space Center',
    date: 'October 12, 2024',
    city: 'Houston, Texas',
    link: 'https://www.nasa.gov/johnson/',
    dateNum: 20241012,
    description:
      "Visiting the Johnson Space Center in Houston was an incredible experience. I saw the Mars and Orion Missions with NASA's Mars Rovers and got an up-close look at SpaceX's Falcon 9. The museum showcased historical spacecraft, offering a glimpse into the evolution of space travel. I also learned about how astronauts live and work in space, from the challenges of microgravity to the systems that support life aboard the International Space Station. The design of spacesuits stood out, showcasing their functionality and protection for extreme space environments. It was an inspiring reminder of the advancements in space exploration.",
    rating: -1,
    images: [
      'src/assets/IMG_1546.png',
      'src/assets/IMG_1552.png',
      'src/assets/IMG_1543.png',
      'src/assets/IMG_1570.png',
    ],
  },
  {
    title: 'American Sniper',
    date: 'June 12, 2023',
    city: 'Book',
    link: 'https://en.wikipedia.org/wiki/American_Sniper_(book)',
    dateNum: 20230612,
    description:
      "American Sniper by Chris Kyle had a profound impact on me, teaching me the true value of courage both on and off the battlefield. It's the best war book I've read, surpassing the movie adaptation in its depth and rawness. The way it delves into Kyle's experiences as a Navy SEAL and his personal struggles with the toll of war was both eye-opening and gripping. It gave me a deeper understanding of the sacrifices made by those who serve and the inner strength required to face unimaginable challenges. Overall, the book was not only interesting but also inspiring, reinforcing the importance of resilience and bravery in the face of adversity.",
    rating: 4,
    images: ['src/assets/asniper.jpg'],
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
