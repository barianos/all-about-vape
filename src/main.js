import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons
import 'vuetify/styles'; 
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
      defaultTheme: 'light', // Optional, but makes it clear that you're using Vuetify themes
    },
    display: {
      mobileBreakpoint: 'sm', // Optional, sets the mobile breakpoint to 'sm'
    },
  });

createApp(App).use(vuetify).use(router).mount('#app');
