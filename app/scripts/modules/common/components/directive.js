'use strict';

angular.module('jsbandApp')
  .directive('slmFilter', function() {
    return {
      restrict: 'A',
      templateUrl: 'views/modules/common/components/slm-filter.html'
    };
  });
