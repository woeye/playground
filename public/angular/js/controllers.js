angular.module('playground.controllers', [])

  .controller('first', function($scope, $location) {
    $scope.switchView = function() {
      $location.path('/second');
    }
  })

  .controller('second', function($scope, $location) {
    $scope.switchView = function() {
      $location.path('/first');
    }
  });

