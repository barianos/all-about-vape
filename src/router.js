import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ProductsPage from '@/views/ProductsPage.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },

];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
