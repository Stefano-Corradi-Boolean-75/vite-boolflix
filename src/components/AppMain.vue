<script>

import {store} from '../assets/data/store'

import MovieCard from './MovieCard.vue'

export default {
  name: 'AppMain',
  components:{
    MovieCard
  },
  data(){
    return{
      store
    }
  },
  props:{
    title: String,
    type: String
  }
}
</script>

<template>
  <h1 class="container">
      {{title}}
    </h1>

    <div class="container d-flex flex-wrap">

      <MovieCard :card="card" v-for="card in store[type]" :key="card.id"/>
   
    </div>
</template>


<style lang="scss" scoped>

</style>