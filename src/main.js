import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

//import config router
import router from './router'

// createApp(App).mount('#app')
const app = createApp(App);
const pinia = createPinia()

//gunakan "router" di Vue dengan plugin "use"
app.use(router).use(pinia).mount('#app')
