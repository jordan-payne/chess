'use strict';

function ChessCtrl() {
  this.game = new Game();
  // console.log(this.game);



  // this.select = function(id) {
  //
  //   this.game.board[id].isSelected = !this.game.board[id].isSelected;
  //
  //   if (this.game.currentMove.capturingPiece) {
  //     this.game.currentMove.capturedPiece = this.game.board[id].piece;
  //     this.game.currentMove.capturedSquare = id;
  //     this.game.board[id].piece = this.game.currentMove.capturingPiece;
  //     this.game.board[this.game.currentMove.capturingSquare].piece = this.pieces.NO_PIECE;
  //     this.game.board[this.game.currentMove.capturingSquare].isSelected = false;
  //     this.game.board[this.game.currentMove.capturedSquare].isSelected = false;
  //     this.game.currentMove = {};
  //   } else if(this.game.board.squareNotEmpty(id)) {
  //     this.game.currentMove.capturingPiece = this.game.board[id].piece;
  //     this.game.currentMove.capturingSquare = id;
  //   }
  //
  // }

}

chess.controller('ChessCtrl', ChessCtrl);
