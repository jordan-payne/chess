'use strict';

angular.module('chessApp.chessBoard', ['ngRoute'])

.config(['$routeProvider', '$provide', function($routeProvider, $provide) {
  $routeProvider.when('/view-chess-board', {
    templateUrl: 'view-chess-board/chess-board.html',
    controller: 'ChessBoardCtrl as chessboard'
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

.controller('ChessBoardCtrl', ['pieceFactory', 'PIECES', 'PLAYERS', function(pieceFactory, PIECES, PLAYERS) {
  this.white_pawn = pieceFactory.fn(PIECES.PAWN, PLAYERS.WHITE)
  this.black_king = pieceFactory.fn(PIECES.KING, PLAYERS.BLACK)
}])

.factory('pieceFactory', ['PLAYERS', 'BASE_IMG_SRC', function(PLAYERS, BASE_IMG_SRC) {
  return {
    fn: function(type, player) {

      var src = BASE_IMG_SRC + 'pieces/' + player + '-' + type + '.svg'

      return { 'type': type, 'player': player, 'src': src }
    }
  }
}]);
