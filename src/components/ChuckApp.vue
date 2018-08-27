<template>
  <div >
    <div class="card-body">
        <p class="card-text" v-text="joke.value"></p>
        <input class="form-control mb-2" type="text" placeholder="Enter Joke Category..." @input="setCategory" />
        <a class="btn btn-primary" @click="getNewJoke" >Get Joke</a>
    </div>
  </div>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'
import store from './../store'
export default {
  name: 'ChuckApp',
  computed:{
      ...mapGetters({
          joke:'getJoke'
      })
  },
  methods:{
      ...mapActions([
        'setJokeCategory'
         ]),
        getNewJoke() 
        {
          store.dispatch('fetchRandomJoke', () => {});
        },
        setCategory(event)
        {
          this.setJokeCategory(event.target.value);
        }
  },
  beforeRouteEnter(to, from, next)
  {
    store.dispatch("fetchRandomJoke").then(() => {
      next();
    });
   
  }
  
}
</script>
