import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import './style.css'
import '@mdi/font/css/materialdesignicons.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'  

library.add(faLinkedin, faGithub, faMedium, faEnvelope)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(vuetify)
app.mount('#app')
