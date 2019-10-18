import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutoSize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutoSize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAmG0JeyRSMCbkpCBZ2uucWwJy7-6peu-k",
  authDomain: "vue-citas.firebaseapp.com",
  databaseURL: "https://vue-citas.firebaseio.com",
  projectId: "vue-citas",
  storageBucket: "vue-citas.appspot.com",
  messagingSenderId: "885151427958",
  appId: "1:885151427958:web:f15c37e0b3c7bb63a25e57"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');