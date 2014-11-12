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
  .controller('SelfRegistrationCtrl', function ($scope) {
    $scope.language='English';
    //@TODO What abount icons?
    $scope.availableLanguages={
      en:"English",
      de:"Deutsch",
      ru:"Русский",
      jp:"日本の"
    };
    $scope.chapters = {
      "chapter-id-1": {
        name: "About you",
        questions: {
          "question-id-1": {
            name:{
              en:"What is your Organization name?",
              de:"Was ist Ihr Name der Organisation?"
            },
            type: questionType.text,
            value: "IBM",
            mandatory:true
          },
          "question-id-2": {
            name:{
              en:"Income",
              de:"Einkommen"
            },
            type: questionType.number,
            value: 100000000.00,
            mandatory:true
          },
          "question-id-3": {
            name: {
              en:"Country",
              ru:"Страна"
            },
            type: questionType.entity,
            entytyType:"region",
            value: "US,USA",
            mandatory:true
          }
        }
      },
      "chapter-id-2": {
        name: "Parent company",
        questions: {
          "question-id-1": {
            name:{
              en:"What is your Parent Organization name?",
              de:"Was ist Ihre Mutterorganisationsname?"
            },
            type: questionType.text,
            value: "",
            mandatory:false
          },
          "question-id-2": {
            name:{
              en:"Income",
              de:"Einkommen"
            },
            type: questionType.number,
            value: "",
            mandatory:false
          },
          "question-id-3": {
            name: {
              en:"Country",
              ru:"Страна"
            },
            type: questionType.entity,
            entytyType:"region",
            value: "",
            mandatory:false
          }
        }
      }
    }
  });
