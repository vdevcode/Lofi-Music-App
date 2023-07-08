import { createApp } from 'vue'
import App from './App.vue'
import outputcss from '../dist/output.css'

createApp(App).use(outputcss).mount('#app')
