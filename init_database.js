var mysql = require('mysql');

var connectDatabase = function(cb){
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '12345678'
	});

	connection.connect(function(err) {
		if(err) {
			console.log('Ket noi ko thanh cong');
			cb(err);
		} 
		else {
			console.log('Ket noi thanh cong');
			var CREATE_DATABASE = 'CREATE DATABASE IF NOT EXISTS facebookdb';
			var CREATE_LOGIN_TABLE = 'CREATE TABLE IF NOT EXISTS facebookdb.loginTbl '+
			'(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
			' username VARCHAR(60) NOT NULL UNIQUE, '+
			' password VARCHAR(120) NOT NULL)';

			var CREATE_STATUS_TABLE = 'CREATE TABLE IF NOT EXISTS facebookdb.statusTbl '+
			'(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
			' userid INT NOT NULL, '+
			' content TEXT(65535) NOT NULL, '+
			' postDate VARCHAR(100) NOT NULL,'+
			' FOREIGN KEY (userid) REFERENCES facebookdb.loginTbl(id))';

			connection.query(CREATE_DATABASE, function(err, result){
				if (err) {
					console.log('ko tao dc database');
					cb(err);
				}
				else{
					connection.query(CREATE_LOGIN_TABLE, function (err, result) {
						if (err) {
							console.log('Ko tao dc bang login');
						}
						else{
							connection.query(CREATE_STATUS_TABLE, function(err, result){
								if(err){
									console.log('Ko tao dc bang status');
								}
								cb(err, connection);
							});
						}						
					});
				}
			});	
		}	
	});
};
module.exports = {
	connect: connectDatabase
}

