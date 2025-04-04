<template>
  <div>
    <ProductFilters v-if="resolvedTypeId" :productTypeId="resolvedTypeId" :productType="productType"
      @updateFilters="applyFilters" />
    <ProductList v-if="resolvedTypeId" :key="productType" :productType="resolvedTypeId.toString()"
      :filters="mergedFilters" />
    <v-alert v-else type="error" color="red" elevation="2">
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
      loading: true,
      userFilters: [],
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
  },
  methods: {
    applyFilters(newFilters) {
      console.log('Applying filters:', newFilters);

      this.userFilters = [];

      Object.keys(newFilters).forEach(column => {
        const values = newFilters[column];
        if (values && values.length > 0) {
          this.userFilters.push({
            column,
            condition: 'in',
            value: values
          });
        }
      });

    },
    async fetchTypeId() {
      this.loading = true;
      const { data, error } = await supabase
        .from('product_types')
        .select('id')
        .eq('slug', this.productType)
        .single();

      if (error) {
        console.error(`Error fetching type_id for ${this.productType}:`, error);
        this.resolvedTypeId = null;
      } else {
        this.resolvedTypeId = data?.id || null;
      }
      this.loading = false;
    },
  },
  watch: {
    productType(newSlug, oldSlug) {
      if (newSlug !== oldSlug) {
        this.userFilters = [];
        this.fetchTypeId();
      }
    },
  },
  async mounted() {
    await this.fetchTypeId();
  },
};
</script>
