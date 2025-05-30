<template>
  <div>
    <!-- Persistent loading overlay -->
    <v-overlay 
      :model-value="initialLoading" 
      class="align-center justify-center"
      persistent
    >
      <v-progress-circular 
        indeterminate 
        color="primary"
        size="64"
      ></v-progress-circular>
    </v-overlay>

    <!-- Main content (always rendered, but filters/list depend on resolvedTypeId) -->
    <ProductFilters 
      v-if="resolvedTypeId" 
      :productTypeId="resolvedTypeId" 
      :productType="productType"
      @updateFilters="applyFilters" 
    />
    
    <ProductList 
      v-if="resolvedTypeId" 
      :key="`${productType}-${JSON.stringify(mergedFilters)}`" 
      :productType="resolvedTypeId.toString()"
      :filters="mergedFilters"
      @loading-state="handleLoadingState"
    />

    <!-- Error state -->
    <v-alert 
      v-if="!initialLoading && !resolvedTypeId"
      type="error" 
      color="red" 
      elevation="2"
      class="ma-4"
    >
      {{ t('generalError') }}
    </v-alert>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import ProductFilters from '@/components/ProductFilters.vue';
import { supabase } from '@/supabase';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },
  components: {
    ProductList,
    ProductFilters,
  },
  data() { 
    return {
      resolvedTypeId: null,
      initialLoading: true,
      userFilters: [],
      childLoading: false,
    };
  },
  computed: {
    productType() {
      return this.$route.params.productType;
    },
    defaultFilters() {
      if (!this.resolvedTypeId) return [];
      return [{ column: 'type_id', condition: 'eq', value: this.resolvedTypeId }];
    },
    mergedFilters() {
      return [...this.defaultFilters, ...this.userFilters];
    },
    showNoProducts() {
        return !this.initialLoading && !this.childLoading && this.resolvedTypeId;
      }
  },
  methods: {
    applyFilters(newFilters) {
      this.userFilters = [];
      Object.keys(newFilters).forEach(column => {
        const values = newFilters[column];
        if (values?.length > 0) {
          values.forEach(value => {
              this.userFilters.push({
                column,
                condition: 'like',
                value: `%${value}%`,
                operator: 'or'
              });
            });
        }
      });
    },
    async fetchTypeId() {
      this.initialLoading = true;
      try {
        const { data, error } = await supabase
          .from('product_types')
          .select('id')
          .eq('slug', this.productType)
          .single();

        if (error) throw error;
        this.resolvedTypeId = data?.id || null;
      } catch (error) {
        console.error('Error fetching type_id:', error);
        this.resolvedTypeId = null;
      } finally {
        this.initialLoading = false;
      }
    },
    handleLoadingState(isLoading) {
      this.childLoading = isLoading;
    },
    
  },
  watch: {
    productType() {
      this.fetchTypeId();
    },
  },
  mounted() {
    this.fetchTypeId();
  },
};
</script>