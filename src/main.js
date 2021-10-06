import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/scss/main.scss'
import Main from '@/components/Main'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueI18n)

Vue.config.productionTip = false

const routes = [
    {path: '/', name: 'MAIN', component: Main},
]

const router = new VueRouter({
    routes
})

function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

const i18n = new VueI18n({
    messages: loadLocaleMessages(), // set locale messages
})

export const eventBus = new Vue()

new Vue({
    render: h => h(App),
    router,
    i18n,
}).$mount('#app')
