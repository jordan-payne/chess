'use strict';

// Declare app level module which depends on views, and components
angular.module('chessApp', [
  'ngRoute',
  'chessApp.chessBoard',
  'chessApp.about',
  'chessApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view-chess-board'});
}]);
