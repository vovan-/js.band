'use strict';

/**
 * @ngdoc function
 * @name jsbandApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jsbandApp
 */
angular.module('jsbandApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
