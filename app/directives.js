angular.module('palestra.directives', [])
	.directive('palestraPost', function() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				data: '=',
			},
			templateUrl: 'app/templates/post.html'
		};
	});