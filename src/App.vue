<template>
  <div id="app">
     
    <div class="wrapper">
     
      <div class="red"></div>
      <div class="black">
        <!-- <img src="./assets/my_pokedex_logo.png" alt="logo" id="logo"> -->
        <Navegador />
        <div class="circle left"></div>
        <div class="circle right"></div>
      </div>
      <div class="red"></div>
    </div>

    <div class="main-view">
        <router-view/>
    </div>
  </div>
  
</template>

<script>
import Navegador from './components/Navegador.vue'
import {mapMutations} from 'vuex'

export default {
  name: 'App',
  components: {
    Navegador
  },
  methods:{
    ...mapMutations(['listenResize'])
  },
  beforeMount(){
    this.listenResize()
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}



body{
  margin: 0;
}

.main-view{
  position: absolute;
  z-index: 999;
  width: 85%;
  height: 60vh;
  background-image: url("assets/cuadricula.png");
  border-radius: 2em;
}

.wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;

  div{
    height: 100%;

    &.red{
      background: #cc0000;
      width: 15%;
    }

    &.black{
      background: #212121;
      width: 70%;
      position: relative;

      // #logo{
      //   width: 150px;
      //   margin-top: 1.5em;
      // }

      

      .circle{
        background: #00ca20;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        bottom: 1.3em;
        z-index: 1;

        &.left{
          left: 1.5em;
        }

        &.right{
          right: 1.5em;
        }
        
      }
    }
  }
}

</style>
