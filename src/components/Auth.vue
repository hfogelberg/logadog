<template>
  <div class="">
    <h1>Auth</h1>
    <hr>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>


<script>

import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../helpers/firebaseConfig';

export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/mypets',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  },
};
</script>
