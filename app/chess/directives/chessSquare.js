'use strict';

function chessSquare($compile, $rootScope, Rules, Board) {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

        scope.$on('movePiece', function(event, args) {
          if (args.move.from == scope.id) {
            scope.unicode = null;
            elem.css('-webkit-box-shadow', '');
            elem.css('-box-shadow', '');
            scope.$parent.moves.push(scope.move);
            scope.move = null;
            scope.selectedPiece = null;
          }
        });

        scope.$on('illegalMove', function(event, args) {
          console.log('ILLEGAL MOVE');
          if (args.move.from == scope.id) {
            elem.css('-webkit-box-shadow', '');
            elem.css('-box-shadow', '');
            scope.move = null;
            scope.selectedPiece = null;
          }
        });

        elem.on('click', function() {
          if (scope.selectedPiece) {
            if (Rules.isLegal(scope.move)) {
              scope.$parent.turn = 1 - scope.$parent.turn;
              scope.unicode = scope.selectedPiece;
              scope.selectedPiece = null;
              scope.move.to = scope.id;
              $rootScope.$broadcast('movePiece', { 'move': scope.move, 'piece': scope.selectedPiece });
            } else {
              // $rootScope.$broadcast('illegalMove', { 'move': scope.move });
            }
          } else if(scope.unicode) {
            elem.css('-webkit-box-shadow', 'inset 0 0 15px #000');
            elem.css('-box-shadow', 'inset 0 0 15px #000000');
            scope.selectedPiece = scope.unicode;
            scope.move = {'from': scope.id, 'capturingPiece': scope.selectedPiece};
          }

          scope.$apply(function() {
            $compile(elem)(scope);
          })
        });

    }

  };
}

chess.directive('chessSquare', chessSquare);
