var convertAuthor = function(rawAuthor) {
	return new Author(rawAuthor.id, rawAuthor.name);
};

var convertPost = function(rawPost) {
	var author = convertAuthor(rawPost.author);
	return new Post(rawPost.id, rawPost.text, author);
};

angular.module('chirper.services', [])
	.factory('PostService', ['$http', '$q', function($http, $q) {
		return {
			getPosts: function() {
				var deferred = $q.defer();
				$http.get('/api/posts')
					.then(function(response) {
						var rawPosts = response.data;
						var posts = [];

						rawPosts.forEach(function(rawPost, index, arr) {
							posts.push(convertPost(rawPost));
						});

						deferred.resolve(posts);
					}, function(response) {
						deferred.reject(response.data);
					});

				return deferred.promise;
			},
			publish: function(post) {
				var deferred = $q.defer();
				$http.post('/api/posts', { post: post })
					.then(function(response) {
						var rawPost = response.data;

						deferred.resolve(convertPost(rawPost));
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
						var rawAuthors = response.data;
						var authors = [];

						rawAuthors.forEach(function(rawAuthor, index, arr) {
							authors.push(convertAuthor(rawAuthor));
						});

						deferred.resolve(authors);
					}, function(response) {
						deferred.reject(response.data);
					});

				return deferred.promise;
			}
		};
	}]);
