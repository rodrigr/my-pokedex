<template>
  <div id="pokedex">
      <div v-for="(p,index) in pokemon" :key="index">
          <Miniatura :nombre="p.name" />
      </div>
  </div>
</template>

<script>
import Miniatura from '../components/Miniatura.vue'

export default {
    name: 'Pokedex',
    data: function(){
        return {
            pokemon: [],
            next: null,
            previous: null,
        }
    },
    components: {
        Miniatura
    },
    methods: {
        getData: async function(api){
                let promise = await fetch(api)
                let isOk = promise.ok
                let json;
                if(isOk){
                    json = await promise.json()
                }else{
                    alert(promise.status)
                    return 0;
                }
                this.pokemon = json.results
                this.next = json.next
                this.previous = json.previous
        },
        getNext: function(){
            if(this.next != null){
                this.getData(this.next)
            }else{
                alert("no more pokemon")
            }
        },
        getPrevious: function(){
            if(this.previous != null){
                this.getData(this.previous)
            }else{
                alert("no more pokemon")
            }
            
        }
    },
    beforeMount(){
        this.getData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=12')
    }
}
</script>

<style>

</style>