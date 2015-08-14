'use strict';

function Board(pieces) {

  var EMPTY = '';

  this.board =
    {
      'a8': pieces.WR, 'b8': pieces.WN, 'c8': pieces.WB, 'd8': pieces.WQ, 'e8': pieces.WK, 'f8': pieces.WB, 'g8': pieces.WN, 'h8': pieces.WR,
      'a7': pieces.WP, 'b7': pieces.WP, 'c7': pieces.WP, 'd7': pieces.WP, 'e7': pieces.WP, 'f7': pieces.WP, 'g7': pieces.WP, 'h7': pieces.WP,
      'a6': ' ', 'b6': ' ', 'c6': ' ', 'd6': ' ', 'e6': ' ','d6': ' ', 'e6': ' ', 'f6': ' ',
      'a5': EMPTY, 'b5': EMPTY, 'c5': EMPTY, 'd5': EMPTY, 'e5': EMPTY,'d5': EMPTY, 'e5': EMPTY, 'f5': EMPTY,
      'a4': EMPTY, 'b4': EMPTY, 'c4': EMPTY, 'd4': EMPTY, 'e4': EMPTY,'d4': EMPTY, 'e4': EMPTY, 'f4': EMPTY,
      'a3': EMPTY, 'b3': EMPTY, 'c3': EMPTY, 'd3': EMPTY, 'e3': EMPTY,'d3': EMPTY, 'e3': EMPTY, 'f3': EMPTY,
      'a2': pieces.BP, 'b2': pieces.BP, 'c2': pieces.BP, 'd2': pieces.BP, 'e2': pieces.BP, 'f2': pieces.BP, 'g2': pieces.BP, 'h2': pieces.BP,
      'a1': pieces.BR, 'b1': pieces.BN, 'c1': pieces.BB, 'd1': pieces.BQ, 'e1': pieces.BK, 'f1': pieces.BB, 'g1': pieces.BN, 'h1': pieces.BR
    };
}

chess.factory('Board', function() {
  return Board;
})
