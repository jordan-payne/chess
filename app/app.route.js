'use strict';

angular
  .module('app')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/:gameId?', {
      templateUrl: 'game/game.view.html',
      controller: 'GameController',
      controllerAs: 'game'
    });
  }]);
