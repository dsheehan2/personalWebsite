<template>
  <q-card
    class="interest-card"
    v-for="(interest, index) in interests"
    :key="index"
    flat
    bordered
  >
    <q-card-section>
      <h3 class="title">{{ interest.name }}</h3>
      <div class="image-container">
        <img
          v-if="interest.image != null"
          :src="`/src/assets/${interest.image}`"
          alt="Image for {{ interest.name }}"
          class="interest-image"
          @click="openImageFullscreen(interest.image)"
        />
        <img
          v-if="interest.image2 != null"
          :src="`/src/assets/${interest.image2}`"
          alt="Image for {{ interest.name }}"
          class="interest-image"
          @click="openImageFullscreen(interest.image2)"
        />
      </div>

      <q-separator />

      <p class="description">{{ interest.description }}</p>
    </q-card-section>
  </q-card>

  <div
    v-if="fullscreenImage"
    class="fullscreen-overlay"
    @click="closeFullscreen"
  >
    <img :src="fullscreenImage" class="fullscreen-image" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Interest {
  name: string;
  image?: string;
  image2?: string;
  description: string;
}

const interests = ref<Interest[]>([
  {
    name: 'Soccer',
    image: 'soccer1.jpeg',
    image2: 'soccer2.jpeg',
    description:
      "Soccer has been a major part of my life from a young age, having played through state club teams. In high school, I was fortunate enough to be part of a team that won a state title. Even now, I continue to play in my free time, whether it's with friends or through intramural leagues. It's a great way for me to unwind and relieve stress, especially during the weekends when I can forget about everything and just enjoy the game.",
  },
  {
    name: 'Rock Climbing',
    image: 'rock-climbing1.JPG',
    image2: 'rock-climbing2.PNG',
    description:
      "Rock climbing is an exciting hobby, especially when I do it with friends. We often challenge each other to try different levels, making it both fun and competitive. It's also a great way to build arm strength. Friday nights are perfect for climbing, as it's a great social activity, and there's always a group of people around to join in on the challenges.",
  },
  {
    name: 'Hiking',
    image: 'hiking1.png',
    image2: 'hiking2.JPG',
    description:
      "Hiking is one of my favorite ways to spend time outdoors, especially in the hill country around Austin and San Antonio. The trails here offer amazing views of the hilly terrain, and it's a great way to cool off while enjoying nature. I joined a hiking group with friends, which has made it even more fun and social. Fall and spring are my favorite times to hike, as the weather is perfect, and the scenery is always stunning.",
  },
]);

let fullscreenImage = ref<string | null>(null);

function openImageFullscreen(image: string) {
  fullscreenImage.value = `/src/assets/${image}`;
}

function closeFullscreen() {
  fullscreenImage.value = null;
}
</script>

<style scoped>
.interest-card {
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin: 8px;
  transition: transform 0.3s ease;
}

.image-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.interest-image {
  width: 48%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
}

.interest-image:hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: scale(1.05);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.description {
  font-size: 14px;
  color: #555;
  margin-top: 15px;
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.fullscreen-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  cursor: pointer;
}
</style>
