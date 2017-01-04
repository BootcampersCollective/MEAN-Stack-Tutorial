angular.module('pokeApp', [])
    .controller('pokeController', pokeCtrl);

pokeCtrl.$inject = ['$http']

function pokeCtrl($http) {

    var pCtrl = this;

    pCtrl.title = 'Poke People Picker'

    pCtrl.pokedex = [];
    pCtrl.pokemon = null;

    pCtrl.searchPoke = function() {
        var url = 'http://pokeapi.co/api/v2/pokemon/'+pCtrl.pokename
        console.log("looking for", pCtrl.pokename, 'at', url)
        $http.get(url)
        .then(function(response, error){
            if (error) {
                console.log("ERROR", error)
                pCtrl.pokemon = "Not Found"
            }
            console.log(response.data)
            pCtrl.pokemon = response.data
        }) 
    }

    function getPokedex() {
        console.log("making http request")
        $http.get('http://pokeapi.co/api/v2/pokedex/1')
            .then(function(res,err){
                if (err) {
                    console.log("ERROR", err)
                }
                // console.log(res.data)
                pCtrl.pokedex = res.data.pokemon_entries
            })
    }

    getPokedex();

}