import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import { store } from './store'
import { router } from './route'
import './assets/scss/style.scss'

Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
