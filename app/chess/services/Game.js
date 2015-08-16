'use strict';

function Game(board) {

  this.turn = 0;
  this.currentMove = {};
  this.moves = [];
  this.board = board;

  this.getPiece = function(boardSquareId) {
    return this.board[boardSquareId].piece.codePoint;
  }

}

chess.factory('Game', function() {
    return Game;
})
