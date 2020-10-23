import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
