<template>
  <div class="miniatura">
    <template v-if="pokeInfo != null">
      <template v-if="!landscape">
        <router-link :to="'/detail/' + pokeInfo.order">
        <div class="pokeInfo">
          <div>
            <img src="../assets/pokeball.png" alt="pokeball" class="pokeball" />
            {{ pokeInfo.order }}
          </div>
          <div>
            <img
              class="pokemon-thumb"
              v-bind:src="pokeInfo.sprites.front_default"
              :alt="pokeInfo.name"
            />
             
          </div>
        </div>
      </router-link>
      </template>
      <template v-else>
        <div class="pokeInfo" @click="changeOrder(pokeInfo.order)">
          <div>
            <img src="../assets/pokeball.png" alt="pokeball" class="pokeball" />
            {{ pokeInfo.order }}
          </div>
          <div>
            <img
              class="pokemon-thumb"
              v-bind:src="pokeInfo.sprites.front_default"
              :alt="pokeInfo.name"
            />
             
          </div>
        </div>
      </template>
      
      <!-- <b-modal v-bind:id="'modal-' + pokeInfo.order">
        <h1>{{pokeInfo.order}} {{pokeInfo.name}}</h1>
        <img :src="pokeInfo.sprites.front_default" alt="">
      </b-modal> -->
    </template>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Miniatura",
  props: ["nombre", "url"],
  data: function () {
    return {
      pokeInfo: null,
    };
  },
  computed: {
    ...mapState(['landscape'])
  },
  methods: {
    ...mapMutations(["insertPokemon",'changeOrder']),
    getPokemonInfo(api) {
      fetch(api)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((json) => {
          this.pokeInfo = json;
          this.insertPokemon({ order: json.order, pokemon: json });
        });
    },
  },
  created() {
    this.getPokemonInfo(this.url);
  },
  // updated() {
  //   this.getPokemonInfo(this.url);
  // },
};
</script>

<style scoped lang="scss">
.pokeball {
  width: 20px;
}

.pokeInfo {
  background: whitesmoke;
  border: 2px solid black;

  .pokemon-thumb {
    width: 50px;
    height: 50px;
  }

  h1{
    color: black;
  }
}
</style>