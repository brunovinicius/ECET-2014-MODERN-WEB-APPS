var app = angular.module('chirper', ['chirper.services', 'chirper.directives', 'chirper.controllers', 'ngRoute']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider.when('/posts', {
		templateUrl: 'app/partials/posts.html',
		controller: 'PostsController'
	}).otherwise({
		redirectTo: '/posts'
	});
}]);
