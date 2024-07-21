// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify'; // Importez Vuetify

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify) // Utilisez Vuetify
  .mount('#app');

