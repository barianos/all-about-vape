<template>
    <v-container>
      <v-row>
        <v-col v-for="flavor in flavors" :key="flavor.id" cols="12" md="4" lg="3">
          <v-card>
            <v-img :src="flavor.primary_photo" alt="Flavor Image" height="200px"></v-img>
            <v-card-title>{{ flavor.name }}</v-card-title>
            <v-card-subtitle>{{ flavor.producer }}</v-card-subtitle>
            <v-card-text v-if="flavor.description">{{ flavor.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { supabase } from '@/supabase'
  
  export default {
    name: 'FlavorShots',
    data() {
      return {
        flavors: []
      }
    },
    async created() {
        console.log("Loaded Flacvor Shots view");
      // Fetch data from Supabase
      const { data, error } = await supabase
        .from('flavor_shots')
        .select('id, name, producer, description, primary_photo')
  
      if (error) {
        console.error('Error fetching flavor shots:', error)
      } else {
        console.log(data);
        this.flavors = data
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  