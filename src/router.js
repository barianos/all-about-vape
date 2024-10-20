import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import FlavorShots from '@/views/FlavorShots.vue';
import NewsPage from '@/views/NewsPage.vue';


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
  {
    path: '/news',
    name: 'News',
    component: NewsPage
  },
  {
    path: '/flavor-shots',
    name: 'flavorShots',
    component: FlavorShots
  }

];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
