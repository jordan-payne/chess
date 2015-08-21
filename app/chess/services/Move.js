'use strict';

function Move() {
  //yup
  this.move = function(s, id) {
    s.board[id].isSelected = !s.board[id].isSelected;
    var color;
    switch(s.board[id].piece) {
      case '\u0020':
        color = 'NEUTRAL';
        break;
      case '\u2654':
        color = 'WHITE';
        break;
      case '\u2655':
        color = 'WHITE';
        break;
      case '\u2656':
        color = 'WHITE';
        break;
      case '\u2657':
        color = 'WHITE';
        break;
      case '\u2658':
        color = 'WHITE';
        break;
      case '\u2659':
        color = 'WHITE';
        break;
      default:
        color = 'BLACK';
    }

    if (typeof s.move.capturingSquare == 'undefined') {
      s.move.capturingColor = color;
      switch(s.move.capturingColor) {
        case s.turn.$value:
          s.move.capturingPiece = s.board[id].piece;
          s.move.capturingSquare = id;
          s.messages.$add({'text': 'You have selected one of your pieces.'});
          break;
        default:
          s.messages.$add({'text': 'You must select one of your own pieces.'});
          s.board[id].isSelected = false;
          break;
      }
    } else {
      switch(color) {
        case s.turn.$value:
          s.messages.$add({'text': 'You cannot capture your own piece.'});
          s.board[s.move.capturingSquare].isSelected = false;
          s.board[id].isSelected = false;
          s.move = {};
          break;
        case 'NEUTRAL':
          s.messages.$add({'text': s.move.capturingPiece+s.move.capturingSquare+id});
          s.board[s.move.capturingSquare].isSelected = false;
          s.board[id].isSelected = false;
          s.board[id].piece = s.move.capturingPiece;
          s.board[s.move.capturingSquare].piece = '\u0020';
          s.turn.$value = s.turn.$value.localeCompare('BLACK') == 0 ? 'WHITE' : 'BLACK';
          s.move = {};
          break;
        default:
          s.messages.$add({'text': s.move.capturingPiece+s.move.capturingSquare+id+s.board[id].piece});
          s.board[s.move.capturingSquare].isSelected = false;
          s.board[id].isSelected = false;
          s.board[id].piece = s.move.capturingPiece;
          s.board[s.move.capturingSquare].piece = '\u0020';
          s.turn.$value = s.turn.$value.localeCompare('BLACK') == 0 ? 'WHITE' : 'BLACK';
          s.move = {};
      }
    }
  }
}


chess.service('moveService', Move);
