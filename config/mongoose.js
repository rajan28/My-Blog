var config = require('./config.js');

var mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);

	require('../server/models/article.s.model.js');

	return db;
};