// refer to the angular module we created and chain on a controller
angular.module('pokemonApp')
    .controller('pokemonController', pokemonFunction);

pokemonFunction.$inject = ['$http'];

function pokemonFunction($http) {
    var pCtl = this;

    pCtl.heading = 'Pokemon for Hire';
    pCtl.pokemon = [];

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

    pCtl.getPokemon = function(){
        // GET:/pokemon?poke=bulbasaur
        console.log("GET: ", pCtl.pokeName)
        $http.get('/pokemon?poke='+pCtl.pokeName).then(
            function success(response) {
                pCtl.pokemon = response.data;
                console.log("Returned:", pCtl.pokemon)
            }, function failure(response) {
                console.log("GET:/pokemon?poke= error:", response)
            }
        )
    }

    pCtl.apply = function() {

    }

}