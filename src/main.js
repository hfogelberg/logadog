import App from './App.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import router from './router';
import {config} from './helpers/firebaseConfig';

Vue.use(VueRouter);
new Vue({
  router,
  created() {
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/mypets')
      } else {
        this.$router.push('/auth')
      }
    }) ;
  },
  el: '#app',
  render: h => h(App)
})
