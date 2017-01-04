angular.module('pokeApp', [])
    .controller('pokeController', pokeCtrl);

pokeCtrl.$inject = ['$http']

function pokeCtrl($http) {

    var pCtrl = this;

    pCtrl.title = 'Poke People Picker'

    pCtrl.pokedex = [];
    pCtrl.pokemon = null;

    pCtrl.searchPoke = function () {
        var url = 'http://pokeapi.co/api/v2/pokemon/' + pCtrl.pokename
        console.log("looking for", pCtrl.pokename, 'at', url)
        $http.get(url)
            .then(function success(response) {
                console.log(response.data)
                pCtrl.pokemon = response.data
            },
            function failure(response) {
                console.log("ERROR", response)
                pCtrl.pokemon = "Not Found"
            })
    }

    function getPokedex() {
        console.log("making http request")
        $http.get('http://pokeapi.co/api/v2/pokedex/1')
            .then(function (response) {
                // console.log(res.data)
                pCtrl.pokedex = response.data.pokemon_entries
            },
            function failure(response) {
                console.log("ERROR", response)
            })
    }

    getPokedex();

}