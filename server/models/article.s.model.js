var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema( {
	title : {
		type : String,
		required : true
	},
	content : {
		type : String,
		required : true
	},
	cat1 : {
		type : String
	},
	cat2 : {
		type : String
	},
	created : {
		type : Date,
		default : Date.now
	}
});

mongoose.model('Article', ArticleSchema);