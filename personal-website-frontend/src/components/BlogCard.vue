<template>
  <q-card class="blog-card" flat bordered>
    <q-card-section>
      <div class="blog-card-header">
        <h2 class="blog-card-title">{{ title }}</h2>
        <div class="blog-card-extra">
          <q-rating
            v-bind:model-value="rating"
            max="5"
            icon="star"
            icon-half="star_half"
            color="blue"
            size="16px"
            readonly
          />
          <span class="blog-card-date">{{ date }}</span>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <p class="blog-card-description">{{ description }}</p>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  dateNum: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.blog-card {
  max-width: 100%;
  width: 100%;
  margin: 10px 0;
}

.blog-card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
}

.blog-card-extra {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  gap: 8px;
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
