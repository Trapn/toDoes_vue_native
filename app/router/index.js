import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from '../components/App';


const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/Home',
      component: App,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: 'About',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;