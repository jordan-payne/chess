'use strict';

function board(spec) {

  var that = {};

  spec.boardSquares =
    {
      'a8': square({'coordinate': 'a8', 'piece': piece({'code': '\u2656'})}),
      'b8': square({'coordinate': 'b8', 'piece': piece({'code': '\u2658'})}),
      'c8': square({'coordinate': 'c8', 'piece': piece({'code': '\u2657'})}),
      'd8': square({'coordinate': 'd8', 'piece': piece({'code': '\u2655'})}),
      'e8': square({'coordinate': 'e8', 'piece': piece({'code': '\u2654'})}),
      'f8': square({'coordinate': 'f8', 'piece': piece({'code': '\u2657'})}),
      'g8': square({'coordinate': 'g8', 'piece': piece({'code': '\u2658'})}),
      'h8': square({'coordinate': 'h8', 'piece': piece({'code': '\u2656'})}),
      'a7': square({'coordinate': 'a7', 'piece': piece({'code': '\u2659'})}),
      'b7': square({'coordinate': 'b7', 'piece': piece({'code': '\u2659'})}),
      'c7': square({'coordinate': 'c7', 'piece': piece({'code': '\u2659'})}),
      'd7': square({'coordinate': 'd7', 'piece': piece({'code': '\u2659'})}),
      'e7': square({'coordinate': 'e7', 'piece': piece({'code': '\u2659'})}),
      'f7': square({'coordinate': 'f7', 'piece': piece({'code': '\u2659'})}),
      'g7': square({'coordinate': 'g7', 'piece': piece({'code': '\u2659'})}),
      'h7': square({'coordinate': 'h7', 'piece': piece({'code': '\u2659'})}),
      'a6': square({'coordinate': 'a6', 'piece': piece({'code': '\u0020'})}),
      'b6': square({'coordinate': 'b6', 'piece': piece({'code': '\u0020'})}),
      'c6': square({'coordinate': 'c6', 'piece': piece({'code': '\u0020'})}),
      'd6': square({'coordinate': 'd6', 'piece': piece({'code': '\u0020'})}),
      'e6': square({'coordinate': 'e6', 'piece': piece({'code': '\u0020'})}),
      'f6': square({'coordinate': 'f6', 'piece': piece({'code': '\u0020'})}),
      'g6': square({'coordinate': 'g6', 'piece': piece({'code': '\u0020'})}),
      'h6': square({'coordinate': 'h6', 'piece': piece({'code': '\u0020'})}),
      'a5': square({'coordinate': 'a5', 'piece': piece({'code': '\u0020'})}),
      'b5': square({'coordinate': 'b5', 'piece': piece({'code': '\u0020'})}),
      'c5': square({'coordinate': 'c5', 'piece': piece({'code': '\u0020'})}),
      'd5': square({'coordinate': 'd5', 'piece': piece({'code': '\u0020'})}),
      'e5': square({'coordinate': 'e5', 'piece': piece({'code': '\u0020'})}),
      'f5': square({'coordinate': 'f5', 'piece': piece({'code': '\u0020'})}),
      'g5': square({'coordinate': 'g5', 'piece': piece({'code': '\u0020'})}),
      'h5': square({'coordinate': 'h5', 'piece': piece({'code': '\u0020'})}),
      'a4': square({'coordinate': 'a4', 'piece': piece({'code': '\u0020'})}),
      'b4': square({'coordinate': 'b4', 'piece': piece({'code': '\u0020'})}),
      'c4': square({'coordinate': 'c4', 'piece': piece({'code': '\u0020'})}),
      'd4': square({'coordinate': 'd4', 'piece': piece({'code': '\u0020'})}),
      'e4': square({'coordinate': 'e4', 'piece': piece({'code': '\u0020'})}),
      'f4': square({'coordinate': 'f4', 'piece': piece({'code': '\u0020'})}),
      'g4': square({'coordinate': 'g4', 'piece': piece({'code': '\u0020'})}),
      'h4': square({'coordinate': 'h4', 'piece': piece({'code': '\u0020'})}),
      'a3': square({'coordinate': 'a3', 'piece': piece({'code': '\u0020'})}),
      'b3': square({'coordinate': 'b3', 'piece': piece({'code': '\u0020'})}),
      'c3': square({'coordinate': 'c3', 'piece': piece({'code': '\u0020'})}),
      'd3': square({'coordinate': 'd3', 'piece': piece({'code': '\u0020'})}),
      'e3': square({'coordinate': 'e3', 'piece': piece({'code': '\u0020'})}),
      'f3': square({'coordinate': 'f3', 'piece': piece({'code': '\u0020'})}),
      'g3': square({'coordinate': 'g3', 'piece': piece({'code': '\u0020'})}),
      'h3': square({'coordinate': 'h3', 'piece': piece({'code': '\u0020'})}),
      'a2': square({'coordinate': 'a2', 'piece': piece({'code': '\u265F'})}),
      'b2': square({'coordinate': 'b2', 'piece': piece({'code': '\u265F'})}),
      'c2': square({'coordinate': 'c2', 'piece': piece({'code': '\u265F'})}),
      'd2': square({'coordinate': 'd2', 'piece': piece({'code': '\u265F'})}),
      'e2': square({'coordinate': 'e2', 'piece': piece({'code': '\u265F'})}),
      'f2': square({'coordinate': 'f2', 'piece': piece({'code': '\u265F'})}),
      'g2': square({'coordinate': 'g2', 'piece': piece({'code': '\u265F'})}),
      'h2': square({'coordinate': 'h2', 'piece': piece({'code': '\u265F'})}),
      'a1': square({'coordinate': 'a1', 'piece': piece({'code': '\u265C'})}),
      'b1': square({'coordinate': 'b1', 'piece': piece({'code': '\u265E'})}),
      'c1': square({'coordinate': 'c1', 'piece': piece({'code': '\u265D'})}),
      'd1': square({'coordinate': 'd1', 'piece': piece({'code': '\u265B'})}),
      'e1': square({'coordinate': 'e1', 'piece': piece({'code': '\u265A'})}),
      'f1': square({'coordinate': 'f1', 'piece': piece({'code': '\u265D'})}),
      'g1': square({'coordinate': 'g1', 'piece': piece({'code': '\u265E'})}),
      'h1': square({'coordinate': 'h1', 'piece': piece({'code': '\u265C'})})
    };

    that.get_square = function(squareId) {
      return spec.boardSquares[squareId];
    }

    that.select_square = function(squareId) {
      that.get_square(squareId).select();
    }

    that.get_board_squares = function() {
      return spec.boardSquares;
    }

    return that;

}

chess.factory('board', function() {
  return board;
})
