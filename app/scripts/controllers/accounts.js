'use strict';

/**
 * @ngdoc function
 * @name jsbandApp.controller:AccountsCtrl
 * @description
 * # AccountsCtrl
 * Controller of the jsbandApp
 */

// Page state
var PAGE_STATE = {
  Normal: 'Normal',
  InSearchMode:'InSearchMode'
};

angular.module('jsbandApp')
  .controller('AccountsCtrl', function ($scope, $timeout) {

    $scope.pageState = PAGE_STATE.Normal;

    $scope.gridFilters = getFilters();
    $scope.availableFilterConditions = GRID_FILTER_CONDITIONS;

    $scope.accounts = getAccounts();
    $scope.accountsGrid = { data: 'accounts' };

    $scope.search = function () {
      $scope.pageState = PAGE_STATE.InSearchMode;
      $scope.accounts = [];
      $timeout(function() {
        $scope.accounts = getAccounts();
        $scope.pageState = PAGE_STATE.Normal;
      }, 500);
    };

    $scope.inSearchMode = function() {
      return $scope.pageState == PAGE_STATE.InSearchMode;
    };

    function getFilters() {
      return [
        { id: 'filter0', caption: 'First name', value: 'al', condition: GRID_FILTER_CONDITIONS.Contains, type: DATA_TYPES.text },
        { id: 'filter1', caption: 'Last name', value: '', condition: GRID_FILTER_CONDITIONS['Starts with'], type: DATA_TYPES.text},
        { id: 'filter2', caption: 'Groups', value: '', condition: GRID_FILTER_CONDITIONS['Ends with'], type: DATA_TYPES.entity },
        { id: 'filter3', caption: 'Birthday', value: new Date(2014, 12, 5), condition: GRID_FILTER_CONDITIONS.Equals, type: DATA_TYPES.date }
      ];
    }

    function getAccounts() {
      return [
        {'First Name': 'Vasia', 'Last Name': 'Pupkin', 'Login': 'apupkin', 'Groups': 'Dev'},
        {'First Name': 'Фёдор', 'Last Name': 'Достоевский', 'Login': 'fdostoevski', 'Groups': 'Mega Admin'},
        {'First Name': 'Alex', 'Last Name': 'Pushkin', 'Login': 'apushkin', 'Groups': 'Mega Admin'},
        {'First Name': 'Пётр', 'Last Name': 'Верховенский', 'Login': 'pverhovenski', 'Groups': 'Admin; Dev'},
        {'First Name': 'Николай', 'Last Name': 'Ставрогин', 'Login': 'nstavrogin', 'Groups': 'Admin; Dev'}
      ];
    }

  });
