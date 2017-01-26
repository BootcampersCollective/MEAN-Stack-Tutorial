var logger = require('morgan')('dev');
var usersModel = require('../models/users.js')

module.exports = function (app) {
    // CONTROLLER/ROUTE HANDLING
    app.use(logger);

    // http://localhost:3000/*
    app.get('*', function (req, res, next) {
        console.log(req.method, req.path)
        next();
    });

    // http://localhost:3000
    app.get('/', function (req, res) {
        res.sendFile('index.html', { root: './public' });
    });

    // grabbing api routes
    // GET: /api*
    // http://localhost:3000/api/*
    app.get('/api*', function (req, res, next) {
        console.log("checking api stuff...")
        next();
    });

    app.get('/api', function (req, res) {
        res.json({
            route: 'api',
            dataType: 'string'
        })
    })

    // http://localhost:3000/api/users
    app.get('/api/users', function (req, res) {
        res.json(usersModel.UsersfindAll());
    });

    // http://localhost:3000/api/user?id=1
    app.get('/api/user', function (req, res) {
        var user = usersModel.UsersfindOne(req.query.id);

        if (user) {
            res.json(user.name)
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    });


    // http://localhost:3000/dashboard
    app.get('/dashboard', function (req, res) {
        res.send('Dashboard home route');
    });

    // http://localhost:3000/dashboard/*
    app.get('/dashboard/*', function (req, res, next) {
        console.log('Checking dashboard stuff...');
        next();
    });

    // http://localhost:3000/dashboard
    app.get('/dashboard/profile', function (req, res) {
        res.send('Dashboard profile');
    });

}