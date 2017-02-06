var express = require('express');
var router  = express.Router();
var app     = require('../app')
var path    = require('path')
var request = require('request')
var Nightmare = require('nightmare');


// simple function to randomly shuffle arrays
var shuffle = function(array) {
    var counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}


var finish = function(results, req, res){
    // console.log('results? ', results)
    var allIpsum = []
    for ( var key in results ) {
        if ( key !== 'ready' ) {
            results[key] = shuffle(results[key].split(' '))
        }
    }
    while ( allIpsum.length < 100 ) {
        for ( var key in results ) {
            if ( key !== 'ready' ) {
                allIpsum.push(results[key].pop())
            }
        }
    }

    allIpsum[0] = allIpsum[0].split('')
    allIpsum[0][0] = allIpsum[0][0].toUpperCase()
    allIpsum[0] = allIpsum[0].join('')
    allIpsum = allIpsum.join(' ')
    if ( allIpsum[allIpsum.length-1] !== '.' ) {
        allIpsum += '.'
    }
    res.send(allIpsum)
}

var areWeDoneYet = function(results, req, res){
    if ( --results.ready === 0 ){
            finish(results, req, res)
    }
}

var scrapers = {

    cupcakeIpsum : function(results, req, res){
        var nightmare = Nightmare({ show: true });
        nightmare
            .goto('http://cupcakeipsum.com')
            .click('#generate_button')
            .wait('#cupcake_ipsum p')
            .evaluate(function () {
                return document.querySelector('#cupcake_ipsum p').innerText
            })
            .end()
            .then(function(value){
                console.log(value)
                results.cupcakeIpsum = value
                areWeDoneYet(results, req, res)
            })
            .catch(function (error) {
                console.error('Search failed:', error);
            });
       
    },
    cheeseIpsum : function(results, req, res){
        var nightmare = Nightmare({ show: true });
        nightmare
            .goto('http://www.cheeseipsum.co.uk/')
            .click('#generate')
            .wait('#output')
            .evaluate(function () {
                return document.querySelector('#output').innerText
            })
            .end()
            .then(function(value){
                console.log(value)
                results.cheeseIpsum = value
                areWeDoneYet(results, req, res)
            })
            .catch(function (error) {
                console.error('Search failed:', error);
            });

    },
    hipsterIpsum : function(results, req, res){
        var nightmare = Nightmare({ show: true });
        nightmare
            .goto('http://hipsum.co/?paras=4&type=hipster-centric')
            .evaluate(function () {
                return document.querySelector('.hipsum').innerText
            })
            .end()
            .then(function(value){
                console.log('hipster value: ', value)
                results.hipsterIpsum = value
                areWeDoneYet(results, req, res)
            })
            .catch(function (error) {
                console.error('Search failed:', error);
            });

    },
    baconIpsum : function(results, req, res){
        request.get('https://baconipsum.com/api/?type=meat-and-filler&format=text', function(err,data){
            results.baconIpsum = data.body
            areWeDoneYet(results, req, res)
        })
    }

}


router.post('/api/mixsomeipsum', function(req, res){
    var results = { ready : null }
    var jobs = []
    for ( var key in req.body ) {
        if ( !!+req.body[key] ) { // is req.body.key > 0?
            jobs.push(scrapers[key])
        }
    }
    results.ready = jobs.length
    for ( var job = 0; job < jobs.length; job++ ){
        jobs[job](results, req, res)
    }
})

app.use('/', router)