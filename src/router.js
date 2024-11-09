import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
// import ProductsPage from '@/views/ProductsPage.vue';
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
    path: '/devices/',
    name: 'Devices',
    component: DevicesPage,
  },
  {
    path: '/devices/pods/',
    name: 'Pods',
    component: PodsPage,
  },
  {
    path: '/devices/kits',
    name: 'Kits',
    component: KitsPage,
  },
  {
    path: '/devices/mods/',
    name: 'Mods',
    component: ModsPage,
  },
  {
    path: '/atomizers/factory',
    name: 'Factory Atomizers',
    component: FactoryAtomizersPage,
  },
  {
    path: '/atomizers/rebuildable',
    name: 'Rebuildable Atomizers',
    component: RebuildableAtomizersPage,
  },
  {
    path: '/atomizers/coils',
    name: 'Coils',
    component: CoilsPage,
  },
  {
    path: '/atomizers/capsules',
    name: 'Capsules',
    component: CapsulesPage,
  },
  {
    path: '/liquids/flavorshots',
    name: 'Flavor Shots',
    component: FlavorShotsPage,
  },
  {
    path: '/liquids/ready-10ml',
    name: 'Ready Flavors',
    component: ReadyPage,
  },
  {
    path: '/liquids/pg-vg-bases',
    name: 'Bases',
    component: BasesPage,
  },
  {
    path: '/liquids/nicotine',
    name: 'Liquid Nicotine',
    component: NicotinePage,
  },
  {
    path: '/consumables/wire',
    name: 'Wires',
    component: WiresPage,
  },
  {
    path: '/consumables/coils',
    name: 'Coils',
    component: CoilsPage,
  },
  {
    path: '/consumables/cotton',
    name: 'Cotton',
    component: CottonPage,
  },
  {
    path: '/consumables/empty-bottles',
    name: 'Empty Bottles',
    component: EmptyBottlesPage,
  },
  {
    path: '/accessories/batteries',
    name: 'Batteries',
    component: BatteriesPage,
  },
  {
    path: '/accessories/chargers',
    name: 'Chargers',
    component: ChargersPage,
  },
  {
    path: '/accessories/tools',
    name: 'Tools',
    component: ToolsPage,
  },
  {
    path: '/other-products/pouches',
    name: 'Pouches',
    component: PouchesPage,
  },
  {
    path: '/other-products/shisha',
    name: 'Shisha',
    component: ShishaPage,
  },
  {
    path: '/disposables/with-nicotine',
    name: 'Disposables With Nicotine',
    component: DisposablesNicotinePage,
  },
  {
    path: '/disposables/without-nicotine',
    name: 'Disposalbes Without Nicotine',
    component: DisposableNoNicotinePage,
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
