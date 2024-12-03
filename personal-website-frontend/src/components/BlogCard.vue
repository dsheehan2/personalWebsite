<template>
  <q-card class="blog-card" flat bordered>
    <q-card-section>
      <div class="blog-card-header">
        <h2 class="blog-card-title">{{ title }}</h2>
        <div v-if="city !== null" class="city-tag">{{ city }}</div>
        <div class="blog-card-extra">
          <span class="blog-card-date">{{ date }}</span>
          <q-rating
            v-if="rating != -1"
            v-bind:model-value="rating"
            max="5"
            icon="star"
            icon-half="star_half"
            color="blue"
            size="16px"
            readonly
          />
          <q-btn
            v-if="link"
            class="link-icon"
            flat
            icon="link"
            :href="link"
            target="_blank"
            size="sm"
            color="primary"
          />
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <p class="blog-card-description">{{ description }}</p>
    </q-card-section>

    <q-carousel
      v-if="images.length"
      v-model="activeSlide"
      arrows
      swipeable
      control-color="blue"
      animated
    >
      <q-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :name="index"
        @click="openImageFullscreen(image)"
      >
        <img :src="image" class="carousel-image" />
      </q-carousel-slide>
    </q-carousel>
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

defineProps({
  title: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  images: {
    type: Array as () => string[],
    required: false,
    default: () => [],
  },
  link: {
    type: String,
    required: false,
    default: '',
  },
});

let activeSlide = ref(0);
const fullscreenImage = ref<string | null>(null);

function openImageFullscreen(image: string) {
  fullscreenImage.value = image;
}

function closeFullscreen() {
  fullscreenImage.value = null;
}
</script>

<style scoped>
.blog-card {
  max-width: 100%;
  width: 100%;
  margin: 10px 0;
}

.blog-card-header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
}

.blog-card-title {
  font-size: 1.25rem;
  margin: 0;
}

.city-tag {
  font-size: 1rem;
  color: #888;
  font-style: italic;
}

.blog-card-extra {
  display: flex;
  align-items: center;
  gap: 10px;
}

.blog-card-date {
  font-size: 0.9rem;
  color: #777;
}

.blog-card-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
  margin-top: 5px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
}

.q-carousel__arrow {
  color: blue !important;
  font-size: 2rem;
}

.q-carousel__arrow:hover {
  color: darkblue !important;
}

.link-icon {
  cursor: pointer;
  color: #007bff;
  padding: 0px 0px 0px 0px;
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
}
</style>
