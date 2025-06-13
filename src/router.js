import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import NewsPage from '@/views/NewsPage.vue';
import GenericProductPage from '@/views/GenericProductPage.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import ProductList from '@/components/ProductList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true,
  },
  {
    path: '/news',
    name: 'News',
    component: NewsPage,
  },
  {
    path: '/:category/:productType',
    name: 'GenericProductPage',
    component: GenericProductPage,
    props: true,
  },
  {
    path: "/products",
    name: "ProductList",
    component: ProductList,
    props: (route) => ({ search: route.query.search }),
  },  
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/all-about-vape/' : '/'),
  routes,
});

export default router;
