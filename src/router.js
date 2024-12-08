import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import NewsPage from '@/views/NewsPage.vue';
import GenericProductPage from '@/views/GenericProductPage.vue';
import ProductDetails from '@/views/ProductDetails.vue';

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
    path: '/about',
    name: 'About',
    component: AboutPage,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
