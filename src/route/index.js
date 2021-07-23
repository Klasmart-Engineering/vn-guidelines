import Vue from 'vue'
import VueRouter from 'vue-router'
import List from "../pages/Guidelines/Index";
import Show from "../pages/Guidelines/Show";
import Create from "../pages/Guidelines/Create";
import ListB from "../pages/GuidelinesB/Index";
import ShowB from "../pages/GuidelinesB/Show";
import CreateB from "../pages/GuidelinesB/Create";

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
    },
    {
        path: '/new',
        name: 'home-b',
        component: ListB
    },
    {
        path: '/view-b',
        name: 'guidelines-view-b',
        component: ShowB
    },
    {
        path: '/editor-b',
        name: 'guidelines-create-b',
        component: CreateB
    },
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
