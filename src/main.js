import { createApp } from 'vue';
// @ts-ignore
import App from './App.vue';
import router from './router';

import "../src/assets/style.scss";



createApp(App).use(router).mount('#app');
