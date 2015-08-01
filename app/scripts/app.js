'use strict';

angular.module('myBlog', ['ngAnimate', 'ngResource', 'ngRoute']);
  

angular.module('myBlog').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/create', {
        templateUrl: 'views/articles/create-article.html',
        controller: 'ArticleCtrl'
      })
      .when('/all', {
        templateUrl: 'views/articles/list-articles.html',
        controller: 'ArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
