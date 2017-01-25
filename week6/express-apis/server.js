// require all of our node module dependencies
var express = require('express')
var request = require('request')

// create our express app object
var app = express()

var logger = require('morgan')
app.use(logger('dev'))
// require('morgan')('dev')  // this does the same thing in a single line

// set our PORT, based on the process environment if available
var PORT = process.env.PORT || 8080

// handle our root route - do a simple test to make sure we are working
app.get('/', function (req, res) {
    res.send('This is working')
})

// given an album name, return the tracks on that album
// GET:/tracks?albumName=graduation
app.get('/tracks', function (req, res) {
    // request(URL, callback) takes the parameters for the API URL and a callback function
    // this API call will return result=[{album, track, lyrics}...]
    request(`http://kanyerest.xyz/api/album/${req.query.albumName}`, function (err, response, body) {
        var parseBody = JSON.parse(body)
        // response.result is an array of objects with {album, title, lyrics}
        // map the list of albums to be a list of album titles
        var tracks = parseBody.result.map(function (album) {
            return album.title
        })

        // or
        // loop through the result and build a new array of just track titles
        // var tracks = [];
        // for (var i = 0; i < parseBody.result.length; i++) {
        //     tracks.push(parseBody.result[i].title)
        // }

        // console.log(tracks)
        res.send(tracks)

    })
})

// given a track name, we want to return the name of the album that track is on
// GET:/album?trackName=champion
app.get('/album', function (req, res) {
    // request(URL, callback) takes the parameters for the API URL and a callback function
    // this API call will return result={album, track, lyrics}
    request(`http://kanyerest.xyz/api/track/${req.query.trackName}`, function (err, response, body) {
        var parseBody = JSON.parse(body)
        // response.result is an array of objects with {album, title, lyrics}
        var albumName = parseBody.album
        // console.log("parse:", parseBody)
        // console.log(albumName)
        res.send(albumName)
    })
})

// given a word, return how many times it appears in Kanye's lyrics
// GET:/wordCount?word=WORD
app.get('/wordCount', function (req, res) {
    // request(URL, callback) takes the parameters for the API URL and a callback function
    // this API call will return result={album, track, lyrics}
    request(`http://kanyerest.xyz/api/counter`, function (err, response, body) {


        // Interesting that this API, if you give it a bad URL path, returns an html 404 page
        // in the body instead of setting the 'err' argument.
        // Typically we might expect just an error string in the err argument.
        // if (err) {
        //     // err is always null, so this way of handling an error will not work!
        //     console.log('ERROR:',err)
        // }
        // Instead, you would have to analyze the body string to determine if it is
        // a string in json format, or a string html 404 message.  Not nice...


        var parseBody = JSON.parse(body)
        // response.result is an object that looks like { word:count, word:count, ... }
        var wordcount = parseBody[req.query.word]
        res.send(req.query.word + ' appears ' + wordcount + ' times')
    })
})

// set up the http server listener
app.listen(PORT, function (err) {
    if (err) {
        // if there is an error, put out an error message and exit with a non-normal status
        console.log("Server failed:", err)
        process.exit(1);
    }
    // server looks good!
    console.log('Server is up on port', PORT)
})
