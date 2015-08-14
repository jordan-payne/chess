'use strict';

function Game(board) {
  this.turn = 0;
  this.moves = [];
  this.board = board;
}

chess.factory('Game', function() {
    return Game;
})
