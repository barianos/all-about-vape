<template>
  <v-app>
    <AgeVerificationModal />
    <ContactBanner />
    <NavBar />
    <v-main>
      <v-container class="router-view-container">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import NavBar from './components/NavBar.vue';
import ContactBanner from './components/ContactBanner.vue';
import AgeVerificationModal from './components/AgeVerificationModal.vue';

export default {
  components: {
    AgeVerificationModal,
    ContactBanner,
    NavBar,
  },
};
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>