<template>
  <v-app-bar app color="secondary" dark class="navbar" elevation="4">
    <!-- <v-img src="../assets/logocut.png" alt="Company Logo" class="mr-4"></v-img> -->
    <!-- <v-img :src="require('@/assets/logocut.png')" alt="Company Logo" class="mr-4"></v-img> -->
    <img src="@/assets/logocut.png" alt="Company Logo" class="logo-img">




    <v-btn to="/about" text>
      Συσκευές
    </v-btn>
    <v-btn to="/products" text>
      ΑΤΜΟΠΟΙΗΤΕΣ
    </v-btn>
    <v-btn to="/flavor-shots" text>
      ΥΓΡΑ
    </v-btn>
    <v-btn to="/products" text>
      ΑΞΕΣΟΥΑΡ
    </v-btn>
    <v-btn to="news" text>Νέα</v-btn>

    <v-btn to="/" text>
      Αρχική
    </v-btn>

  </v-app-bar>
</template>

<script setup>
</script>

<script setup>
</script>

<style scoped>
.navbar {
  margin-top: 0px;
  /* Adjust this margin according to the height of the Contact Banner */
}
.logo-img {
  max-width: 10%;
  height: auto;
}
</style>