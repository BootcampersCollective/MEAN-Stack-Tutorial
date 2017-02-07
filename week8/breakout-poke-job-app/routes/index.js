var request = require('request');
var express = require('express');
var bodyParser = require('body-parser')
var PokeApplicant = require('../models/pokemonModel.js')

// export all of the routes that we will use to the server
module.exports = function (app) {

    // our public static route for all our miscellaneous files
    app.use(express.static('./public'));

    // add our body-parser middleware to parse the pokemon API body response
    app.use(bodyParser.json());

    // GET: / (root route)
    app.get('/', function (req, res) {
        res.sendFile('index.html', { root: './public' });
    });

    // GET: /pokemon (get a list of all pokemon)
    // GET: /pokemon?poke=bulbasaur (get detail on a single pokemon)
    app.get('/pokemon', function (req, res) {
        console.log("Request:", req.query)
        if (req.query.poke == null) {
            // go to the pokemon api and retrieve a list of pokemon
            //https://pokeapi.co/api/v2/pokemon/
            request('https://pokeapi.co/api/v2/pokemon/', function (err, response, body) {
                var myBody = JSON.parse(body); // parse the API response string into an object
                console.log("GET /pokemon:", myBody)
                console.log("TYPE:", typeof myBody);// see if our body parser is working and converting our string to an object
                res.json(myBody.results);
            });
        } else {
            var pokename = req.query.poke;
            //https://pokeapi.co/api/v2/pokemon?poke=pokename
            request('https://pokeapi.co/api/v2/pokemon/' + pokename, function (err, response, body) {
                var myBody = JSON.parse(body); // parse the API response string into an object
                console.log("GET /pokemon/" + pokename + ":", myBody)
                console.log("TYPE:", typeof myBody);// see if our body parser is working and converting our string to an object
                var poke = {
                    name: myBody.name,
                    sprite: myBody.sprites.front_default,
                    weight: myBody.weight,
                    height: myBody.height,
                    experience: myBody.base_experience
                };
                // create a database document based on our poke object
                var pokeGuy = new PokeApplicant(poke);
                pokeGuy.save(function (err) {
                    if (err) {
                        console.log("Database save() error:", err);
                    } else {
                        console.log("Database save() successful")
                    }
                });
                res.json(poke);
            });
        }
    });


}