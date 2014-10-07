angular.module('palestra.services', [])
	.factory('PostService', ['$http', '$q', function($http, $q) {
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
			},
			publish: function(post) {
				var deferred = $q.defer();
				$http.post('/api/posts', { post: post })
					.then(function(response) {
						deferred.resolve(response.data);
					}, function(response) {
						deferred.reject(response.data);
					});
					
				return deferred.promise;
			},
		};
	}])
	.factory('AuthorService', ['$http', '$q', function($http, $q) {
		return {
			getAuthors: function() {
				var deferred = $q.defer();
				$http.get('/api/authors')
					.then(function(response) {
						deferred.resolve(response.data);
					}, function(response) {
						deferred.reject(response.data);
					});
					
				return deferred.promise;
			}
		};
	}]);
