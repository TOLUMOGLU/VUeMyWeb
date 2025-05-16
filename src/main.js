import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // Az önce oluşturduğumuz dosya

import './style.css' // Varsa stillerin

createApp(App).use(vuetify).mount('#app')
