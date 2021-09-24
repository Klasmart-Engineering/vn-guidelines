import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
    state: {
        count: 0,
        windowURL: '',
    },
    mutations: {
        windowURLGet(state) {
            state.windowURL = window.location.search.split('?')[1]
        },
    },
})
