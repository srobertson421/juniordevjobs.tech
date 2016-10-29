import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFire from 'vuefire';
import VueMdl from 'vue-mdl';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import AddJob from './pages/AddJob.vue';
import JobShow from './pages/JobShow.vue';

Vue.use(VueRouter);
Vue.use(VueFire);
Vue.use(VueMdl);

// Array of routes for router instance
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/add-job',
    name: 'addJob',
    component: AddJob
  },
  {
    path: '/job/:id',
    name: 'jobShow',
    component: JobShow
  }
]

// instantiation of router using predefined routes array
const router = new VueRouter({
  mode: 'history',
  routes
});

// instantiation of main vue component utilizing router
const app = new Vue({
  router
}).$mount('#app');
