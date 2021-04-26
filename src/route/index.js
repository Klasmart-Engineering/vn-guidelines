import Vue from 'vue'
import VueRouter from 'vue-router'
import List from "../pages/Guidelines/Index";
import Show from "../pages/Guidelines/Show";
import Create from "../pages/Guidelines/Create";

Vue.use(VueRouter)

const routes = [
    {
        path: '/view',
        name: 'guidelines-view',
        component: Show
    },
    {
        path: '/editor',
        name: 'guidelines-create',
        component: Create
    },
    {
        path: '/',
        name: 'home',
        component: List
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
