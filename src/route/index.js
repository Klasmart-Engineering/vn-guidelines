import Vue from 'vue'
import VueRouter from 'vue-router'
import GlIndex from "../pages/Guidelines/Index";
import GlShow from "../pages/Guidelines/Show";

Vue.use(VueRouter)

const routes = [
    {
        path: '/guidelines/view',
        name:'guidelines-view',
        component: GlShow
    },
    {
        path: '/',
        name: 'home',
        component: GlIndex
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
