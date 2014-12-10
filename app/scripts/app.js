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
    'ngRoute',
    'pascalprecht.translate',
    'ui.grid'
  ])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/selfregistration', {
        templateUrl: 'views/self-registration.html',
        controller: 'SelfRegistrationCtrl'
      })
      .when('/accounts', {
        templateUrl: 'views/accounts.html',
        controller: 'AccountsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


    $translateProvider.
      translations('en', {
        'selfreg-header': 'Self registration',
        INTRO_TEXT: 'And it has i18n support!'
      })
      .translations('de', {
        'selfreg-header': 'Selbstregistrierung',
        INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!'
      })
      .fallbackLanguage('en');
    //$translateProvider.preferredLanguage('en');
  });
