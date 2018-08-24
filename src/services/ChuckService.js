import Chuck from 'chucknorris-io'

class ChuckService{


    

    // Retrieve a random chuck joke
getRandomJoke().then(function (response) {
    // do stuff here
}).catch(function (err) {
    // handle error
});

// Retrieve a random chuck joke from the given category
client.getRandomJoke('dev').then(function (response) {
    // do stuff here
}).catch(function (err) {
    // handle error
});

// Retrieve a list of available joke categories
client.getJokeCategories().then(function (response) {
    // do stuff here
}).catch(function (err) {
    // handle error
});

// Free text search
client.search(searchTerm).then(function (response) {
    // do stuff here
}).catch(function (err) {
    // handle error
});

}

export default client
