<template>
  <v-app-bar color="primary" dark class="navbar" elevation="2">
    <!-- Mobile Layout-->
    <v-row v-if="isMobile" align="center" justify="space-between">
      <v-col cols="6" class="d-flex align-center justify-top">
        <v-btn icon :href="`tel:${env.PHONE_PRIMARY}`">
          <v-icon  class="fas fa-phone"></v-icon>
        </v-btn>
        <v-btn icon :href="`tel:${env.PHONE_SECONDARY}`">
          <v-icon class="fas fa-mobile-alt"></v-icon>
        </v-btn>
        <v-btn icon :href="env.MAPS_URL" target="_blank">
          <v-icon class="fas fa-map-marker-alt"></v-icon>
        </v-btn>
      </v-col>
      <v-col cols="6" class="d-flex align-center justify-end">
        <v-btn icon :href="`mailto:${env.EMAIL_ADDRESS}`">
          <v-icon class="fas fa-envelope"></v-icon>
        </v-btn>
        <v-btn icon :href="env.FACEBOOK_URL" target="_blank">
          <v-icon class="fab fa-facebook"></v-icon>
        </v-btn>
        <v-btn icon :href="env.INSTAGRAM_URL" target="_blank">
          <v-icon class="fab fa-instagram"></v-icon>
        </v-btn>
        <v-btn icon :href="env.TIKTOK_URL" target="_blank">
          <v-icon class="fab fa-tiktok"></v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Desktop Layout -->
    <v-row v-else align="center" justify="space-between">
      <v-col cols="8" class="d-flex align-center">
        <a :href="`tel:${env.PHONE_PRIMARY}`" style="text-decoration: none; color: inherit;">
          <v-btn icon>
            <v-icon class="fas fa-phone"></v-icon>
          </v-btn>
        </a>
        <span>{{ env.PHONE_PRIMARY }}</span>

        <a :href="`tel:${env.PHONE_SECONDARY}`" style="text-decoration: none; color: inherit;">
          <v-btn icon>
            <v-icon class="fas fa-mobile-alt"></v-icon>
          </v-btn>
        </a>
        <span>{{ env.PHONE_SECONDARY }}</span>

        <a :href="env.MAPS_URL" style="text-decoration: none; color: inherit;" target="_blank">
          <v-btn icon>
            <v-icon class="fas fa-map-marker-alt"></v-icon>
          </v-btn>
        </a>
        <span>{{ env.SHOP_ADDRESS }}</span>
      </v-col>

      <v-col cols="4" class="d-flex align-center justify-end">
        <v-btn icon :href="`mailto:${env.EMAIL_ADDRESS}`" target="_blank">
          <v-icon class="fas fa-envelope"></v-icon>
        </v-btn>
        <v-btn icon :href="env.FACEBOOK_URL" target="_blank">
          <v-icon class="fab fa-facebook"></v-icon>
        </v-btn>
        <v-btn icon :href="env.INSTAGRAM_URL" target="_blank">
          <v-icon class="fab fa-instagram"></v-icon>
        </v-btn>
        <v-btn icon :href="env.TIKTOK_URL" target="_blank">
          <v-icon class="fab fa-tiktok"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { useDisplay } from 'vuetify';

export default {
  setup() {
    const env = {
      EMAIL_ADDRESS: import.meta.env.VITE_EMAIL_ADDRESS,
      SHOP_ADDRESS: import.meta.env.VITE_SHOP_ADDRESS,
      PHONE_PRIMARY: import.meta.env.VITE_PHONE_PRIMARY,
      PHONE_SECONDARY: import.meta.env.VITE_PHONE_SECONDARY,
      MAPS_URL: import.meta.env.VITE_MAPS_URL,
      FACEBOOK_URL: import.meta.env.VITE_FACEBOOK_URL,
      INSTAGRAM_URL: import.meta.env.VITE_INSTAGRAM_URL,
      TIKTOK_URL: import.meta.env.VITE_TIKTOK_URL,
    };

    const { smAndDown } = useDisplay();
    return {
      isMobile: smAndDown,
      env,
    };
  },
};
</script>

<style scoped>
.contact-banner {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
</style>
