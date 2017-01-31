// This is a DUMMY CONTROLLER, used to demonstrate how the 
// coders.js model file might be used by an application's express controller/router handler.
// This is NOT the way we would really write a controller.
var Coders = require('./coders.js')

var express = require('express')
var app = express();

// Route handler for POST:/coder
// Typically, this would be
// app.post('/coder', function (req, res) {
//     var reqBodyObject = req.body;
//     ...

// we are short-cutting things here so we don't have to initiate a POST request via HTML, Postman or curl
// and can just run this by loading a simple URL
app.get('/newCoder', function (req, res) {
    // we are hard-coding this object as if this was the POST request.body
    var reqBodyObject = {
        name: 'Jill',
        developer: true,
        specialty: 'Getting Rich',
        abilityLevel: 9.5,  // 1-10
        language: 'Fowl'
    }

    // we call the makeCoder() method on the model and it will return a promise
    // which we can look at to see if the save() method completed successfully or not.
    Coders.makeCoder(reqBodyObject)
        .then(function (data) {
            console.log("makeCoder() Succeeded:", data)
            res.send("SUCCESS " + data.name + " was added")
        })
        .catch(function (data) {
            console.log("makeCoder() Failed:", data)
            res.send("ERROR" + data.errmsg)
        })
})

// Route handler for GET:/coder
app.get('/coder', function (req, res) {
    // we are hardcoding our query parameter as if it was the req.query.name and so on
    var reqParams = {
        name: 'Richard'
    }
    Coders.findCoder(reqParams, res)
})

// Route handler for DELETE:/coder
// app.delete('/user', function(req, res) {
//   ...
// })
app.get('/deleteCoder', function (req, res) {
    // we are hardcoding our query parameter as if it was the req.query.language and so on
    var reqParams = {
        language: 'Java'
    };
    Coders.removeCoder(reqParams)
    res.send("deleted")
})

// Route handler for PUT:/user
app.get('/updateUser', function (req, res) {
    var reqQueryParams = {
        name: 'Joe'
    };
    var reqUpdateParams = {
        Phone: '303'
    };
    Coders.changeCoder(reqQueryParams, reqUpdateParams)
    res.send("changed")
})
// Example: query={language:'Java', abilityLevel:/^[1-3]/i}  // using a regex
// Example: query={language:'Java', abilityLevel:{$lt:4}}  // same thing using mongoose's syntax - preferred

app.listen(8080, function (err) {
    if (err) {
        console.log("Server error:", err)
    } else {
        console.log("Server is up")
    }
})