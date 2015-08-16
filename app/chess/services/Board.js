'use strict';

function Board(pieces) {

  var board =
    {
      'a8': new BoardSquare('a8', new Piece('\u2656')),
      'b8': new BoardSquare('b8', new Piece('\u2658')),
      'c8': new BoardSquare('c8', new Piece('\u2657')),
      'd8': new BoardSquare('d8', new Piece('\u2655')),
      'e8': new BoardSquare('e8', new Piece('\u2654')),
      'f8': new BoardSquare('f8', new Piece('\u2657')),
      'g8': new BoardSquare('g8', new Piece('\u2658')),
      'h8': new BoardSquare('h8', new Piece('\u2656')),
      'a7': new BoardSquare('a7', new Piece('\u2659')),
      'b7': new BoardSquare('b7', new Piece('\u2659')),
      'c7': new BoardSquare('c7', new Piece('\u2659')),
      'd7': new BoardSquare('d7', new Piece('\u2659')),
      'e7': new BoardSquare('e7', new Piece('\u2659')),
      'f7': new BoardSquare('f7', new Piece('\u2659')),
      'g7': new BoardSquare('g7', new Piece('\u2659')),
      'h7': new BoardSquare('h7', new Piece('\u2659')),
      'a6': new BoardSquare('a6', new Piece('\u0020')),
      'b6': new BoardSquare('b6', new Piece('\u0020')),
      'c6': new BoardSquare('c6', new Piece('\u0020')),
      'd6': new BoardSquare('d6', new Piece('\u0020')),
      'e6': new BoardSquare('e6', new Piece('\u0020')),
      'd6': new BoardSquare('d6', new Piece('\u0020')),
      'e6': new BoardSquare('e6', new Piece('\u0020')),
      'f6': new BoardSquare('f6', new Piece('\u0020')),
      'g6': new BoardSquare('g6', new Piece('\u0020')),
      'h6': new BoardSquare('h6', new Piece('\u0020')),
      'a5': new BoardSquare('a5', new Piece('\u0020')),
      'b5': new BoardSquare('b5', new Piece('\u0020')),
      'c5': new BoardSquare('c5', new Piece('\u0020')),
      'd5': new BoardSquare('d5', new Piece('\u0020')),
      'e5': new BoardSquare('e5', new Piece('\u0020')),
      'd5': new BoardSquare('d5', new Piece('\u0020')),
      'e5': new BoardSquare('e5', new Piece('\u0020')),
      'f5': new BoardSquare('f5', new Piece('\u0020')),
      'g5': new BoardSquare('g5', new Piece('\u0020')),
      'h5': new BoardSquare('h5', new Piece('\u0020')),
      'a4': new BoardSquare('a4', new Piece('\u0020')),
      'b4': new BoardSquare('b4', new Piece('\u0020')),
      'c4': new BoardSquare('c4', new Piece('\u0020')),
      'd4': new BoardSquare('d4', new Piece('\u0020')),
      'e4': new BoardSquare('e4', new Piece('\u0020')),
      'd4': new BoardSquare('d4', new Piece('\u0020')),
      'e4': new BoardSquare('e4', new Piece('\u0020')),
      'f4': new BoardSquare('f4', new Piece('\u0020')),
      'g4': new BoardSquare('g4', new Piece('\u0020')),
      'h4': new BoardSquare('h4', new Piece('\u0020')),
      'a3': new BoardSquare('a3', new Piece('\u0020')),
      'b3': new BoardSquare('b3', new Piece('\u0020')),
      'c3': new BoardSquare('c3', new Piece('\u0020')),
      'd3': new BoardSquare('d3', new Piece('\u0020')),
      'e3': new BoardSquare('e3', new Piece('\u0020')),
      'd3': new BoardSquare('d3', new Piece('\u0020')),
      'e3': new BoardSquare('e3', new Piece('\u0020')),
      'f3': new BoardSquare('f3', new Piece('\u0020')),
      'g3': new BoardSquare('g3', new Piece('\u0020')),
      'h3': new BoardSquare('h3', new Piece('\u0020')),
      'a2': new BoardSquare('a2', new Piece('\u265F')),
      'b2': new BoardSquare('b2', new Piece('\u265F')),
      'c2': new BoardSquare('c2', new Piece('\u265F')),
      'd2': new BoardSquare('d2', new Piece('\u265F')),
      'e2': new BoardSquare('e2', new Piece('\u265F')),
      'f2': new BoardSquare('f2', new Piece('\u265F')),
      'g2': new BoardSquare('g2', new Piece('\u265F')),
      'h2': new BoardSquare('h2', new Piece('\u265F')),
      'a1': new BoardSquare('a1', new Piece('\u265C')),
      'b1': new BoardSquare('b1', new Piece('\u265E')),
      'c1': new BoardSquare('c1', new Piece('\u265D')),
      'd1': new BoardSquare('d1', new Piece('\u265B')),
      'e1': new BoardSquare('e1', new Piece('\u265A')),
      'f1': new BoardSquare('f1', new Piece('\u265D')),
      'g1': new BoardSquare('g1', new Piece('\u265E')),
      'h1': new BoardSquare('h1', new Piece('\u265C'))
    };

    var getSquare = function(squareId) {
      return board[squareId];
    }

    return {
      square: getSquare
    }

}

chess.factory('Board', function() {
  return Board;
})
