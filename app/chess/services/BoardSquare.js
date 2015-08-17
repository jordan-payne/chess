'use strict';

function BoardSquare(coordinate, piece) {

  var isSelected = false;
  this.coordinate = coordinate;
  this.piece = piece;
  var getCoordinate = function() {
    return coordinate;
  }

  var isEmpty = function() {
    return getPiece.code != '\u0020';
  }

  var selectSquare = function() {
    this.isSelected = !this.isSelected;
    this.switch();
  }

  var switchPiece = function() {
    console.log(this);
    console.log(this.piece);
    this.piece = new Piece('\u265A');
    console.log(this.piece);
  }

  return {
    isSelected: isSelected,
    coord: getCoordinate,
    piece: piece,
    switch: switchPiece,
    isEmpty: isEmpty,
    select: selectSquare
  }

}

chess.factory('BoardSquare', function() {
  return BoardSquare;
})
