import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAGr2oedEUg7UgKeOuj8sZ9rhSVjRJ4RPg",
  authDomain: "pokedex-ws.firebaseapp.com",
  databaseURL: "https://pokedex-ws.firebaseio.com",
  projectId: "pokedex-ws",
  storageBucket: "pokedex-ws.appspot.com",
  messagingSenderId: "892171418974",
  appId: "1:892171418974:web:692437bc65d2152fd5e3cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
