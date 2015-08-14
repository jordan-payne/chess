'use strict';

function chessSquare($compile, $rootScope, Rules) {
  return {
    restrict: 'E',
    scope: {
      id: '@',
      unicode: '@',
      selectedPiece: '=',
      move: '='
    },
    template: '<div><span ng-bind-html="unicode"></span></div>',
    compile: function CompilingFunction($templateElement, $templateAttributes) {
      $templateElement.replaceWith(this.template);

      return function LinkingFunction($scope, $element, $attrs) {

        $scope.$on('movePiece', function(event, args) {
          if (args.move.from == $scope.id) {
            $scope.unicode = null;
            $element.css('-webkit-box-shadow', '');
            $element.css('-box-shadow', '');
            $scope.$parent.moves.push($scope.move);
            $scope.move = null;
            $scope.selectedPiece = null;
          }
        });
        $scope.$on('illegalMove', function(event, args) {
          console.log('ILLEGAL MOVE');
          if (args.move.from == $scope.id) {
            $element.css('-webkit-box-shadow', '');
            $element.css('-box-shadow', '');
            $scope.move = null;
            $scope.selectedPiece = null;
          }
        });



        $element.on('click', function() {
          if ($scope.selectedPiece) {
            if (rulesSvc.isLegal($scope.move, $scope.$parent.turn, $scope.unicode)) {
              $scope.$parent.turn = 1 - $scope.$parent.turn;
              $scope.unicode = $scope.selectedPiece;
              $scope.selectedPiece = null;
              $scope.move.to = $scope.id;
              $rootScope.$broadcast('movePiece', { 'move': $scope.move, 'piece': $scope.selectedPiece });
            } else {
              // $rootScope.$broadcast('illegalMove', { 'move': $scope.move });
            }
          } else if($scope.unicode) {
            $element.css('-webkit-box-shadow', 'inset 0 0 15px #000');
            $element.css('-box-shadow', 'inset 0 0 15px #000000');
            $scope.selectedPiece = $scope.unicode;
            $scope.move = {'from': $scope.id, 'capturingPiece': $scope.selectedPiece};
          }

          $scope.$apply(function() {
            $compile($element)($scope);
          })
        });

        $element.on('mouseenter', function() {
          $element.css('-webkit-box-shadow', 'inset 0 0 15px #000');
          $element.css('-box-shadow', 'inset 0 0 15px #000000');
        });
        $element.on('mouseleave', function() {
          if ($scope.move == null || $scope.move.from != $scope.id) {
            $element.css('-webkit-box-shadow', '');
            $element.css('-box-shadow', '');
          }
        });

      };
    }
  };
}

chess.directive('chessSquare', chessSquare);
