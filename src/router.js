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
import CoilsPage from '@/views/ProductPages/CoilsPage.vue';
import FactoryVaporizers from '@/views/ProductPages/FactoryVaporizers.vue';
import PodCartridges from '@/views/ProductPages/PodCartridges.vue';
import RtaVaporizers from '@/views/ProductPages/RtaVaporizers.vue';
import CottonPage from '@/views/ProductPages/CottonPage.vue';
import EmptyBottlesPage from '@/views/ProductPages/EmptyBottlesPage.vue';
import PrebuiltCoils from '@/views/ProductPages/PrebuiltCoils.vue';
import WiresPage from '@/views/ProductPages/WiresPage.vue';
import BatteriesPage from '@/views/ProductPages/BatteriesPage.vue';
import Chargers from '@/views/ProductPages/Chargers.vue';
import Tools from '@/views/ProductPages/Tools.vue';
import PouchesPage from '@/views/ProductPages/PouchesPage.vue';
import ShishaPage from '@/views/ProductPages/ShishaPage.vue';
import DisposablesNicotine from '@/views/ProductPages/DisposablesNicotine.vue';
import DisposablesNicotineFree from '@/views/ProductPages/DisposablesNicotineFree.vue';


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
  {
    path: '/atomizers/factory',
    name: 'Factory Atomizers',
    component: FactoryVaporizers,
  },
  {
    path: '/atomizers/rta',
    name: 'RTA Atomizers',
    component: RtaVaporizers,
  },
  {
    path: '/atomizers/coils',
    name: 'Coils',
    component: CoilsPage,
  },
  {
    path: '/atomizers/Cartridges',
    name: 'Cartridges',
    component: PodCartridges,
  },
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
  {
    path: '/consumables/wire',
    name: 'Wires',
    component: WiresPage,
  },
  {
    path: '/consumables/coils',
    name: 'PrebuiltCoils',
    component: PrebuiltCoils,
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
    component: Chargers,
  },
  {
    path: '/accessories/tools',
    name: 'Tools',
    component: Tools,
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
    component: DisposablesNicotine,
  },
  {
    path: '/disposables/without-nicotine',
    name: 'Disposalbes Without Nicotine',
    component: DisposablesNicotineFree,
  },
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
