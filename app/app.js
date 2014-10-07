var app = angular.module('palestra', ['palestra.services', 'palestra.directives', 'palestra.controllers', 'ngRoute']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider.when('/posts', {
		templateUrl: 'app/partials/posts.html',
		controller: 'PostsController'
	}).otherwise({
		redirectTo: '/posts'
	});
}]);