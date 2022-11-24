import {reactive} from 'vue'

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  tv: [],
  movie: [],
  type: '',
  apiParams:{
    api_key: '1b3eb153fce73eb6b953f7d515b2dc1d',
    query: '',
    language: 'it-IT'
  }
});