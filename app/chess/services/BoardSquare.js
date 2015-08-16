'use strict';

function BoardSquare(coordinate, piece) {

  var isSelected = false;
  this.coordinate = coordinate;
  var piece = piece;

  var getCoordinate = function() {
    return this.coordinate;
  }

  var getPiece = function() {
    return piece;
  }

  var isEmpty = function() {
    return getPiece.code != '\u0020';
  }

  return {
    isSelected: isSelected,
    coord: getCoordinate,
    piece: getPiece(),
    isEmpty: isEmpty
  }

}

chess.factory('BoardSquare', function() {
  return BoardSquare;
})
