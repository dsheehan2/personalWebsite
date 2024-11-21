<template>
  <div>
    <q-card class="business-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs" style="width: 40%">
          <div class="text-overline">Stay in Touch!</div>
          <div class="text-h6 q-mt-sm q-mb-xs">Dylan Sheehan</div>
          <q-img class="rounded-borders" src="../assets/card-photo.png" />
        </q-card-section>

        <q-card-section
          class="col-6 flex flex-center"
          style="margin-top: 50px; margin-left: 20px"
        >
          <q-card-actions>
            <div
              style="
                padding-top: 5px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              "
            >
              <q-btn class="button-card" flat @click="copyText(email)">
                {{ email }}
              </q-btn>
              <q-btn
                style="margin-right: 100px"
                flat
                @click="copyText(phoneNum)"
              >
                {{ phoneNum }}
              </q-btn>
            </div>
            <div
              style="
                padding-top: 25px;
                display: flex;
                gap: 10px;
                margin-left: 15px;
              "
            >
              <q-btn
                class="button-card"
                href="https://www.linkedin.com/in/dylsheehan/"
                flat
                round
                size="0.75em"
                rel="noopener noreferrer"
                target="_blank"
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
                rel="noopener noreferrer"
                target="_blank"
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
                rel="noopener noreferrer"
                target="_blank"
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
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  style="height: 3em"
                  src="../assets/facebook-button.png"
                  alt="Facebook Image"
                />
              </q-btn>
            </div>
          </q-card-actions>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
// const description: string = 'test';
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
  margin-right: 15px;
}
</style>
