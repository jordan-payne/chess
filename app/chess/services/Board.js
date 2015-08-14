'use strict';

function Board(pieces) {

  var EMPTY = '';

  this.board =
    [
      pieces.WR, pieces.WN, pieces.WB, pieces.WQ, pieces.WK, pieces.WB, pieces.WN, pieces.WR,
      pieces.WP, pieces.WP, pieces.WP, pieces.WP, pieces.WP, pieces.WP, pieces.WP, pieces.WP,
      EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY,
      pieces.BP, pieces.BP, pieces.BP, pieces.BP, pieces.BP, pieces.BP, pieces.BP, pieces.BP,
      pieces.BR, pieces.BN, pieces.BB, pieces.BQ, pieces.BK, pieces.BB, pieces.BN, pieces.BR
    ];
}

chess.factory('Board', function() {
  return Board;
})
