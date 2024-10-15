<template>
    <v-app-bar
    app
    color="secondary"
    dark
    class="navbar"
    elevation="4"
  >
      <!-- Company Logo -->
      <v-img
        src="@/assets/logo.png"
        alt="Company Logo"
        max-width="120"
        class="mr-4"
      ></v-img>

      
      <!-- Navigation Links (if any) -->
      <v-btn text>Home</v-btn>
      <v-btn text>Products</v-btn>
      <v-btn text>News</v-btn>
  
    </v-app-bar>
  </template>
  
  <script setup>
  </script>
  
  <script setup>
</script>

<style scoped>
.navbar {
  margin-top: 0px; /* Adjust this margin according to the height of the Contact Banner */
}
</style>
  