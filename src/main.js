import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ToastPlugins from './plugins/ToastPlugins'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastPlugins)

app.mount('#app')
