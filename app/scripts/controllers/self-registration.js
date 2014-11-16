'use strict';

/**
 * @ngdoc function
 * @name jsbandApp.controller:SelfRegistrationCtrl
 * @description
 * # SelfRegistrationCtrl
 * Controller of the jsbandApp
 */

var questionType = {
  text:"text",
  number:"number",
  entity:"entity"
};
angular.module('jsbandApp')
  .controller('SelfRegistrationCtrl', function ($scope, $http) {
//    @TODO How to proceed with not Existing translation
    $scope.language='de';
    //@TODO What abount icons?
    $scope.availableLanguages={
      en:"English",
      de:"Deutsch",
      ru:"Русский",
      jp:"日本の"
    };
    $scope.systemLanguage='en';

    // get all notes and show them
    $http.get('/api/questionnaires')
      .success(function(data) {
        $scope.questionnaire = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    $scope.finish = function (){
      // some validation here
      console.log($scope.questionnaire);
    };
    $scope.translate = function (mlstring){
      return mlstring[$scope.language] || mlstring[$scope.systemLanguage] || "no translation";
    };
  });
