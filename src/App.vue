<template>
  <v-app>
    <ContactBanner />
    <NavBar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import NavBar from './components/NavBar.vue';
import ContactBanner from './components/ContactBanner.vue';

export default {
  components: {
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

v-main {
  padding-top: 120px; /* Adjust this based on combined height of both banner and nav */
}
</style>