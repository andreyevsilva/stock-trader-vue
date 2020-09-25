import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import router from './router'
import store from './store/store.js'

import vuetify from './plugins/vuetify'
import './plugins/axios'

import '../src/assets/css/style.css'

//Filters
import filters from '../src/filters/currency'

Vue.config.productionTip = false

filters.forEach(f => {
  Vue.filter(f.name, f.execute)
})

new Vue({ 
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
