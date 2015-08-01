var article = require('../../server/controllers/article.s.controller.js');

module.exports = function(app) {
	app.route('/api/articles')
		.get(article.list)
		.post(article.create);

	app.route('/api/articles/:articleId')
		.get(article.read)
		.put(article.update)
		.delete(article.delete);

	app.param('articleId', article.articleByID);
};