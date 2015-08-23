'use strict';

function game(spec) {

  var that = {};

  that.get_turn = function() {
    return spec.turn;
  };

  that.set_turn = function(t) {
    spec.turn = that.get_turn().localeCompare('BLACK') == 0 ? 'WHITE' : 'BLACK';
  };

  that.get_board = function() {
    return spec.board;
  };

  that.get_move = function() {
    return spec.move;
  };

  that.set_move = function(m) {
    spec.move = m;
  };

  that.get_messages = function() {
    return spec.messages;
  };

  that.add_message = function(msg) {
    spec.messages.$add({text: msg});
  };

  that.select_square = function(squareId) {

    that.get_board().select_square(squareId);

    var capturingColor = that.get_board().get_square(squareId).get_piece().get_color();
    var capturingSquare = that.get_move().get_capturing_square();
    var selectedSquare = that.get_board().get_square(squareId);

    if (typeof capturingSquare == 'undefined') {

      switch(capturingColor) {
        case that.get_turn():
          that.get_move().set_capturing_square(that.get_board().get_square(squareId));
          that.add_message('You have selected one of your pieces.');
          break;
        case 'NEUTRAL':
          that.add_message('You must select one of your own pieces.');
          selectedSquare.select();
          break;
        default:
          that.add_message('It is not your turn.');
          selectedSquare.select();
          break;
      }
    } else {

      switch(capturingColor) {
        case that.get_turn():
          that.add_message('You cannot capture your own piece.');
          selectedSquare.select();
          capturingSquare.select();
          break;
        case 'NEUTRAL':
          that.add_message('Capturing blank space.');
          selectedSquare.select();
          capturingSquare.select();
          selectedSquare.set_piece(capturingSquare.get_piece());
          capturingSquare.set_piece(piece({'code': '\u0020'}));
          that.set_turn();
          that.set_move(move({}));
          break;
        default:
          that.add_message('Capturing an enemy piece.');
          selectedSquare.select();
          capturingSquare.select();
          selectedSquare.set_piece(capturingSquare.get_piece());
          capturingSquare.set_piece(piece({'code': '\u0020'}));
          that.set_turn();
          that.set_move(move({}));
      }

    }
  };

  that.get_code = function(squareId) {
    return that.get_board().get_square(squareId).get_piece().get_code();
  };

  that.get_board_squares = function() {
    return that.get_board().get_board_squares();
  };

  that.is_selected = function(squareId) {
    return that.get_board().get_square(squareId).is_selected();
  };

  return that;

}

chess.factory('game', function(spec) {
    return game;
})
