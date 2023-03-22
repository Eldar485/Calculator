import config from './components/v-Config'
import {createRouter, createWebHashHistory} from "vue-router";
import Main from "./components/v-Main";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/config',
        component: config
    }
]

const router =  createRouter({
    routes,
    history: createWebHashHistory()
})
export default router