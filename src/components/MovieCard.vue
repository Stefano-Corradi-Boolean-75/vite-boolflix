<script>

import { getPathImage } from '../assets/data/functions'

export default {
  name: 'MovieCard',
  data(){
    return{
      flags: ['en','it'],
      getPathImage
    }
  },
  props:{
    card: Object
  },
  computed:{
    rating(){
      return Math.ceil(this.card.vote_average / 2);
    }
  }
}
</script>

<template>

<div class="sc-card">

  <div class="inner">

    <div class="front">
      <img class="poster"
       v-if="card.poster_path"
       :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`" :alt="card.title || card.name">
      <div v-else>
        <h3>{{card.title || card.name}}</h3>
        <img class="placeholder"  src="https://www.diegogiusti.it/wp-content/uploads/2020/06/placeholder.png" :alt="card.title || card.name">
      </div>
    </div>
    <div class="back">
      <h2>{{card.title || card.name}}</h2>
      <h5>{{card.original_title || card.original_name}}</h5>
      <div>
        <div class="flag">
          <img v-if="flags.includes(card.original_language)" 
            :src="getPathImage(card.original_language)" :alt="card.original_language">
          <p v-else>Lingua: {{card.original_language}}</p>
        </div>
      </div>
      <div>
        <i
          v-for="(n, index) in 5"
          :key="index"
          class="fa-star"
         :class="index < rating ? 'fa-solid' : 'fa-regular' "></i>
      </div>
      <p class="overview">{{card.overview}}</p>
    </div>
   
<!-- <div> - {{ card.title || card.name }} - </div> -->
  </div>

</div>

  
</template>


<style lang="scss" scoped>
.sc-card{
  width: 300px;
  height: 450px;
  padding: 10px;
  .inner{
    position: relative;
    background-color: black;
    height: 100%;
    overflow: hidden;
    &:hover{
      img.poster,
      img.placeholder{
        transform: scale(1.1);
        opacity: .3;
      }
      .back{
        top:0;
      }
    }
    .front{
      height: 100%;
      h3{
        padding: 15px;
        text-align: center;
      }
      img.poster{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .5s;
      }
      img.placeholder{
        width: 100%;
        transition: all .5s;
      }
    }
    .back{
      position: absolute;
      display: flex;
      flex-direction: column;
      top:100%;
      left:0;
      padding: 10px;
      height: 100%;
      transition: all .5s;
      .overview{
        overflow: auto;
      }
    }
    .flag img{
      width: 30px;
    }
    .fa-star{
      padding: 10px 0;
    }
  }
}
</style>