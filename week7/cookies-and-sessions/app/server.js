var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()

app.use(cookieParser())


app.get('/', function(req, res){
    //console.log(req.headers.cookie)
    //res.set('set-cookie', 'foo=bar&stuff=things')
    console.log(req.cookies) // the cookie-parser middleware gives us access to req.cookie
    res.cookie('foo', 'bar', {httpOnly: true}) // this cookie can be accessed in the http headers, but not from javascript
    res.cookie('stuff', 'things')
    res.send('<h1>Some HTML</h1>')
})


app.get('/temp-cookie', function(req, res){
    res.cookie('temp-cookie', 'temp-value', {maxAge: 5000})
    //res.cookie('temp-cookie', 'temp-value', {maxAge: 1000 * 60 * 60 * 24 * 14})//max-age of 2 weeks
    res.send('set temp cookie')
})


var sessions = {}
app.get('/session', function(req, res){
    console.log("cookies: ", req.cookies)
    console.log("sessions: ", sessions)
    if ( !req.cookies.login || !sessions[req.cookies.login]){
	var login = Math.random()
	sessions[login] = { created: new Date() }
	res.cookie('login', login, {httpOnly:true})
	res.send(`<h1>Welcome to the site. You session was created at ${sessions[login].created}</h1>`)
    }
    else {
	if (!sessions[req.cookies.login].viewCount){
	    sessions[req.cookies.login].viewCount = 1
	}
	else { sessions[req.cookies.login].viewCount++ }
	res.send(`<h1>You've been logged in since ${sessions[req.cookies.login].created}</h1>`)
    }
})
	



app.listen(3000)
