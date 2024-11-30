<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="product.primary_photo" alt="product.name" height="400px" class="mb-4"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1>{{ product.name }}</h1>
        <h3>{{ product.producer }}</h3>
        <p>{{ product.description }}</p>
        <v-btn color="secondary" @click="$router.back()">Επιστροφή</v-btn>
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
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    async fetchProductDetails() {
      const { data, error } = await supabase
        .from(this.productType)
        .select('*')
        .eq('id', this.id)
        .single();

      if (error) {
        console.error('Error fetching product details:', error);
      } else {
        this.product = data;
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
