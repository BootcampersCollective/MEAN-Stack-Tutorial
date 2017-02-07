angular.module('pokemonApp')
    .controller('pokemonController', pokemonFunction)

function pokemonFunction() {
    var pCtl = this;

    pCtl.heading = 'Pokemon for Hire'
}