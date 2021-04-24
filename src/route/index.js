import Vue from 'vue'
import VueRouter from 'vue-router'
import GlIndex from "../pages/Guidelines/Index";
import GlShow from "../pages/Guidelines/Show";
import IndexPage from "../pages/Index";

Vue.use(VueRouter)

const routes = [
    {
        path: '/guidelines',
        name:'guidelines',
        component: GlIndex
    },
    {
        path: '/guidelines/view',
        name:'guidelines-view',
        component: GlShow
    },
    {
        path: '/',
        name: 'home',
        component: IndexPage
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
