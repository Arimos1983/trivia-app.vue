import { chuck } from './../services/ChuckService'


export const ChuckModule = {

    state:{
        randomJoke: [],
        jokeCategory: ''
    },
    getters:{
        getJoke(state)
        {
            return state.randomJoke
        }
    },
    mutations: {
        setJoke(state, joke) {
          state.randomJoke = joke;
        },
        setJokeCategory(state, jokeCategory) {
            state.jokeCategory = jokeCategory;
      }
    },
    actions: {

        async fetchRandomJoke(context, value) {
            let resolve = await chuck.getAll(value);
            context.commit("setJoke", resolve);
            return resolve;
        }


        // fetchRandomJoke(store, next) {
        //     chuck.getAll(store.state.jokeCategory).then((joke) => {
        //       store.commit('setJoke', joke);
        //       next();
        //     })
        //   }
    }

}