import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import 'vuetify/styles'; 
import i18n from './i18n';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
    },
    theme: {
      defaultTheme: 'light',
    },
    display: {
      mobileBreakpoint: 'sm',
    },
  });

createApp(App).use(vuetify).use(router).use(i18n).mount('#app');
