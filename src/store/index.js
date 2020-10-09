import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myPokemons: {}
  },
  mutations: {
    insertPokemon(state,payload){
      state.myPokemons[payload.order] = payload.pokemon
    }
  },
  actions: {
  },
  modules: {
  }
})
