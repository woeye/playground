angular.module('playground', ['playground.controllers'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/first', {
        templateUrl: 'partials/first.html', controller: 'first'
      })
      .when('/second', {
        templateUrl: 'partials/second.html', controller: 'second'
      })
      .otherwise({redirectTo: '/first'});
  }]);