'use strict';

function Game() {

  this.turn = 0;
  this.currentMove = {};
  this.moves = [];
  var board = new Board();

  var getBoard = function() {
    return board;
  }

  var getTurn = function() {
    return this.turn;
  }

  var getCurrentMove = function() {
    return this.currentMove;
  }

  var getMoveRecord = function() {
    return this.moves;
  }

  return {
    board: getBoard(),
    turn: getTurn,
    move: getCurrentMove,
    moves: getMoveRecord
  }

}

chess.factory('Game', function() {
    return Game;
})
