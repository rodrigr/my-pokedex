<template>
  <div>
      <h1>{{myPokemons[$route.params.order].order}} {{myPokemons[$route.params.order].name}}</h1>
      <img :src="myPokemons[$route.params.order].sprites.front_default" alt="">
  </div>
</template>

<script>
import {mapState} from 'vuex';


export default {
    name: 'Detail',
    computed: {
        ...mapState(['myPokemons'])
    }
}
</script>

<style>

</style>