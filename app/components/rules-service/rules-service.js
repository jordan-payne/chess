'use strict';

angular.module('chessApp.rulesService', [])

.service('rulesSvc', [function() {

  var PIECE_COLOR = {
    'WHITE': 0,
    'BLACK': 1
  }

  this.isLegal = function(move, turn, capturedPiece) {

    var capturingPieceColor = pieceColorInterpolator(move.capturingPiece);

    if (capturingPieceColor != turn) {
      return false;
    }

    if (capturedPiece) {
      var capturedPieceColor = pieceColorInterpolator(capturedPiece);
    } else {
      return true;
    }

    if (capturingPieceColor != capturedPieceColor) {
      return true;
    } else {
      return false;
    }
  }

  var pieceColorInterpolator = function(chessPiece) {
    var chessPieceNumber = Number(chessPiece.replace('&#', ''));
    if (chessPieceNumber >= 9812 && chessPieceNumber <= 9817) {
      return PIECE_COLOR.WHITE;
    } else if (chessPieceNumber >= 9818 && chessPieceNumber <= 9823) {
      return PIECE_COLOR.BLACK;
    } else {
      return -1;
    }
  }

}]);
