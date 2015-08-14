'use strict';

// Declare app level module which depends on views, and components
angular.module('chessApp', [
  'ngRoute',
  'ngResource',
  'chessApp.chessBoard',
  'chessApp.about',
  'chessApp.version',
  'chessApp.rulesService'
]).
config(['$routeProvider', '$provide', function($routeProvider, $provide) {
  $routeProvider.otherwise({redirectTo: '/view-chess-board'});
}]);
