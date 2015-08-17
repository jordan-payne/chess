'use strict';

function Game($rootScope) {

  this.turn = 0;
  this.currentMove = {};
  var msgs = [];
  var board = new Board($rootScope);

  var getBoard = function() {
    return board;
  }

  var getTurn = function() {
    return this.turn;
  }

  var getCurrentMove = function() {
    return this.currentMove;
  }

  $rootScope.$on('PIECE CAPTURED', function(msg, args) {
    msgs.push(args);
  });

  return {
    board: getBoard(),
    turn: getTurn,
    move: getCurrentMove,
    msgs: msgs
  }

}

chess.factory('Game', function() {
    return Game;
})
