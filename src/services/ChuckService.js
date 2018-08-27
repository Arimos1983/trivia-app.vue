const Chuck = require("chucknorris-io"),
client = new Chuck();

 export default class ChuckJokse {


  getAll(value) {
    return client.getRandomJoke(value)
  }


}


export const chuck = new ChuckJokse();