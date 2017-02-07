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
                var pokeDB = new PokeApplicant(poke);
                pokeDB.save(function (err) {
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

    // PUT:/pokemon
    app.put('/pokemon', function(req, res) {
        var pokemon = req.body;     // updated html input pokemon
        console.log("PUT ", pokemon);
        PokeApplicant.findOneAndUpdate({name:pokemon.name}, 
            pokemon, {upsert:true}, 
            function(err, doc){
                console.log("PUT2 ", doc)
                if (err) {
                    return res.send(500, { error: err });
                } else {
                    return res.send("succesfully saved");
                }
            });
        // PokeApplicant.find({name:pokemon.name}).then(
        //     function foundIt(data) {
        //         var pokeDB = data;  // our existing database pokemon
        //         console.log("PUT2 ", pokeDB);
        //         pokeDB.upsert(pokemon, function(err) {
        //             if (err) {
        //                 console.log("Failed to update")
        //                 console.log("PUT3 ", pokeDB);
        //                 res.status(500).send("Couldn't update")
        //             } else {
        //                 console.log("Update succeeded")
        //                 res.send("Update successful")
        //             }
        //         })
        //     }, 
        //     function failure(data) {
        //         res.status(500).send("Couldn't find him")
        //     }
        // )
    })


}