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

      <q-separator />

      <q-card-actions>
        <q-btn class="button-card" flat @click="copyText(email)">
          {{ email }}
        </q-btn>
        <q-btn style="margin-right: 100px" flat @click="copyText(phoneNum)">
          {{ phoneNum }}
        </q-btn>
        <q-btn
          class="button-card"
          href="https://www.linkedin.com/in/dylsheehan/"
          flat
          round
          size="0.75em"
        >
          <img
            style="height: 3em"
            src="../assets/linkedin-button.png"
            alt="LinkedIn Image"
          />
        </q-btn>
        <q-btn
          class="button-card"
          href="https://github.com/dsheehan2"
          flat
          round
          size="0.75em"
        >
          <img
            style="height: 3em"
            src="../assets/github-button.png"
            alt="GitHub Image"
          />
        </q-btn>
        <q-btn
          class="button-card"
          href="https://www.instagram.com/dylan_sheehann/"
          flat
          round
          size="0.75em"
        >
          <img
            style="height: 3em"
            src="../assets/instagram-button.png"
            alt="Instagram Image"
          />
        </q-btn>
        <q-btn
          class="button-card"
          href="https://www.facebook.com/dylan.sheehan.5076/"
          flat
          round
          size="0.75em"
        >
          <img
            style="height: 3em"
            src="../assets/facebook-button.png"
            alt="Facebook Image"
          />
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
const description: string = `Currently pursuing a Master's in Computer Science at Johns Hopkins University,
building on my Bachelor's from Texas Tech University. I have a passion for Full Stack Development
and Cybersecurity, with a keen interest in Pretesting. Working as a Junior Software Engineer
in the Department of Defense, I enjoy tackling complex challenges. In my free time, I love hiking,
playing soccer, and golfing. Follow me elsewhere!`;
const email: string = 'dylansheehan493@gmail.com';
const phoneNum: string = '(708) 205-9618';

function copyText(text: string) {
  navigator.clipboard.writeText(text);
}
</script>

<style lang="css">
.business-card {
  width: 100%;
  max-width: 50em;
}
.button-card {
  margin-right: 10px;
}
</style>
