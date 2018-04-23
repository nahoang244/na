
var showDialog = function(msg){
	console.log(window);
	console.log(document);
	console.log(this); //tro den window
};
var login = function(){
	var user = document.getElementById('logo_input').value;
	var pass = document.getElementById('logo_input2').value;
	console.log(user,pass);
};
var register = function(){
	var lastname = document.getElementById('logo_input3').value;
	var firstname = document.getElementById('logo_input4').value;
	var email = document.getElementById('logo_input5').value;
	var passw = document.getElementById('logo_input6').value;
	console.log(lastname, firstname, email, passw);
};
