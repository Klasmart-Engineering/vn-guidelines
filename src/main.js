import Vue from 'vue'
import VueMeta from 'vue-meta'
import moment from 'moment';
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

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(value*1000).format('YYYY-MM-DD HH:mm:ss')
    }
});
