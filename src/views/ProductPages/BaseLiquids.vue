<template>
    <v-container>
      <v-row>
        <v-col
          v-for="item in liquidBases"
          :key="item.id"
          cols="12" sm="6" md="4"
        >
          <v-card>
            <!-- Image block with mouseover effect -->
            <v-img
              :src="hoveredId === item.id && item.secondary_photo ? item.secondary_photo : item.primary_photo"
              :alt="item.name"
              @mouseover="handleMouseOver(item.id)"
              @mouseleave="handleMouseLeave"
              height="200px"
              class="primary-photo"
            ></v-img>
  
            <v-card-title>{{ item.producer }}</v-card-title>
            <v-card-subtitle>{{ item.name }}</v-card-subtitle>
            <v-card-text>{{ item.description }}</v-card-text>
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
        liquidBases: [],       
        hoveredId: null 
      };
    },
    methods: {
      async fetchLiquidBases() {
        console.log('Fetching Data!')
        const { data, error } = await supabase.from('liquid_bases').select('*');
        if (error) {
          console.error('Error fetching flavor shots:', error);
        } else {
            console.log(data);
          this.liquidBases = data;
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
      this.fetchLiquidBases();
    }
  };
  </script>
  
  <style scoped>
  .primary-photo {
    transition: 0.3s ease-in-out;
  }
  </style>
  