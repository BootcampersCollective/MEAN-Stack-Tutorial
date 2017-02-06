var express       = require('express');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var debug         = require('debug')('expressApp');
var session       = require('express-session');
var http          = require('http');
var fs            = require('fs');
var app = module.exports = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.sessionMiddleware = session({ secret: 'ilovescotchscotchyscotchscotch', saveUninitialized: true, resave: true })
app.use(app.sessionMiddleware);
app.use(express.static(path.join(__dirname, 'public')));

// require('./config/passport-config') // Does this app use passport?
require('./routes/index');
require('./routes/api')
require('./routes/errorHandlers');


// app.set('port', process.env.PORT || 80);
// app.server = app.listen(app.get('port'), function() {
//   debug('Express server listening on port ' + app.server.address().port);
// });
http.createServer(app).listen(80)
