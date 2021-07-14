import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import 'virtual:svg-icons-register';
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'
import Icon from './components/Icon.vue'
import MarkBody from './components/MarkBody.vue'
import 'github-markdown-css'
import './libs/sheepUI.css'

import router from './router'

const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.component('icon', Icon)
app.component('mark-body', MarkBody)
app.use(router)
app.mount('#app')
