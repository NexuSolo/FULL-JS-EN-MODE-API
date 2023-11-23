import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const user = ''

const app = createApp(App)
app.config.globalProperties.user = user
app.use(router).mount('#app')