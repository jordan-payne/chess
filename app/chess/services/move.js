'use strict';

function Move() {

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

    s.move.capturingColor = color;
    switch(s.move.capturingColor) {
      case s.turn.$value:
        console.log('It is your turn!');
        s.move.capturingPiece = s.board[id].piece;
        s.messages.$add({'text': 'You have selected one of your pieces'});
    }

    // var capturingColor = that.get_board().get_square(squareId).get_piece().get_color();
    // var capturingSquare = that.get_move().get_capturing_square();
    // var selectedSquare = that.get_board().get_square(squareId);
    //
    // if (typeof capturingSquare == 'undefined') {
    //
    //   switch(capturingColor) {
    //     case that.get_turn():
    //       that.get_move().set_capturing_square(that.get_board().get_square(squareId));
    //       that.add_message('You have selected one of your pieces.');
    //       break;
    //     case 'NEUTRAL':
    //       that.add_message('You must select one of your own pieces.');
    //       selectedSquare.select();
    //       break;
    //     default:
    //       that.add_message('It is not your turn.');
    //       selectedSquare.select();
    //       break;
    //   }
    // } else {
    //
    //   switch(capturingColor) {
    //     case that.get_turn():
    //       that.add_message('You cannot capture your own piece.');
    //       selectedSquare.select();
    //       capturingSquare.select();
    //       break;
    //     case 'NEUTRAL':
    //       that.add_message('Capturing blank space.');
    //       selectedSquare.select();
    //       capturingSquare.select();
    //       selectedSquare.set_piece(capturingSquare.get_piece());
    //       capturingSquare.set_piece(piece({'code': '\u0020'}));
    //       that.set_turn();
    //       that.set_move(move({}));
    //       break;
    //     default:
    //       that.add_message('Capturing an enemy piece.');
    //       selectedSquare.select();
    //       capturingSquare.select();
    //       selectedSquare.set_piece(capturingSquare.get_piece());
    //       capturingSquare.set_piece(piece({'code': '\u0020'}));
    //       that.set_turn();
    //       that.set_move(move({}));
    //   }
    //
    // }

  }




}


chess.service('moveService', Move);
