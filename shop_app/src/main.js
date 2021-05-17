import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

import App from './App.vue';
import Home from './components/Home.vue';
import Products from './components/Products.vue';
import Create from './components/Create.vue';
import Edit from './components/Edit.vue';
import Orders from './components/Orders.vue';
import About from './components/About.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import './assets/style.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'Home',
    path: '/home',
    component: Home
  },
  {
    name: 'Products',
    path: '/products',
    component: Products
  },
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'Orders',
    path: '/orders',
    component: Orders
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')