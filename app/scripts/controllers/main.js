'use strict';

/**
 * @ngdoc function
 * @name marvelappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marvelappApp
 */
angular.module('marvelApp')
  .controller('MainCtrl', function ($scope, marvelFactory) {



  $scope.fetchMovie = function(movie) {
      marvelFactory.getAMovie(movie).then(function(data) {
        $scope.title = data.data.Title;
        $scope.plot = data.data.Plot;
        $scope.image = data.data.Poster;
        $scope.imdb = data.data.imdbRating;
      });
  };
  	
  $scope.fetchMovie('suits');

});
