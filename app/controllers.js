angular.module('palestra.controllers', [])
	.controller('PostsController', ['$scope', 'PostService', 'AuthorService', function($scope, postService, authorService) {
		$scope.posts = [];
		$scope.postText = '';
		$scope.postAuthor = null;

		$scope.publish = function() {
			// ALWAYS do validation (except when its a demo project =)

			var post = new Post(0, $scope.postText, $scope.postAuthor);
			postService.publish(post)
				.then(function (post) {
					$scope.posts.push(post);
					$scope.postAuthor = null;
					$scope.postText = '';
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
			.then (function (authors) {
				$scope.authors = authors;
			})
			.catch (function (error) {
				// Handle error here
			});

	}]);

