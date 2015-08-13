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

}])

.controller('ChessBoardCtrl', ['PIECES',  '$scope', function(PIECES, $scope) {

  $scope.pieces = PIECES;
  $scope.selected_piece = null;
  $scope.move = null;

}])


.directive('chessSquare', ['$compile', 'PIECES', '$rootScope', function($compile, PIECES, $rootScope) {
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
            $scope.move = null;
          }

        });

        $element.on('click', function() {
          if ($scope.selectedPiece) {
            $scope.unicode = $scope.selectedPiece;
            $scope.selectedPiece = null;
            $scope.move.to = $scope.id;
            $rootScope.$broadcast('movePiece', { 'move': $scope.move, 'piece': $scope.selectedPiece });
          } else if($scope.unicode) {
            $element.css('-webkit-box-shadow', 'inset 0 0 15px #000');
            $element.css('-box-shadow', 'inset 0 0 15px #000000');
            $scope.move = {'from': $scope.id};
            $scope.selectedPiece = $scope.unicode;
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
