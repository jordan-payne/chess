'use strict';

angular
  .module('game')
  .directive('chessSquare', chessSquare);

function chessSquare($compile) {
  return {
    transclude: true,
    restrict: 'E',
    replace: true,
    scope: {
      'select': '&',
      'id': '@'
    },
    templateUrl: 'game/chess-board-square.directive.html'
  };
}
