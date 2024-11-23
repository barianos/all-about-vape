<template>
  <div>
    <ProductList :key="productType" :productType="productType" :filters="filters" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductList,
  },
  computed: {
    productType() {
      return this.$route.params.productType;
    },
    filters() {
      let filters = [];

      if (this.productType === 'with-nicotine' || this.productType === 'without-nicotine') {
        filters = [{ column: 'nicotine', condition: 'eq', value: this.productType === 'with-nicotine' }];
      }

      return filters;
    },
  },
};
</script>
