'use strict';

function ChessCtrl(Board, Pieces, Rules) {
  this.pieces = new Pieces().pieces;
  this.board = new Board(this.pieces).board;
}

chess.controller('ChessCtrl', ChessCtrl);
