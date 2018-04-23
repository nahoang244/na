var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var initDatabase = require('./init_database.js');

initDatabase.connect(function(err, connection){
	if (err) process.exit();
	else{
			global.connection = connection;
			var app = express();
			/*app.get('/', function(request, response){
			response.sendFile('static/facebook.html',
				{root:__dirname});
			});

			app.get('/stylefb.css', function(request, response){
			response.sendFile('static/stylefb.css',
				{root:__dirname});
			});

			app.get('/fb.png', function(request, response){
			response.sendFile('static/fb.png',
				{root:__dirname});
			});

			app.get('/fb3.png', function(request, response){
			response.sendFile('static/fb3.png',
				{root:__dirname});
			});

			app.get('/fb8.png', function(request, response){
			response.sendFile('static/fb8.png',
				{root:__dirname});
			});
			app.get('/home', function(request, response){
			response.sendFile('static/home.html',
				{root:__dirname});
			});

			app.get('/home.css', function(request, response){
			response.sendFile('static/home.css',
				{root:__dirname});
			});*/
			app.use(session({
				secret: 'asdfghjkl',
				resave: true,
				saveUninitialized: true
			}));

			app.use(function (request, response, next) {
				console.log('co request den server', request.url, request.session.username);
				next();
			});
			app.use(express.static(path.join(__dirname,'./static')));

			app.use(bodyParser.json());
			app.use(bodyParser.urlencoded({extended:false}));

			app.use(require('./controllers/LoginController'));
			app.use(require('./controllers/PostController'));

			app.listen(1997,function(err){
			//console.log(err);
			console.log('server dang chay');
			});
	}
});

