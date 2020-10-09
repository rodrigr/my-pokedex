<template>
  <div id="pokedex">
      <div class="grid">
        <div v-for="(p,index) in pokemon" :key="index">
          <Miniatura :nombre="p.name" :url="p.url" />
        </div>
      </div>
      <div class="panel">
          <div @click="getPrevious()">
              <svg width="65px" height="65px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
          </div>
          <div @click="getNext()">
              <svg width="65px" height="65px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
          </div>
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

<style scoped>
    .grid{
         display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(4,1fr);
        height: 80%;
    }

    .panel{
        background: #3b4cca;
        display: flex;
        justify-content: space-between;
        color: #cc0000;
        height: 20%;
    }
</style>