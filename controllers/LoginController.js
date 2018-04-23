var express = require('express');
var router = express.Router();

router.post('/login',function(request, response){

	console.log(request.body);
	if (request.body.username  && request.body.password) 
	{
		var SELECT_USER = 'SELECT * FROM facebookdb.loginTbl WHERE username= "'+request.body.username+'" AND password="'+request.body.password+'"';
		connection.query(SELECT_USER, function(err, result){
			if (result.length===1) {
				request.session.user = result[0].id;
				request.session.username = result[0].username;
				response.redirect('/home');
			}
			else{
				response.redirect('/');
			}
		});
	}
	else{
		response.redirect('/');
	}
});
router.post('/register',function(request, response){
	console.log(request.body);
	if(request.body.ten && request.body.pass){
		var INSERT_USER = 'INSERT INTO facebookdb.loginTbl VALUES(NULL, "'+request.body.ten+'","'+request.body.pass+'")';
		connection.query(INSERT_USER, function(err, result){
			if (err) {
				response.redirect('/');
			}
			else{
				response.redirect('/home');
			}
		});
	}				
});

router.get('/logout', function(request, response){
	request.session.destroy();
	response.redirect('/');
});

module.exports = router;