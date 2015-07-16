var express = require('express');
var compress = require('compression');
var morgan = require('morgan');


module.exports = function() {
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev')); //logger
	};
	if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	};

	app.use(express.static('./dist'));
};