'use strict';

/**
 * @ngdoc overview
 * @name jsbandApp
 * @description
 * # jsbandApp
 *
 * Main module of the application.
 */
angular
  .module('jsbandApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
