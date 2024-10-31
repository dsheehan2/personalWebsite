<template>
  <div>
    <q-card class="business-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Stay in Touch!</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Dylan Sheehan</div>
          <div class="text-caption text-grey card-desc">{{ description }}</div>
        </q-card-section>

        <q-card-section class="col-4 flex flex-center">
          <q-img class="rounded-borders" src="../assets/card-photo.png" />
        </q-card-section>
      </q-card-section>

      <!-- <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat> 7:30PM </q-btn>
        <q-btn flat color="primary"> Reserve </q-btn>
      </q-card-actions> -->

      <q-separator />
    </q-card>
  </div>
</template>

<script lang="ts" setup>
const description: string = `Currently pursuing a Master's in Computer Science at Johns Hopkins University,
building on my Bachelor's from Texas Tech University. I have a passion for Full Stack Development
and Cybersecurity, with a keen interest in Pretesting. Working as a Junior Software Engineer
in the Department of Defense, I enjoy tackling complex challenges. In my free time, I love hiking,
playing soccer, and golfing. Follow me elsewhere!`;
</script>

<style lang="css">
.business-card {
  width: 100%;
  max-width: 50em;
}
</style>
