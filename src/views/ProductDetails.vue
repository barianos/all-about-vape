<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="product.primary_photo" alt="product.name" height="400px" class="mb-4"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1>{{ product.name}}</h1>
        <h3>{{ product.producer }}</h3>
        <p>{{ product.description }}</p>
        <v-btn color="secondary" @click="$router.back()"> {{ t('back') }}</v-btn>
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
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {},
      locale: this.$i18n.locale || 'en',
    };
  },
  methods: {
    async fetchProductDetails() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', this.id)
        .single();

      if (error) {
        console.error('Error fetching product details:', error);
      } else {
        this.product = data;


        this.product.name = this.product[`name_${this.locale}`] || this.product.name_en;
        this.product.description = this.product[`description_${this.locale}`] || this.product.description_en;


        if (this.productType && this.product.type_slug !== this.productType) {
          console.warn('Product type mismatch!');
        }
      }
    },
  },

  mounted() {
    this.fetchProductDetails();
  },
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  margin-bottom: 16px;
}

p {
  font-size: 1.2em;
  line-height: 1.6em;
}
</style>
