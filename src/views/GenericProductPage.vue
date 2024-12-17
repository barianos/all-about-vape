<template>
  <div>
    <ProductList v-if="resolvedTypeId" :key="productType" :productType="productType" :filters="filters" />
    <v-alert v-else type="error" color="red" elevation="2">
      {{ t('generalError') }}
    </v-alert>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import { supabase } from '@/supabase';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  components: {
    ProductList,
  },
  data() {
    return {
      resolvedTypeId: null, 
      loading: true,
    };
  },
  computed: {
    productType() {
      return this.$route.params.productType;
    },
    filters() {
      if (!this.resolvedTypeId) return [];
      return [{ column: 'type_id', condition: 'eq', value: this.resolvedTypeId }];
    },
  },
  methods: {
    async fetchTypeId() {
      this.loading = true;
      const { data, error } = await supabase
        .from('product_types')
        .select('id')
        .eq('slug', this.productType)
        .single();
      console.log(data);

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
        this.fetchTypeId();
      }
    },
  },
  async mounted() {
    await this.fetchTypeId();
  },
};
</script>
