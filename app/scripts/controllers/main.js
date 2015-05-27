'use strict';

/**
 * @ngdoc function
 * @name marvelappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marvelappApp
 */
angular.module('marvelApp')
  .controller('MainCtrl', function ($scope, movieFactory) {

    $scope.movies = [];

  $scope.fetchMovie = function(movie) {
      movieFactory.getAMovie(movie).then(function(data) {

        $scope.movies.push(data.data);
      });
  };

  $scope.removeMovie = function (index) {
    $scope.movies.splice(index, 1);
  };
  
  $scope.fetchMovie('suits');

});
