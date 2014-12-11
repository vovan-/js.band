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

var ACCOUNTS_MODULE_DESCRIPTOR = 'accounts';

angular.module('jsbandApp')
  .controller('AccountsCtrl', ['$scope', 'filterService', 'gridService', function ($scope, filterService, gridService) {
    $scope.pageState = PAGE_STATE.Normal;

    filterService.loadFilters(ACCOUNTS_MODULE_DESCRIPTOR, filtersLoadSuccessCallback);
    $scope.availableFilterConditions = GRID_FILTER_CONDITIONS;

    gridService.loadData(ACCOUNTS_MODULE_DESCRIPTOR, accountsLoadSuccessCallback);
    $scope.accountsGrid = { data: 'accounts' };

    $scope.search = function () {
      $scope.pageState = PAGE_STATE.InSearchMode;

      $scope.accounts = [];
      gridService.loadData(ACCOUNTS_MODULE_DESCRIPTOR, accountsLoadSuccessCallback);

      $scope.pageState = PAGE_STATE.Normal;
    };

    $scope.inSearchMode = function() {
      return $scope.pageState == PAGE_STATE.InSearchMode;
    };

    function filtersLoadSuccessCallback(filters) {
      $scope.gridFilters = filters;
    }

    function accountsLoadSuccessCallback(accounts) {
      $scope.accounts = accounts;
    }
  }]);
