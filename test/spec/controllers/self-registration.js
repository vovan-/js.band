'use strict';
/*
  not all cases tested - needs review
 */

describe('Controller: SelfRegistrationCtrl', function () {
  var SelfRegistrationCtrl, $scope, $httpBackend, serverRequestHandler;

  // load the controller's module
  beforeEach( module('jsbandApp') );

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    // configure HTTP mock
    $httpBackend = _$httpBackend_;
    serverRequestHandler = $httpBackend.whenGET('/api/questionnaires').respond({});
    // create controller with scope referenced by $scope
    $scope = $rootScope.$new();
    SelfRegistrationCtrl = $controller('SelfRegistrationCtrl', {
      $scope: $scope
    });
    //switch off logging
    spyOn(console,'log');
  }));

  it('should has empty questionnaire data at start', function () {
    expect($scope.questionnaire).toBeUndefined();
  });

  describe ('Server interaction', function () {
    it('should do GET request to server at contruction time', function () {
      $httpBackend.expectGET('/api/questionnaires');
      $httpBackend.flush();

    });
    it('should assign result to scope if successed', function () {
      var response = {some:"data"};
      serverRequestHandler.respond(200,response);
      $httpBackend.flush();

      expect($scope.questionnaire).toEqual(response);

    });
    it('should log if error', function () {
      serverRequestHandler.respond(200);
      $httpBackend.flush();

      expect(console.log).toHaveBeenCalled();

    });


    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    })

  });

  describe('Multylanguage support', function () {
    it('should contains current language in scope', function () {
      expect($scope.language).toBeDefined();
    });


    it('should set translation.use on change of language', inject(function ($translate) {
      spyOn($translate, 'use');

      $scope.language = 'jp';
      $scope.$digest();

      expect($translate.use).toHaveBeenCalledWith('jp');
    }));

  });

});
