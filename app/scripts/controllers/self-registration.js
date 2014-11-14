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
var PAGES = {
  Answer:"Answer",
  Finish:"Finish",
  FollowUP:"FollowUP"
};
angular.module('jsbandApp')
  .controller('SelfRegistrationCtrl', function ($scope) {
    $scope.PAGES = PAGES;
    $scope.currentPage = PAGES.Answer;
//    TODO How to proceed with not Existing translation
    $scope.language='de';
    //TODO What abount icons?
    $scope.availableLanguages={
      en:"English",
      de:"Deutsch",
      ru:"Русский",
      jp:"日本の"
    };
    $scope.systemLanguage='en';
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
          "question-id-4": {
            name:{
              en:"What is your Parent Organization name?",
              de:"Was ist Ihre Mutterorganisationsname?"
            },
            type: questionType.text,
            value: "",
            mandatory:false
          },
          "question-id-5": {
            name:{
              en:"Income",
              de:"Einkommen"
            },
            type: questionType.number,
            value: "",
            mandatory:false
          },
          "question-id-6": {
            name: {
              en:"Country",
              ru:"Страна",
              jp:"国"
            },
            type: questionType.entity,
            entytyType:"region",
            value: "",
            mandatory:false
          }
        }
      }
    };
    $scope.finish = function (){


    };
    $scope.translate = function (mlstring){
      return mlstring[$scope.language] || mlstring[$scope.systemLanguage] || "no translation";
    };
    $scope.saveAndNext = function () {
      // some validation here
      console.log($scope.chapters);
      $scope.currentPage = PAGES.Finish;
    };
    $scope.gotoAnswer = function () {
      // some validation here
      $scope.currentPage = PAGES.Answer;
    };
    $scope.finishSelfRegistration = function () {
      // save answer on server & process result
      $scope.currentPage = PAGES.FollowUP;
    };
    $scope.closeSelfRegistration = function () {
      // send redirect to server login
      // for emulation do it via
      window.location = '/';
    };
  });
