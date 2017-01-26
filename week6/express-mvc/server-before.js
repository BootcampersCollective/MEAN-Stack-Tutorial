
var express = require('express'),
	PORT = process.env.PORT || 3000,
	logger = require('morgan')('dev'),
	app = express();

app.use(logger);

// http://localhost:3000/*
app.get('*', function (req, res, next) {
	console.log(req.method, req.path)
	next();
});

// http://localhost:3000/api/*
app.get('/api*', function (req, res, next) {
	console.log("checking api stuff...")
	next();
});

var Users = [{
	name: "Billy Bob", // String
	age: 30, // Integer,
	email: 'billybobbery@email.com',
	createdAt: 14598756847 // Integer
}, {
	name: "Jimmy John", // String
	age: 50, // Integer
	email: 'jimmyjohnery@email.com', // String
	createdAt: 14598756847 // Integer
}, {
	name: "Mary Sue", // String
	age: 34, // Integer
	email: 'marysue@email.com', // String
	createdAt: 14598756847 // Integer
}, {
	name: "Ellie May", // String
	age: 15, // Integer
	email: 'elliemay@email.com', // String
	createdAt: 14598756847 // Integer
}];

// http://localhost:3000/dashboard/*
app.get('/dashboard*', function (req, res, next) {
	console.log('Checking dashboard stuff...');
	next();
});

// http://localhost:3000/api
app.get('/api', function (req, res) {
	res.json({
		path: 'api-root',
		message: "No action to take"
	});
});

// http://localhost:3000/dashboard
app.get('/dashboard/profile', function (req, res) {
	res.send('Dashboard profile');
});

var UsersfindAll = function () {
	return Users;
}
var UsersfindOne = function (index) {
	return Users[index];
}

// http://localhost:3000/api/users
app.get('/api/users', function (req, res) {
	res.json(UsersfindAll());
});

app.listen(PORT, function (err) {
	if (err) {
		console.log('Our MVC Server failed!', err)
	} else {
		console.log('Our MVC Server is up! On PORT:', PORT)
	}
});

// http://localhost:3000/api/user?id=1
app.get('/api/user', function (req, res) {
	var user = UsersfindOne(req.query.id);

	if (user) {
		res.json(user)
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

// http://localhost:3000
app.get('/', function (req, res) {
	res.sendFile('index.html', { root: './public' });
});
