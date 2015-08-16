'use strict';

function chessSquare($compile) {
  return {
    transclude: true,
    restrict: 'E',
    replace: true,
    scope: {
      'select': '&',
      'id': '@'
    },
    templateUrl: 'chess/directives/chessSquare.html'
  };
}

chess.directive('chessSquare', chessSquare);
