'use strict';

angular.module('chessApp.chessBoard', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', '$provide', function($routeProvider, $provide) {
  $routeProvider.when('/view-chess-board', {
    templateUrl: 'view-chess-board/chess-board.html',
    controller: 'ChessBoardCtrl'
  });
  $provide.value('PIECES', {
    'WK': '&#9812',
    'WQ': '&#9813',
    'WR': '&#9814',
    'WB': '&#9815',
    'WN': '&#9816',
    'WP': '&#9817',
    'BK': '&#9818',
    'BQ': '&#9819',
    'BR': '&#9820',
    'BB': '&#9821',
    'BN': '&#9822',
    'BP': '&#9823',
  })
  $provide.value('STARTING_BOARD', [
    'WR', 'WN', 'WB', 'WQ', 'WK', 'WB', 'WN', 'WR',
    'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP',
    '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ',
    '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ',
    '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ',
    '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ',
    'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP',
    'BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR'
  ])

}])

.controller('ChessBoardCtrl', ['PIECES', 'STARTING_BOARD',  '$scope', function(PIECES, STARTING_BOARD, $scope) {

  $scope.pieces = PIECES;
  $scope.board = STARTING_BOARD;
  $scope.selected_piece = null;
  $scope.move = null;
  $scope.moves = [];
  $scope.turn = 0;

}])


.directive('chessSquare', ['$compile', '$rootScope', 'rulesSvc', function($compile, $rootScope, rulesSvc) {
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
              $rootScope.$broadcast('illegalMove', { 'move': $scope.move });
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
}]);
