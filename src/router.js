import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import FlavorShotsPage from '@/views/ProductPages/FlavorShots.vue';
import NicotineLiquids from '@/views/ProductPages/NicotineLiquids.vue';
import BaseLiquids from '@/views/ProductPages/BaseLiquids.vue';
import ReadyLiquids from '@/views/ProductPages/ReadyLiquids.vue';
import NewsPage from '@/views/NewsPage.vue';
// import DevicesPage from '@/views/ProductPages/DevicesPage.vue';
import StarterKitsPage from '@/views/ProductPages/StarterKitsPage.vue';
import PodsPage from '@/views/ProductPages/PodsPage.vue';
import ModsPage from '@/views/ProductPages/ModsPage.vue';


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
  // {
  //   path: '/devices/',
  //   name: 'Devices',
  //   component: DevicesPage,
  // },
  {
    path: '/devices/pods/',
    name: 'Pods',
    component: PodsPage,
  },
  {
    path: '/devices/kits',
    name: 'Kits',
    component: StarterKitsPage,
  },
  {
    path: '/devices/mods/',
    name: 'Mods',
    component: ModsPage,
  },
  // {
  //   path: '/atomizers/factory',
  //   name: 'Factory Atomizers',
  //   component: FactoryAtomizersPage,
  // },
  // {
  //   path: '/atomizers/rebuildable',
  //   name: 'Rebuildable Atomizers',
  //   component: RebuildableAtomizersPage,
  // },
  // {
  //   path: '/atomizers/coils',
  //   name: 'Coils',
  //   component: CoilsPage,
  // },
  // {
  //   path: '/atomizers/capsules',
  //   name: 'Capsules',
  //   component: CapsulesPage,
  // },
  {
    path: '/liquids/flavorshots',
    name: 'Flavor Shots',
    component: FlavorShotsPage,
  },
  {
    path: '/liquids/ready',
    name: 'Ready Flavors',
    component: ReadyLiquids,
  },
  {
    path: '/liquids/pg-vg-bases',
    name: 'Bases',
    component: BaseLiquids,
  },
  {
    path: '/liquids/nicotine',
    name: 'Liquid Nicotine',
    component: NicotineLiquids,
  },
  // {
  //   path: '/consumables/wire',
  //   name: 'Wires',
  //   component: WiresPage,
  // },
  // {
  //   path: '/consumables/coils',
  //   name: 'Coils',
  //   component: CoilsPage,
  // },
  // {
  //   path: '/consumables/cotton',
  //   name: 'Cotton',
  //   component: CottonPage,
  // },
  // {
  //   path: '/consumables/empty-bottles',
  //   name: 'Empty Bottles',
  //   component: EmptyBottlesPage,
  // },
  // {
  //   path: '/accessories/batteries',
  //   name: 'Batteries',
  //   component: BatteriesPage,
  // },
  // {
  //   path: '/accessories/chargers',
  //   name: 'Chargers',
  //   component: ChargersPage,
  // },
  // {
  //   path: '/accessories/tools',
  //   name: 'Tools',
  //   component: ToolsPage,
  // },
  // {
  //   path: '/other-products/pouches',
  //   name: 'Pouches',
  //   component: PouchesPage,
  // },
  // {
  //   path: '/other-products/shisha',
  //   name: 'Shisha',
  //   component: ShishaPage,
  // },
  // {
  //   path: '/disposables/with-nicotine',
  //   name: 'Disposables With Nicotine',
  //   component: DisposablesNicotinePage,
  // },
  // {
  //   path: '/disposables/without-nicotine',
  //   name: 'Disposalbes Without Nicotine',
  //   component: DisposableNoNicotinePage,
  // },
  {
    path: '/news',
    name: 'News',
    component: NewsPage
  },
  // {
  //   path: '/flavor-shots',
  //   name: 'flavorShots',
  //   component: FlavorShots
  // }

];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
