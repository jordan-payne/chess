'use strict';

function Piece(codePoint) {

  var codePoint = codePoint;

  var getCodePoint = function() {
    return codePoint;
  }

  return {
    code: getCodePoint()
  };

}

chess.factory('Piece', function() {
  return Piece;
})
