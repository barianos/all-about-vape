<template>
    <v-container>
      <v-row>
        <v-col
          v-for="flavor in readyLiquids"
          :key="flavor.id"
          cols="12" sm="6" md="4"
        >
          <v-card>
            <v-img
              :src="hoveredId === flavor.id && flavor.secondary_photo ? flavor.secondary_photo : flavor.primary_photo"
              :alt="flavor.name"
              @mouseover="handleMouseOver(flavor.id)"
              @mouseleave="handleMouseLeave"
              height="200px"
              class="primary-photo"
            ></v-img>
  
            <v-card-title>{{ flavor.producer }}</v-card-title>
            <v-card-subtitle>{{ flavor.name }}</v-card-subtitle>
            <v-card-text>{{ flavor.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { supabase } from '../../supabase';
  
  export default {
    data() {
      return {
        readyLiquids: [],       
        hoveredId: null 
      };
    },
    methods: {
      async fetchReadyLiquids() {
        const { data, error } = await supabase.from('ready_liquids').select('*');
        if (error) {
          console.error('Error fetching flavor shots:', error);
        } else {
          this.readyLiquids = data;
        }
      },
      handleMouseOver(id) {
        this.hoveredId = id; // Set the id of the card being hovered
      },
      handleMouseLeave() {
        this.hoveredId = null; // Reset on mouse leave
      }
    },
    mounted() {
      this.fetchReadyLiquids();
    }
  };
  </script>
  
  <style scoped>
  .primary-photo {
    transition: 0.3s ease-in-out;
  }
  </style>
  