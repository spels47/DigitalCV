import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import util from "@/helpers/util";
import i18n from './i18n';

const app = createApp(App);

// Add global properties
app.config.globalProperties.$utils = util;

// Use plugins and libraries
app.use(router);
app.use(store);
app.use(vuetify);
app.use(i18n);

// Mount the app
app.mount('#app');
