'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ngResource',
  'app.chess'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:gameId?', {
    templateUrl: 'chess/chess.html',
    controller: 'ChessCtrl',
    controllerAs: 'chess'
  });
}]);
