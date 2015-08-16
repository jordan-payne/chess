'use strict';

function Pieces() {
  this.pieces = {
    'WK': {'codePoint': '\u2654'},
    'WQ': {'codePoint': '\u2655'},
    'WR': {'codePoint': '\u2656'},
    'WB': {'codePoint': '\u2657'},
    'WN': {'codePoint': '\u2658'},
    'WP': {'codePoint': '\u2659'},
    'BK': {'codePoint': '\u265A'},
    'BQ': {'codePoint': '\u265B'},
    'BR': {'codePoint': '\u265C'},
    'BB': {'codePoint': '\u265D'},
    'BN': {'codePoint': '\u265E'},
    'BP': {'codePoint': '\u265F'},
    'NO_PIECE': {'codePoint': '\u0020'}
  };
}

chess.factory('Pieces', function() {
  return Pieces;
});
