import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // Az önce oluşturduğumuz dosya

import './style.css' // Varsa stillerin
import '@mdi/font/css/materialdesignicons.css'

createApp(App).use(vuetify).mount('#app')
