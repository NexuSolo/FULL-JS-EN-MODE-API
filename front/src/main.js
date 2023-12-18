// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // import the store

const app = createApp(App);
app.use(store); // use the store
app.use(router).mount('#app');