import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc/index.vue'
import Button from './views/Doc/components/BUttonDemo.vue'
import Dialog from './views/Doc/components/DialogDemo.vue'
import Tabs from './views/Doc/components/TabsDemo.vue'
import Switch from './views/Doc/components/SwitchDemo.vue'

import MarkBody from './components/MarkBody.vue'

import { h } from 'vue'

const renderMdPage = (filename:string) => h(MarkBody, { 
    fileName: filename,
    key: filename
})

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc , redirect: '/doc/intro', children: [
            { path: 'intro', component: renderMdPage('intro')},
            { path: 'install', component: renderMdPage('install') },
            { path: 'quickstart', component: renderMdPage('quickstart') },
            { path: 'switch', component: Switch },
            { path: 'button', component: Button },
            { path: 'dialog', component: Dialog },
            { path: 'tabs', component: Tabs },
        ]},
    ]
});

export default router;
