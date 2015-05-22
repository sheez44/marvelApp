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

  	marvelFactory.success(function(data){
  		$scope.characters = data;
  		console.log(data);
  	});
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
