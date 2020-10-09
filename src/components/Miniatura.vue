<template>
  <div class="miniatura">
    <router-link :to="'/detail/' + pokeInfo.order">
      <template v-if="pokeInfo != null">
      <div class="pokeInfo">
        <div><img src="../assets/pokeball.png" alt="pokeball" class="pokeball"> {{pokeInfo.order}}</div>
        <div>
          <img v-bind:src="pokeInfo.sprites.front_default" :alt="pokeInfo.name">
        </div>
      </div>
    </template>
    </router-link>
    
     
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    name: 'Miniatura',
    props: ['nombre', 'url'],
    data: function(){
      return{
        pokeInfo: null
      }
    },
    methods:{
      ...mapMutations(['insertPokemon']),
      getPokemonInfo(api){
        fetch(api)
        .then(res => {
          if(res.ok){
            return res.json()
          }
        })
        .then(json => {
          this.pokeInfo = json
          this.insertPokemon({order: json.order,pokemon: json})
        })
      }
    },
    created(){
      this.getPokemonInfo(this.url)
    },
    updated(){
      this.getPokemonInfo(this.url)
    }
}
</script>

<style scoped lang="scss">
  .pokeball{
    width: 20px;
  }

    .pokeInfo{
      background: whitesmoke;
      border: 2px solid black;
    }
</style>