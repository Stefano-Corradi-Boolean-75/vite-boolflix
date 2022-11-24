<script>

import {store} from '../assets/data/store'

export default {
  name: 'AppHeader',
  data(){
    return {
      store
    }
  }
}
</script>

<template>
  <header class="d-flex justify-content-between p-3">

    <div class="logo">
      <img src="../assets/img/logo-boolflix.png" alt="">
    </div>

    <div class="d-flex">
      <input
      @keyup.enter="$emit('search')"
      v-model.trim="store.apiParams.query"
      class="form-control"
     type="text" placeholder="Cerca un film">

     <select
     v-model="store.type"
     @change="$emit('search')"
      class="form-select ms-3" >
        <option value="">All</option>
        <option value="movie">Film</option>
        <option value="tv">Serie Tv</option>
      </select>

    </div>
    

  </header>
</template>


<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

header{
  height: 70px;
  background-image: linear-gradient(black, $bg-color);
  .logo{
    img{
      width: 150px;
    }
  }
  input{
    min-width: 400px;
  }
}
</style>