<template>
  <v-container>
    <v-row v-if="loading">
      <v-col cols="12">
        <v-progress-linear indeterminate color="secondary"></v-progress-linear>
      </v-col>
    </v-row>

    <v-row v-else-if="products.length > 0">
      <v-col v-for="item in products" :key="item.id" cols="12" sm="12" md="4" lg="3" xl="3">
        <v-card>
          <v-img :src="hoveredId === item.id && item.secondary_photo ? item.secondary_photo : item.primary_photo"
            :alt="item.name" @mouseover="handleMouseOver(item.id)" @mouseleave="handleMouseLeave" height="200px"
            class="primary-photo"></v-img>

          <v-card-title>{{ item.producer }}</v-card-title>
          <v-card-subtitle>{{ item.name }}</v-card-subtitle>
          <v-card-text>{{ item.description.slice(0, 100) }}...</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12">
        <v-alert type="info" border="left" elevation="2" color="secondary">
          Δεν υπάρχουν διαθέσιμα προϊόντα για αυτήν την κατηγορία.
        </v-alert>
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
      hoveredId: null,
      loading: true
    };
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      let query = supabase.from(this.productType).select('*');
      if (this.productType === 'with-nicotine' || this.productType === 'without-nicotine') {
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
      this.loading = false;
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
