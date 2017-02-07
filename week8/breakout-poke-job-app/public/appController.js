// refer to the angular module we created and chain on a controller
angular.module('pokemonApp')
    .controller('pokemonController', pokemonFunction);

pokemonFunction.$inject = ['$http'];

function pokemonFunction($http) {
    var pCtl = this;

    // we start with no pokemon selected, so we hide the job application form
    pCtl.selected = false;

    pCtl.heading = 'Pokemon for Hire';
    pCtl.pokemon = [];

    // initialize a list of the first 20 pokemon
    function pokeList() {
        // GET:/pokemon
        $http.get('/pokemon').then(
            function ifItComesBackSuccessfully(response){
                console.log("DBG:", response)
                pCtl.pokemonArray = response.data;
            }, 
            function ifItFailsMiserablyAlongTheWay(response) {
                console.log("GET:/pokemon error:", response)
            })
    }
    pokeList();

    // select a single pokemon and get more detailed info
    // use that detailed info to start populating a job application
    pCtl.getPokemon = function(){
        // GET:/pokemon?poke=bulbasaur
        console.log("GET: ", pCtl.pokeName)
        $http.get('/pokemon?poke='+pCtl.pokeName).then(
            function success(response) {
                // once we set pCtl.pokemon with updated data, that info
                // is immediately carried forward into our job application form
                pCtl.pokemon = response.data;
                console.log("Returned:", pCtl.pokemon)
            }, function failure(response) {
                // here we do nothing if we can't find the selected pokemon, 
                // but in reality we'd probably put up an alert or otherwise
                // notify the user that that pokemon doesn't exist in our database
                console.log("GET:/pokemon?poke= error:", response)
            }
        )
        // this will un-hide the job application form
        pCtl.selected = true;
    }

    // submit a job application and apply for the job!
    // take the additional information from the form and save it all to the database
    pCtl.apply = function() {
        // put takes a second argument that is the data that we want to use to update the database
        console.log("PUT:", pCtl.pokeName);
        $http.put('/pokemon', pCtl.pokemon).then(
            function success(response) {
                console.log("Updated:", pCtl.pokemon)
                // if the update was successful, clear the selected name and hide the application form
                pCtl.pokeName = '';
                pCtl.selected = false;
            }, 
            function failure(response) {
                // we do nothing here, but in reality we would probably put up an 
                // alert or otherwise notify the user that the update failed.
                console.log("PUT:/pokemon error:", response)
            }
        )
    }

}