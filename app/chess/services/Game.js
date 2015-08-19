'use strict';

function game(spec) {

  var that = {};

  that.get_turn = function() {
    return spec.turn;
  }

  that.get_board = function() {
    return spec.board;
  }

  that.get_move = function() {
    return spec.move;
  }

  that.get_messages = function() {
    return spec.messages;
  }

  that.select_square = function(squareId) {
    that.get_board().select_square(squareId);
  }

  that.get_code = function(squareId) {
    return that.get_board().get_square(squareId).get_piece().get_code();
  }

  that.get_board_squares = function() {
    return that.get_board().get_board_squares();
  }

  return that;

}

chess.factory('game', function(spec) {
    return game;
})
