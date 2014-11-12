'use strict';

describe('Controller: SelfRegistrationCtrl', function () {

  // load the controller's module
  beforeEach(module('jsbandApp'));

  var SelfRegistrationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelfRegistrationCtrl = $controller('SelfRegistrationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
