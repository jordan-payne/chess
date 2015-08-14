'use strict';

function ChessCtrl(Board, Pieces, Rules) {
  this.pieces = new Pieces().pieces;
  this.board = new Board(this.pieces).board;
  this.game = new Game(this.board);
}

chess.controller('ChessCtrl', ChessCtrl);
