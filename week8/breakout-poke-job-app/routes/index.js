var request = require('request');
var express = require('express')

module.exports = function(app) {

    app.use(express.static('./public'))

    // GET: / (root route)
    app.get('/', function(req, res) {
        res.sendFile('index.html', {root:'./public'})
    });

    // GET: /pokemon
    app.get('/pokemon', function(req, res) {
        // go to the pokemon api and retrieve a list of pokemon
        //https://pokeapi.co/api/v2/pokemon/
        request('https://pokeapi.co/api/v2/pokemon/', function(err, response, body){
            res.json(body.results)
        })
    })
}