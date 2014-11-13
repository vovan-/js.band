'use strict';


angular.module('jsbandApp')
  .controller('NotesCtrl', function ($scope, $http) {
    $scope.formData = {};

    // get all notes and show them
    $http.get('/api/notes')
      .success(function(data) {
        $scope.notes = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    // when submitting the add form, send the text to the node API
    $scope.createNote = function() {
      $http.post('/api/notes', $scope.formData)
        .success(function(data) {
          $scope.formData = {}; // clear the form
          $scope.notes = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    // delete
    $scope.deleteNote = function(id) {
      $http.delete('/api/notes/' + id)
        .success(function(data) {
          $scope.notes = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };
  });

