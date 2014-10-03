var app = angular.module('palestra', ['palestra.services', 'ngRoute']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider.when('/posts', {
		templateUrl: 'app/partials/posts.html',
		controller: 'PostsController'
	}).otherwise({
		redirectTo: '/posts'
	});
}]);

app.controller('PostsController', ['$scope', 'postService', function($scope, postService) {
	$scope.posts = [];

	postService.getPosts()
		.then(function(posts) {
			$scope.posts = posts;
		})
		.catch(function(error) {
			// Handle error here
		});
}]);

app.directive('palestraPost', function() {
	return {
		restrict: 'E',
		scope: {
			data: '=',
		},
		templateUrl: 'app/templates/post.html'
	};
});
