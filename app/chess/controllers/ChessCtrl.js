'use strict';

function ChessCtrl($scope, Board, Pieces, Rules) {
  this.pieces = new Pieces().pieces;
  this.board = new Board(this.pieces).board;
  this.game = new Game(this.board);

  this.isSelected = function(chessSquareId) {
    return this.game.board[chessSquareId].isSelected;
  }

  this.getPiece = function(chessSquareId) {
    return this.game.getPiece(chessSquareId);
  }

  this.select = function(id) {

    this.game.board[id].isSelected = !this.game.board[id].isSelected;

    if (this.game.currentMove.capturingPiece) {

    } else {
      this.game.currentMove.capturingPiece = id;
    }


    console.log('clicked');
    console.log(id);
  }

}

chess.controller('ChessCtrl', ChessCtrl);
