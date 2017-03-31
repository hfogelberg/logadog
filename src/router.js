import VueRouter from 'vue-router';
import Auth from './components/Auth.vue';
import AuthSuccess from './components/AuthSuccess.vue';
import Mypets from './components/MyPets.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Auth },
    { path: '/auth', component: Auth },
    { path: '/success', component: AuthSuccess },
    { path: '/mypets', component: Mypets}
  ]
});

export default router;
