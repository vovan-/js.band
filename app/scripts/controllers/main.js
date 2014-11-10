'use strict';

/**
 * @ngdoc function
 * @name jsbandApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsbandApp
 */
angular.module('jsbandApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
