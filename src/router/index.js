import Vue from 'vue';
import VueRouter from 'vue-router';
import BaseLogin from '../views/BaseLogin/BaseLogin.vue';
import Login from '../components/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'baseLogin',
    component: BaseLogin,
    children: [
      {
        path: '',
        name: 'login',
        component: Login,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
