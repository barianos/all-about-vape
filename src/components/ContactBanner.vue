<template>
    <v-app-bar color="primary" dark class="navbar" elevation="2">
      <!-- Mobile Layout-->
      <v-row v-if="isMobile" align="center" justify="space-between">
        <v-col cols="6" class="d-flex align-center justify-top">
            <v-btn icon href="tel:2831304224">
                <v-icon>mdi-phone-classic</v-icon>
            </v-btn>

          <v-btn icon href="tel:6956201101">
            <v-icon class="fas fa-phone"></v-icon>
          </v-btn>
          
          <v-btn icon href="https://maps.app.goo.gl/Ltr3PWksUrEf6pD37" target="_blank">
            <v-icon class="fas fa-map-marker-alt"></v-icon>
          </v-btn>
        </v-col>
        <v-col cols="6" class="d-flex align-center justify-end">
            <v-btn icon href="mailto:all.about.vape23@gmail.com">
            <v-icon class="fas fa-envelope"></v-icon>
          </v-btn>
          <v-btn icon href="https://www.facebook.com/profile.php?id=100094327924435" target="_blank">
            <v-icon class="fab fa-facebook"></v-icon>
          </v-btn>
          <v-btn icon href="https://instagram.com" target="_blank">
            <v-icon class="fab fa-instagram"></v-icon>
          </v-btn>
          <v-btn icon href="https://www.tiktok.com/@all.about.vape7" target="_blank">
            <v-icon class="fab fa-tiktok"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
  
      <!-- Desktop Layout -->
      <v-row v-else align="center" justify="space-between">
        <v-col cols="8" class="d-flex align-center">
          <a href="tel:2831304224" style="text-decoration: none; color: inherit;">
            <v-btn icon>
                <v-icon>mdi-phone-classic</v-icon>
            </v-btn>
          </a>
          <span>2831 304224</span>
  
          <a href="tel:6956201101" style="text-decoration: none; color: inherit;">
            <v-btn icon>
              <v-icon class="fas fa-phone"></v-icon>
            </v-btn>
          </a>
          <span>6956201101</span>
  
          <a href="https://maps.app.goo.gl/Ltr3PWksUrEf6pD37" style="text-decoration: none; color: inherit;">
            <v-btn icon target="_blank">
              <v-icon class="fas fa-map-marker-alt"></v-icon>
            </v-btn>
          </a>
          <span>ΧΑΡΑΛΑΜΠΟΥ ΛΙΑΝΔΡΗ, ΑΤΣΙΠΟΠΟΥΛΟ</span>
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
      const { smAndDown } = useDisplay();
  
      return {
        isMobile: smAndDown, // Expose the mobile breakpoint
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
    /* Make sure it stays above other elements */
}
</style>