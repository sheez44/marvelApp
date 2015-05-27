'use strict';

angular.module('marvelApp')
  .factory('movieFactory', ['$http',

  function ($http) {

  		return {

        getAMovie: function(movie) {
          return $http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json&tomatoes=true')
            .success(function (data) {
              return data;
            })
            .error(function (error) {
              return error;
            });
        }
      };    
  }]);