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
      <p class="description">
        This is a brief description about {{ interest.name }}. It describes the
        activity or interest in more detail.
      </p>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const interests = ref([
  { name: 'Soccer' },
  { name: 'Rock Climbing' },
  { name: 'Hiking' },
]);
</script>

<style scoped>
.interest-card {
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin: 8px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.description {
  font-size: 14px;
  color: #555;
  margin-top: 5px;
}
</style>
