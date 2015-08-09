'use strict';

angular.module('chessApp.chessBoard', ['ngRoute'])

.config(['$routeProvider', '$provide', function($routeProvider, $provide) {
  $routeProvider.when('/view-chess-board', {
    templateUrl: 'view-chess-board/chess-board.html',
    controller: 'ChessBoardCtrl'
  });
  $provide.value('PIECES', {
    'PAWN': 'pawn',
    'KNIGHT': 'knight',
    'BISHOP': 'bishop',
    'ROOK': 'rook',
    'QUEEN': 'queen',
    'KING': 'king'
  })
  $provide.value('PLAYERS', {
    'WHITE': 'white',
    'BLACK': 'black'
  })
}])

.controller('ChessBoardCtrl', ['$scope', 'pieceFactory', 'PIECES', 'PLAYERS', function($scope, pieceFactory, PIECES, PLAYERS) {
  $scope.white_pawn = pieceFactory.fn(PIECES.PAWN, PLAYERS.WHITE)
  $scope.black_king = pieceFactory.fn(PIECES.KING, PLAYERS.BLACK)
}])

.factory('pieceFactory', [function() {
  return {
    fn: function(type, player) {
      var src = 'img/pawn.jpg';
      return { 'type': type, 'player': player, 'src': src }
    }
  }
}]);
