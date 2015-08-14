'use strict';

function Game(board) {
  this.turn = 0;
  this.moves = [];
}

chess.factory('Game', function() {
    return Game;
})
