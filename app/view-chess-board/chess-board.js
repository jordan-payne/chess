'use strict';

angular.module('chessApp.chessBoard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view-chess-board', {
    templateUrl: 'view-chess-board/chess-board.html',
    controller: 'ChessBoardCtrl'
  });
}])

.controller('ChessBoardCtrl', ['$scope', function(sc) {

  sc.pieces = ['PAWN', 'KNIGHT', 'BISHOP', 'ROOK', 'QUEEN', 'KING']
  sc.board = 0xffffffffffffff
  18446744073709552000
  9007199254740991
}]);
