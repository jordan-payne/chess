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
      this.game.currentMove.capturedPiece = this.game.board[id].piece;
      this.game.currentMove.capturedSquare = id;
      this.game.board[id].piece = this.game.currentMove.capturingPiece;
      this.game.board[this.game.currentMove.capturingSquare].piece = this.pieces.NO_PIECE;
      this.game.board[this.game.currentMove.capturingSquare].isSelected = false;
      this.game.board[this.game.currentMove.capturedSquare].isSelected = false;
      this.game.currentMove = {};
    } else {
      this.game.currentMove.capturingPiece = this.game.board[id].piece;
      this.game.currentMove.capturingSquare = id;
    }

  }

}

chess.controller('ChessCtrl', ChessCtrl);
