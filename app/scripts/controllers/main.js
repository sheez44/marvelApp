'use strict';

/**
 * @ngdoc function
 * @name marvelappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marvelappApp
 */
angular.module('marvelappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
