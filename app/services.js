angular.module('palestra.services', [])
	.factory('postService', ['$http', '$q', function($http, $q) {
		return {
			getPosts: function() {
				var deferred = $q.defer();
				$http.get('/api/posts')
					.then(function(response) {
						deferred.resolve(response.data);
					}, function(response) {
						deferred.reject(response.data);
					});
				return deferred.promise;
			}
		};
	}]);
