'use strict';

function BoardSquare(coordinate, piece) {

  var isSelected = false;
  this.coordinate = coordinate;
  this.piece = piece;

  var isEmpty = function() {
    return getPiece.code != '\u0020';
  }

  var selectSquare = function() {
    this.isSelected = !this.isSelected;
  }

  var switchPiece = function(newPiece) {
    console.log('New Piece:', newPiece);
    this.piece.code = newPiece.code;
  }

  return {
    isSelected: isSelected,
    coord: coordinate,
    piece: piece,
    switch: switchPiece,
    isEmpty: isEmpty,
    select: selectSquare
  }

}

chess.factory('BoardSquare', function() {
  return BoardSquare;
})
