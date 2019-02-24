// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css';

import App from './App.vue'
import  { routes }  from './router/routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuetify)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

