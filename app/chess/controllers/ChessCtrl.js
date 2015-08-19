'use strict';

function ChessCtrl() {

  var chess = game({
      'turn': 'WHITE',
      'move': move({}),
      'board': board({}),
      'messages': []
  });

  console.log(chess.get_move().get_capturing_square());

  return chess;
}

chess.controller('ChessCtrl', [ChessCtrl]);
