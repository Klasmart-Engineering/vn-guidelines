import Vue from 'vue'
import VueRouter from 'vue-router'
import GuideLinesListPage from "../pages/GuideLinesList";
import GuideLinesDetail from "../pages/GuideLinesDetail";
import HomePage from "../pages/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/guidelines',
        name:'guidelines-list',
        component: GuideLinesListPage
    },
    {
        path: '/guidelines-view',
        name:'guidelines-detail',
        component: GuideLinesDetail
    },
    {
        path: '/',
        name: 'home',
        component: HomePage
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
