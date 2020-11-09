<template>
  <div>
      <img id="user-photo" :src="user.photoURL" alt="">
      <h1>{{user.displayName}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'UserInfo',
    computed: {
        ...mapState(['user'])
    }

}
</script>

<style>

#user-photo{
    width: 100px;
    border-radius: 50%;
}

</style>