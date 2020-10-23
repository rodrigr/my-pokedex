<template>
  <div>
      <template v-if="!landscape">
          <h1>{{myPokemons[$route.params.order].order}} {{myPokemons[$route.params.order].name}}</h1>
        <img :src="myPokemons[$route.params.order].sprites.front_default" alt="">
      </template>
      <template v-else>
          <h1>{{myPokemons[order].order}} {{myPokemons[order].name}}</h1>
            <img :src="myPokemons[order].sprites.front_default" alt="">
      </template>
  </div>
</template>

<script>
import {mapState} from 'vuex';


export default {
    name: 'Detail',
    props: ['order'],
    computed: {
        ...mapState(['myPokemons','landscape'])
    }
}
</script>

<style>

</style>