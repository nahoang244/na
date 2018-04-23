var express = require('express');
var router = express.Router();


router.post('/status', function(request, response){
	if (!request.session.user){
		return response.redirect('/home');
	}
	if (request.body.content){
		var INSERT_STATUS = 'INSERT INTO facebookdb.statusTbl VALUES(NULL, "' +  request.session.user + '", "'+request.body.content+'", "'+(new Date()).toISOString()+'")';
		connection.query(INSERT_STATUS, function(err, result){
			response.redirect('/home');	
		});
	}
	else{
		response.redirect('/home');
	}
});

router.get('/status', function(request, response){
	if(!request.session.user)
		return response.json({success: false});

	var READ_STATUS = 'SELECT * FROM facebookdb.statusTbl WHERE userid =' + request.session.user + '';
		connection.query(READ_STATUS, function(err, result){
			if (err) return response.json({success: false});
				return response.json({success: true, result: result});
		});
});

module.exports = router;