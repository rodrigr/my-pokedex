import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    myPokemons: {},
    msg: 'Hello Pokedex',
    landscape: window.matchMedia("(min-width: 600px)").matches,
    selectedOrder: null
  },
  mutations: {
    insertPokemon(state,payload){
      state.myPokemons[payload.order] = payload.pokemon
    },
    changeMsg(state,payload){
      state.msg = payload.a + ' ' +  payload.b
    },
    listenResize(state){
      window.addEventListener(
        "resize",
        () => (state.landscape = window.matchMedia("(min-width: 600px)").matches)
      );
    },
    changeOrder(state,payload){
      state.selectedOrder = payload
    },
    listenUser(state){
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          state.user = user
        } else {
          state.user = null
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
