<template>
  <v-row v-if="products.length > 0">
    <v-col v-for="item in products" :key="item.id" cols="12" sm="12" md="4" lg="3" xl="3">
      <v-card :to="{ name: 'ProductDetails', params: { productType: item.type, id: item.id } }" class="v-card--link">
        <v-img :lazy-src="item.primary_photo"
          :src="hoveredId === item.id && item.secondary_photo ? item.secondary_photo : item.primary_photo"
          :alt="item.localizedName" @mouseover="handleMouseOver(item.id)" @mouseleave="handleMouseLeave" height="200px"
          class="primary-photo"></v-img>

        <v-card-title>{{ item.producer }}</v-card-title>
        <v-card-text>{{ item.localizedName }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <v-row v-else-if="!loading">
    <v-col cols="12">
      <v-alert type="info" border="top" elevation="2" color="secondary">
        {{ t('noProductsMessage') }}
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
import { supabase } from '../supabase';
import { useI18n } from 'vue-i18n';

export default {
  emits: ['is-loading'],
  setup() {
    const { t } = useI18n();
    return { t };
  },
  props: {
    productType: {
      type: String,
    },
    filters: {
      type: Array,
      default: () => [],
    },
    search: {
      type: String,
      default: null,
    },
    isParentLoading: Boolean,
    isInitialLoad: Boolean
  },
  data() {
    return {
      products: [],
      hoveredId: null,
      loading: false,
      locale: this.$i18n.locale || 'en',
      sortBy: 'producer',
      sortAsc: true,
    };
  },
  watch: {
    filters: {
      handler() {
        this.fetchProducts();
      },
      deep: true,
    },
    search() {
      this.fetchProducts();
    },
    // loading(newVal) {
    //   this.$emit('loading-state', newVal);
    // },
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      const searchQuery = this.$route.query.search ? this.$route.query.search.trim() : '';
      const typeId = parseInt(this.productType, 10);
      
      if (isNaN(typeId) && (!searchQuery || !searchQuery.trim())) {
        console.error("Neither a valid product type nor search query provided");
        this.loading = false;
        return;
      }

      let query = supabase.from('products').select('*');
      

      if (!isNaN(typeId)) {
        query = query.eq('type_id', typeId);
      }

      if (searchQuery) {
        const formattedSearch = `%${searchQuery}%`;
        query = query.or(
          `name_en.ilike.${formattedSearch},` +
          `name_el.ilike.${formattedSearch},` +
          `description_en.ilike.${formattedSearch},` +
          `description_el.ilike.${formattedSearch}`
        );
        }
      

      // Apply sorting
      query = query.order(this.sortBy, { ascending: this.sortAsc });

      const filtersByColumn = {};
      this.filters.forEach(filter => {
        if (!filtersByColumn[filter.column]) {
          filtersByColumn[filter.column] = [];
        }
        filtersByColumn[filter.column].push(filter);
      });

      Object.entries(filtersByColumn).forEach(([column, filters]) => {
        if (column === 'type_id') {
          return;
        }

        const values = filters.map(f => f.value).flat();

        if (values.length === 0) {
          return;
        } else if (values.length === 1) {
          const value = values[0];
          query = query.ilike(column, value);
          // if (column === 'vaping_profile' || column === 'producer' || column === 'volume' || column === 'flavor') {
          //   query = query.ilike(column, value);
          // } else {
          //   query = query.eq(column, value);
          // }
        } else {
          const orConditions = values.map(val => `${column}.ilike.${val}`).join(',');
            query = query.or(orConditions);
          // if (column === 'vaping_profile' || column === 'producer' || column === 'volume' || column === 'flavor') {
          //   const orConditions = values.map(val => `${column}.ilike.${val}`).join(',');
          //   query = query.or(orConditions);
          // } else {
          //   query = query.in(column, values);
          // }
        }
        this.loading = false;
      });

      const { data, error } = await query;
      if (error) {
        console.error(`Error fetching products from ${this.productType}:`, error);
      } else {
        this.products = data.map(product => ({
          ...product,
          localizedName: product[`name_${this.locale}`] || product.name_en,
          localizedDescription: product[`description_${this.locale}`] || product.description_en,
        }));
      }
      this.loading = false;
    },
    handleMouseOver(id) {
      this.hoveredId = id;
    },
    handleMouseLeave() {
      this.hoveredId = null;
    },
  },
  mounted() {
    this.fetchProducts();
  },
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
