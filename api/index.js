'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3800;

mongoose.connect('mongodb://localhost:27017/medical', (err, res) => {
	if(err){
		throw err;
	}else{
		console.log("Base de datos funcionando correctamente...");

		app.listen(port, function(){
			console.log('API RESTfull de medical escuchando...');
		});
	}
});
