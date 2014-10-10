angular.module('chirper.controllers', [])
	.controller('MasterController', ['$scope', 'AppContext', function($scope, appContext) {
		$scope.context = appContext.get();
	}])
	.controller('LoginController', ['$scope', '$location', 'AuthorService', 'AppContext', function($scope, $location, authorService, appContext) {
		$scope.username = '';
		appContext.clear();

		$scope.login = function() {
			authorService.login($scope.username)
				.then(function(author) {
					var context = appContext.get();
					context.author = author;
					$location.path('/posts');
				})
				.catch(function(error) {
					// Handle error here
				});
		};
	}])
	.controller('PostsController', ['$scope', 'AppContext', 'PostService', 'AuthorService', function($scope, appContext, postService, authorService) {
		var context = appContext.get();

		$scope.posts = [];
		$scope.postText = '';

		$scope.publish = function() {
			// ALWAYS do validation (except when its a demo project =)
			var post = new Post(0, $scope.postText, context.author);
			postService.publish(post)
				.then(function (post) {
					$scope.posts.push(post);
					$scope.postText = '';
				})
				.catch(function(error) {
					// Handle error here
				});
		};

		postService.getPosts()
			.then(function(posts) {
				$scope.posts = posts;
			})
			.catch(function(error) {
				// Handle error here
			});


		authorService.getAuthors()
			.then (function(authors) {
				$scope.authors = authors;
			})
			.catch (function(error) {
				// Handle error here
			});

	}]);
