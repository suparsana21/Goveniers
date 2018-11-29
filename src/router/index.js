import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Shop from '@/components/pages/Shop';
import Factory from '@/components/pages/Factory';
import Detail from '@/components/pages/Detail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/shop', name: 'shop', component: Shop },
    { path: '/shop/:id', name: 'shop', component: Detail },
    { path: '/crafter', name: 'crafter', component: Factory },
    { path: '/crafter/:id', name: 'crafter', component: Detail },
    { path: '*', redirect: { name: 'home' } },
  ],
});
