var myApp = angular.module('myApp');

myApp.controller('GenreController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('GenreController loaded...');

	$scope.getGenres = function(){
		$http.get('/api/genres').success(function(response){
			$scope.books = response;
		});
	}

	$scope.addGenre = function(){
		console.log($scope.book);
		$http.post('/api/genres/', $scope.genre).success(function(response){
			window.location.href='#/genres';
		});
	}

	$scope.updateGenre = function(){
		var id = $routeParams.id;
		$http.put('/api/genres/'+id, $scope.genre).success(function(response){
			window.location.href='#/genres';
		});
	}

	$scope.removeGenre = function(id){
		$http.delete('/api/genres/'+id).success(function(response){
			window.location.href='#/genres';
		});
	}
}]);