'use strict';

angular.module('jsbandApp')
  .factory('filterService', ['$http', function($http) {
    return {
      loadFilters: function (moduleDescriptor, successCallback) {
        if (moduleDescriptor) {
          $http.get('/api/filter/' + moduleDescriptor)
            .success(function (data) {
              successCallback(data);
            })
            .error(function (data) {
              console.log('Error: ' + data);
            });
        } else {
          console.error('filterService loadFilters(): moduleDescription parameter is not specified');
        }
      }
    };
  }])

  .factory('gridService', ['$http', function($http) {
    return {
      loadData: function (moduleDescriptor, successCallback) {
        if (moduleDescriptor) {
          $http.get('/api/grid/' + moduleDescriptor)
            .success(function (data) {
              successCallback(data);
            })
            .error(function (data) {
              console.log('Error: ' + data);
            });
        } else {
          console.error('gridService loadData(): moduleDescription parameter is not specified');
        }
      }
    };
  }]);
