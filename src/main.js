import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "AIzaSyBjk_Ll5oEP-H6jlRf7xCAsUmQhDr7yyCM",
  authDomain: "goveniers.firebaseapp.com",
  databaseURL: "https://goveniers.firebaseio.com",
  projectId: "goveniers",
  storageBucket: "goveniers.appspot.com",
  messagingSenderId: "262034156817"
})

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
export const db = firebase.firestore()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
