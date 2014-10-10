var app = angular.module('chirper', ['chirper.services', 'chirper.directives', 'chirper.controllers', 'ngRoute']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'app/partials/login.html',
		controller: 'LoginController'
	}).when('/posts', {
		templateUrl: 'app/partials/posts.html',
		controller: 'PostsController'
	}).otherwise({
		redirectTo: '/posts'
	});
}])
.run(['$rootScope', '$location', 'AppContext', function($rootScope, $location, appContext) {

	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		var context = appContext.get();
		// Redirect user to login page if he's not authenticated
		if (next.route !== '/login' && !context.author.id)
			$location.path('/login');
	});
}]);
