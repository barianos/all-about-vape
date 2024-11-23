<!-- ProductList.vue -->
<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in products"
        :key="item.id"
        cols="12" sm="6" md="4"
      >
        <v-card>
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
          <v-card-text>{{ item.description.slice(0, 100) }}...</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { supabase } from '../supabase';

export default {
  props: {
    productType: {
      type: String,
      required: true
    },
    filters: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      products: [],
      hoveredId: null
    };
  },
  methods: {
    async fetchProducts() {
      console.log(this.productType)
      let query = supabase.from(this.productType).select('*');
      if(this.productType === 'with-nicotine' || this.productType === 'without-nicotine'){
        query = supabase.from('disposables').select('*');
      }

      this.filters.forEach(filter => {
        const { column, condition, value } = filter;
        if (column && condition && value !== undefined) {
          query = query[condition](column, value);
        }
      });

      const { data, error } = await query;
      if (error) {
        console.error(`Error fetching products from ${this.productType}:`, error);
      } else {
        this.products = data;
      }
    },
    handleMouseOver(id) {
      this.hoveredId = id;
    },
    handleMouseLeave() {
      this.hoveredId = null;
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
.primary-photo {
  transition: 0.3s ease-in-out;
}
</style>
