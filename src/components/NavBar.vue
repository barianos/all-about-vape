<template>
    <v-app-bar
    app
    color="primary"
    dark
    class="navbar"
    elevation="4"
  ><v-row></v-row>
      <!-- Company Logo -->
      <v-img
        src="@/assets/logo.png"
        alt="Company Logo"
        max-width="120"
        class="mr-4"
      ></v-img>
  
      
      
  
      <!-- Phone Number -->
      <v-btn icon href="tel:2831304224">
        <v-icon>mdi-phone</v-icon>
        <v-tooltip bottom>Call Us</v-tooltip>
      </v-btn>

      <span>2831 304224</span>
      <v-btn icon href="tel:6956201101">
        <v-icon>mdi-phone</v-icon>
        <v-tooltip bottom>Call Us</v-tooltip>
      </v-btn>
      <span>6956201101</span>
  
      <!-- Email Address -->
      <v-btn icon href="mailto:all.about.vape23@gmail.com">
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <span>all.about.vape23@gmail.com</span>
  
      <!-- Location -->
      <v-btn icon href="https://goo.gl/maps/example" target="_blank">
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <span>ΧΑΡΑΛΑΜΠΟΥ ΛΙΑΝΔΡΗ, ΑΤΣΙΠΟΠΟΥΛΟ</span>

      <!-- Spacer to push contact info to the right -->
      <v-spacer></v-spacer>
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
  margin-top: 40px; /* Adjust this margin according to the height of the Contact Banner */
}
</style>
  