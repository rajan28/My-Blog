'use strict';

angular.module('myBlog').controller('ArticleCtrl', ['$scope', '$routeParams', '$location', 'Article', function($scope, $routeParams, $location, Article) {

	$scope.create = function() {
		var article = new Article( {
			title : this.title,
			content : this.content,
			cat1 : this.cat1,
			cat2 : this.cat2
		});
		article.$save(function(res) {
			$location.path('articles/' + res._id);
		}, function(errorResponse) {
			$scope.error = errorResponse.data.message;
		});
	};

	$scope.find = function() {
		$scope.articles = Article.query();
	};

	$scope.findOne = function() {
		$scope.article = Article.get( {
			articleId : $routeParams.articleId
		});
	};

	$scope.update = function() {
		$scope.article.$update(function() {
			$location.path('articles/' + $scope.article._id);
		}, function(errorResponse) {
			$scope.error = errorResponse.data.message;
		});
	};

	$scope.delete = function(article) {
		if (article) { 
			article.$remove(function() { 
				for (var i in $scope.articles) { 
					if ($scope.articles[i] === article) { 
						$scope.articles.splice(i, 1); 
					} 
				} 
			}); 
		} else { 
			$scope.article.$remove(function() { 
				$location.path('articles'); 
			}); 
		} 
	};

}]);