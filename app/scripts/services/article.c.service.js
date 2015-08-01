'use strict';

angular.module('myBlog').factory('Article', ['$resource', function($resource) {
	return $resource('api/articles/:articleId', {
		articleId : '@_id'
	}, {
		update : {
			method : 'PUT'
		}
	});
}]);