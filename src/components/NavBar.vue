<template>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
      <v-img src="../assets/favicon.ico" max-height="50"></v-img>

      <v-toolbar-title> All About Vape</v-toolbar-title>
  
      <v-spacer></v-spacer>
  
      <!-- Desktop links -->
      <v-btn v-for="link in links" :key="link.name" text>
        <v-icon left>{{ link.icon }}</v-icon>
        {{ link.name }}
      </v-btn>
  
      <!-- Mobile drawer -->
      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item v-for="link in links" :key="link.name" @click="drawer = false">
            <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
        links: [
          { name: 'Home', icon: 'mdi-home', route: '/' },
          { name: 'Products', icon: 'mdi-package-variant-closed', route: '/products' },
          { name: 'Blog', icon: 'mdi-pencil', route: '/blog' },
          { name: 'Contact', icon: 'mdi-email', route: '/contact' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .v-btn {
    margin-right: 10px;
  }
  </style>
  