'use strict';

function Pieces() {
  this.pieces = {
    'WK': '&#9812',
    'WQ': '&#9813',
    'WR': '&#9814',
    'WB': '&#9815',
    'WN': '&#9816',
    'WP': '&#9817',
    'BK': '&#9818',
    'BQ': '&#9819',
    'BR': '&#9820',
    'BB': '&#9821',
    'BN': '&#9822',
    'BP': '&#9823',
  };
}

chess.factory('Pieces', function() {
  return Pieces;
});
