<template>
  <v-container>
    <v-row v-if="loading">
      <v-col cols="12">
        <v-progress-linear indeterminate color="secondary"></v-progress-linear>
      </v-col>
    </v-row>

    <v-row v-else-if="products.length > 0">
      <v-col v-for="item in products" :key="item.id" cols="12" sm="12" md="4" lg="3" xl="3">
        <v-card :to="{ name: 'ProductDetails', params: { productType: item.type, id: item.id } }" class="v-card--link"> 

          <v-img :lazy-src="item.name" :src="hoveredId === item.id && item.secondary_photo ? item.secondary_photo : item.primary_photo"
            :alt="item.name" @mouseover="handleMouseOver(item.id)" @mouseleave="handleMouseLeave" height="200px"
            class="primary-photo"></v-img>

          <v-card-title>{{ item.producer }}</v-card-title>
          <v-card-text>{{ item.name }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12">
        <v-alert type="info" border="left" elevation="2" color="secondary">
          {{ t('noProductsMessage') }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { supabase } from '../supabase';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
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

<style scoped>
.v-card--link:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}


.v-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.3s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}



</style>
