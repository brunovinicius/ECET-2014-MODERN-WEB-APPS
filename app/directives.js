angular.module('chirper.directives', [])
	.directive('chirperPost', function() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				data: '=',
			},
			templateUrl: 'app/templates/post.html'
		};
	});
