'use strict';

angular.module('myBlog').controller('MainCtrl', function($scope) {

	$(document).ready(function() {
		$('#owl-example').owlCarousel({
			singleItem: true,
			autoPlay: 3000,
			rewindNav: false
		});
	});

	$scope.bob = 'hi';
});
