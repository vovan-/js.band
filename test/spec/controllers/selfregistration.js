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

  it('should contains list of chapters in scope', function () {
    expect(scope.chapters).not.toBeNull();
  });
});
