import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';

<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js"></script>

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');

var firebaseConfig = {
  apiKey: "AIzaSyB-u9v9rdOUExW1t2l13SoqGA03bP8haiM",
  authDomain: "lab2websitesjl.firebaseapp.com",
  databaseURL: "https://lab2websitesjl.firebaseio.com",
  projectId: "lab2websitesjl",
  storageBucket: "lab2websitesjl.appspot.com",
  messagingSenderId: "346828193759",
  appId: "1:346828193759:web:68150140a63706fa"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    store.commit('setUser', user);
  }
  else {
    store.commit('setUser', null);
  }
});



/* <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js"></script> */

/* <script>
  var firebaseConfig = {
    apiKey: "AIzaSyB-u9v9rdOUExW1t2l13SoqGA03bP8haiM",
    authDomain: "lab2websitesjl.firebaseapp.com",
    databaseURL: "https://lab2websitesjl.firebaseio.com",
    projectId: "lab2websitesjl",
    storageBucket: "lab2websitesjl.appspot.com",
    messagingSenderId: "346828193759",
    appId: "1:346828193759:web:68150140a63706fa"
  };
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script> */